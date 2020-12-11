/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */

export default ({ now, datas, index }) => {
  let parsedData = [];
  datas.map((data) => {
    const releaseDate = new Date(
      Object.values(data)[index]
        ? new Date(Object.values(data)[index])
        : Object.values(data)[index + 1]
    );
    const value = Math.floor(
      (now.getTime() - releaseDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    // console.log(value);
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
