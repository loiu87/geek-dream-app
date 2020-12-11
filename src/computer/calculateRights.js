/* eslint-disable import/no-anonymous-default-export */
export default (
  data,
  nowYear,
  values,
  avrgNumOfClaim,
  avrgNumOfInventer,
  avrgRemainingYears,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry
) => {
  if (values[0]) {
    const rightsCompletness =
      parseInt(values[6]) /
      avrgNumOfClaim /
      (parseInt(values[7]) / avrgNumOfInventer);
    const rightsLife =
      (parseInt(values[3]) + 20 - nowYear) / avrgRemainingYears;
    const rightsScalability =
      parseInt(values[9]) /
      parseInt(values[10]) /
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
