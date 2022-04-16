import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/organization/[id]';

describe('/api/[id]', () => {
  test('returns organization', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: '3',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/add', () => {
  test('adds organization', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {
        name: "org"
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});