/* eslint-disable import/no-anonymous-default-export */

export default ({ datas, index }) => {
  let parsedData = [];
  datas.map((data) => {
    const value = parseInt(Object.values(data)[index]);
    if (isNaN(value)) {
      return 0;
    } else {
      parsedData = [...parsedData, value];
      return 0;
    }
  });

  const sum = parsedData.reduce((a, b) => {
    return a + b;
  }, 0);
  const avg = sum / parsedData.length;
  return avg;
};
