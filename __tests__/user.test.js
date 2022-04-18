import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/user/[id]';
import handlerAdd from '../pages/api/user/add';

jest.setTimeout(300000);

const testUser = {
  firstname: "John",
  lastname: "Doe",
  email: "jdoe@rpi.edu",
  rcsid: "jdoe",
  joinedat: new Date('2022-04-17T09:00:00Z')
}

var insertedID;

describe('/api/user/add', () => {
  test('adds user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: testUser,
    });

    await handlerAdd(req, res);

    const data = JSON.parse(res._getData());

    insertedID = data.id;

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/user/[id]', () => {
  test('returns user', async () => {
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