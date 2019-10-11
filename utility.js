var isset = function (variable) {
  if (variable === '' || variable === null || variable === undefined) {
    return false;
  } else {
    return true;
  }
};

var keyvaluesToObject = function (values) {
  var obj = {}
  values.forEach(function (row) {
    obj[row[0]] = row[1]
  });
  Logger.log(obj);
  return obj
};

var valuesToObject = function (values) {
  var array = []
  var header = values[0];
  values = values.slice(1);
  values.forEach(function (row) {
    var obj = {};
    row.forEach(function (value, i) {
      if (header[i] == '') return;
      obj[header[i]] = value;
    });
    array.push(obj)
  });
  return array
};