import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/user/[id]';
import handlerAdd from '../pages/api/user/add';

describe('/api/user/[id]', () => {
  test.skip('returns user', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {
        id: "3",
      },
    });

    await handlerID(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/user/add', () => {
  test.skip('adds user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        id: "3",
        firstname: "test",
        lastname: "name",
        email: "test@gmail.com",
      },
    });

    await handlerAdd(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});