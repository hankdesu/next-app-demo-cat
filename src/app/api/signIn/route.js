import { v4 as uuidV4 } from 'uuid';
import { serialize } from 'cookie';

export const users = new Map()

export async function POST(req, res) {
  const { body } = req;
  const { username, password } = body;

  const userId = uuidV4();
  users.set(userId, { username, password });

  const cookie = serialize('user_id', userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 15,
      path: '/',
  })

  return new Response(JSON.stringify({ id: userId, username }), {
    status: 200,
    headers: { 'Set-Cookie': cookie }
  });
}
