import { createMocks } from 'node-mocks-http';
import handlerID from '../pages/api/organization/[id]';
import handlerAdd from '../pages/api/organization/add';

jest.setTimeout(300000);

const testOrg = {
  name: "Test Organization",
  description: "This is a test organization"
}

var insertedID;

describe('/api/organization/add', () => {
  test('adds organization', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: testOrg,
    });

    await handlerAdd(req, res);

    const data = JSON.parse(res._getData());

    insertedID = data.id;

    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/organization/[id]', () => {
  test('returns organization', async () => {

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