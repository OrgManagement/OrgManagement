import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/event/[id]';
import handlerAdd from '../pages/api/event/add';

jest.setTimeout(300000);

const testEvent = {
  name: "event",
  location: "here",
  description: "will be fun",
  startTime: new Date('2022-04-17T12:00:00Z'),
  endTime: new Date('2022-04-17T13:00:00Z')
}

var insertedID;

describe('/api/event/add', () => {
  test('adds event', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: testEvent,
    });

    await handlerAdd(req, res);

    const data = JSON.parse(res._getData());

    insertedID = data.id;

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/event/[id]', () => {
  test('returns event', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        id: insertedID,
      },
    });

    await handlerID(req, res);

    const data = JSON.parse(res._getData())
    console.log(data);

    expect(res._getStatusCode()).toBe(200);
  });
});