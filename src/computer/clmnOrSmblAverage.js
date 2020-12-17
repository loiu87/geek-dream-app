/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */

export default ({ datas, index }) => {
  let parsedData = [];
  datas.map((data) => {
    const value = Object.values(data)[index];
    if (value) {
      const numOfData = value.split("|").length;
      if (isNaN(numOfData)) {
        return 0;
      } else {
        parsedData = [...parsedData, numOfData];
        return 0;
      }
    }

    return null;
  });

  const sum = parsedData.reduce((a, b) => {
    return a + b;
  }, 0);
  const avg = sum / parsedData.length;
  return avg;
};
