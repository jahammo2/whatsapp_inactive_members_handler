import _ from 'lodash';

function camelCase(data) {
  const arr = Object.keys(data);

  if (Array.isArray(data)) {
    return data.map(value => {
      if (_.isObject(value)) return camelCase(value);
      return value;
    });
  }

  return arr.reduce((accumulator, key) => {
    const formattedKey = _.camelCase(key);
    let value = data[key];

    if (_.isObject(value)) value = camelCase(value);

    accumulator[formattedKey] = value;
    return accumulator;
  }, {});
}

export default function (data) {
  return camelCase(data);
}
