import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, createToken, COOKIE_NAME_EXPORT } from "@/lib/auth";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const user = await prisma.user.findUnique({ where: { username: data.username } });
    if (!user) return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    if (user.banned) return NextResponse.json({ error: "账号已封禁: " + (user.banReason || "未知原因") }, { status: 403 });
    if (!verifyPassword(data.password, user.password)) return NextResponse.json({ error: "密码错误" }, { status: 401 });

    await prisma.user.update({ where: { id: user.id }, data: { lastLogin: new Date() } });
    const token = createToken(user.id, user.role);
    const res = NextResponse.json({ user: { id: user.id, username: user.username, role: user.role } });
    res.cookies.set(COOKIE_NAME_EXPORT, token, { httpOnly: true, maxAge: 604800, sameSite: "lax" });
    return res;
  } catch (e) {
    return NextResponse.json({ error: "登录失败" }, { status: 400 });
  }
}
