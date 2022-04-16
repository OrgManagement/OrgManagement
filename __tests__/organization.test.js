import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/organization/[id]';
import handlerAdd from '../pages/api/organization/add';


jest.setTimeout(300000)

describe('/api/[id]', () => {
  test.skip('returns organization', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: '3',
      },
    });

    await handlerID(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/add', () => {
  test('adds organization', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: "org"
      },
    });

    await handlerAdd(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});