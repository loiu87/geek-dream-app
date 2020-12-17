import { INDEX } from "../constants";

/* eslint-disable import/no-anonymous-default-export */
export default (
  data,
  nowYear,
  values,
  avrgNumOfClaim,
  avrgNumOfInventors,
  avrgRemainingYears,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry
) => {
  if (values[1]) {
    // console.log(values);
    const rightsCompletness =
      parseInt(values[INDEX.numOfClaim]) /
      avrgNumOfClaim /
      (parseInt(values[INDEX.numOfInventors]) / avrgNumOfInventors);
    const rightsLife =
      (parseInt(values[INDEX.filingDate]) + 20 - nowYear) / avrgRemainingYears;
    // console.log(values[INDEX.filingDate]);
    const rightsScalability =
      parseInt(values[INDEX.numOfFamilyPatent]) /
      parseInt(values[INDEX.numOfFamilyContry]) /
      (avrgNumOfFamilyPatent / avrgNumOfFamilyContry);
    data["권리의 완성도"] = rightsCompletness;
    data["권리의 수명"] = rightsLife;
    data["권리의 확장성"] = rightsScalability;
    data["배점: 권리의 완성도"] =
      rightsCompletness >= 1.0
        ? 10
        : rightsCompletness >= 0.8
        ? 7.5
        : rightsCompletness >= 0.6
        ? 5
        : 2.5;
    data["배점: 권리의 수명"] =
      rightsLife >= 1.3
        ? 10
        : rightsLife >= 1.0
        ? 7.5
        : rightsLife >= 0.7
        ? 5
        : 2.5;
    data["배점: 권리의 확장성"] =
      rightsLife >= 1.2
        ? 10
        : rightsLife >= 0.9
        ? 7.5
        : rightsLife >= 0.6
        ? 5
        : 2.5;
  }
};
