import { HTTPException } from 'hono/mod.ts';

export const readJson = async (path: string): Promise<Record<'users' | 'clients', any[]>> => {
  const status = await Deno.permissions.query({ name: 'read', path });
  if (status.state !== 'granted') throw new HTTPException(401, { message: 'File access denied!!!' });
  const dataJson = Deno.readTextFileSync(path);
  return JSON.parse(dataJson);
};
