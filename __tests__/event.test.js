import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/event/[id]';
import handlerAdd from '../pages/api/event/add';

describe('/api/event/[id]', () => {
  test.skip('returns event', async () => {
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

describe('/api/event/add', () => {
  test.skip('adds event', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        id: "3",
        name: "event",
        location: "here",
        description: "will be fun",
        start: "Tuesday",
        end: "Wednesday"
      },
    });

    await handlerAdd(req, res);

    expect(res._getStatusCode()).toBe(200);
  });
});