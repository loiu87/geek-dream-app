import { INDEX } from "../constants";
import releasePeriod from "./releasePeriod";

export const calculateMarket = (
  data,
  now,
  values,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry,
  avrgPublicationDays
) => {
  if (values[0]) {
    const marketDefence =
      parseInt(values[INDEX.numOfFamilyPatent]) / avrgNumOfFamilyPatent;
    const marketEntry =
      parseInt(values[INDEX.numOfFamilyContry]) / avrgNumOfFamilyContry;
    const marketConcentration = 1; //tmp default value
    const marketDominance =
      releasePeriod({ now, data: values, index: INDEX.releaseDate }) /
      avrgPublicationDays;
    data["시장의 확보성"] = marketDefence;
    data["시장의 진출성"] = marketEntry;
    data["시장의 집중도"] = marketConcentration;
    data["시장의 선점도"] = marketDominance;
    data["배점: 시장의 확보성"] =
      marketDefence >= 1.0
        ? 4
        : marketDefence >= 0.8
        ? 3
        : marketDefence >= 0.6
        ? 2
        : 1;
    data["배점: 시장의 진출성"] =
      marketEntry >= 1.5
        ? 4
        : marketEntry >= 1.0
        ? 3
        : marketEntry >= 0.5
        ? 2
        : 1;
    data["배점: 시장의 집중도"] =
      marketEntry >= 1.6
        ? 6
        : marketEntry >= 1.2
        ? 4.5
        : marketEntry >= 0.8
        ? 3
        : 1.5;
    data["배점: 시장의 선점도"] =
      marketDominance >= 1.2
        ? 1.5
        : marketDominance >= 1.0
        ? 3
        : marketDominance >= 0.8
        ? 4.5
        : 6;
  }
};
