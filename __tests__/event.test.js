import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/event/[id]';

describe('/api/[id]', () => {
  test('returns event', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {
        name: "name",
        location: "here",
        description: "will be fun",
        start: "Tuesday",
        end: "Wednesday"
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});