const zip = (keys, values) => {
  var result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
};

export default zip;
