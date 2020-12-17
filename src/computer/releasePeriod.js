/* eslint-disable import/no-anonymous-default-export */
import { MILLISECONDS_PER_DAY } from "../constants";

export default ({ now, data, index }) => {
  const releaseDate = new Date(
    Object.values(data)[index]
      ? new Date(Object.values(data)[index])
      : Object.values(data)[index + 1]
  );
  const releasePeriod = Math.floor(
    (now.getTime() - releaseDate.getTime()) / MILLISECONDS_PER_DAY
  );
  return releasePeriod;
};
