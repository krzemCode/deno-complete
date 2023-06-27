import { Hono, HTTPException } from 'hono/mod.ts';
import { serve } from 'std/http/server.ts';
import { readJson } from '@/utils/jsonUtils.ts';
import { fetchUsers } from './utils/fetchUtils.ts';

const app = new Hono();

app.get('/', (c) => {
  return c.text(
    'Hello what!',
  );
});

app.get('/users', async (c) => {
  const file = await readJson('./data/fakeUsers.json');
  return c.json(file);
});

app.get('/clients', async (c) => {
  const file = await readJson('./mock/mockClients.json');
  return c.json(file);
});

app.get('/foreign-users', async (c) => {
  const foreignUsers = await fetchUsers();
  return c.json(foreignUsers);
});

app.get('/exception', () => {
  throw new HTTPException(401, { message: 'Not Allowed!!!' });
});

serve(app.fetch, { port: 8001 });
