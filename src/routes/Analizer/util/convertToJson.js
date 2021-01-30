export const convertToJson = (csv) => {
  let lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    let pattern = /".*?"/g;
    let newLines = lines[i].replace(pattern, (data) => {
      return data.replace(/,/g, "`");
    });
    var currentline = newLines.split(",");

    for (var j = 0; j < headers.length; j++) {
      if (currentline[j] !== undefined) {
        obj[headers[j]] = currentline[j].replace(/`/g, ",");
      }
    }

    result.push(obj);
  }
  return result;
};
