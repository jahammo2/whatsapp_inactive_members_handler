import camelCaseData from './camelCaseData';

describe('camelCaseData', () => {
  it('camel cases all keys', () => {
    const boxFileLocation = 'https://fastradius.box.com/s/lol';
    const testMeOne = 'foo';
    const testMeTwo = 'bar';
    const testMeThree = 'baz';

    const data = {
      costing_requests : [
        {
          box_file_location : boxFileLocation,
          crli_count        : 2,
          id                : 1,
          line_items        : [
            { test_me : testMeOne, id : 1 },
            { test_me : testMeTwo, id : 2 },
            { test_me : testMeThree, id : 3 },
          ],
          opportunity_id : 'nice',
        },
      ],
      order : {
        test_me : testMeOne,
        id      : 1,
      },
    };

    const camelCased = camelCaseData(data);

    expect(camelCased.order.testMe).toEqual(testMeOne);
    expect(camelCased.costingRequests[0].boxFileLocation).toEqual(boxFileLocation);
    expect(camelCased.costingRequests[0].lineItems[0].testMe).toEqual(testMeOne);
    expect(camelCased.costingRequests[0].lineItems[1].testMe).toEqual(testMeTwo);
    expect(camelCased.costingRequests[0].lineItems[2].testMe).toEqual(testMeThree);
  });
});
