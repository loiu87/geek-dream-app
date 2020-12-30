import { INDEX } from "../constants";

/* eslint-disable import/no-anonymous-default-export */
export default (
  data,
  values,
  avrgNumOfClaim,
  avrgNumOfInventors,
  avrgNumOfIPC
) => {
  if (values[0].length) {
    const techPerfection = parseInt(values[INDEX.numOfClaim]) / avrgNumOfClaim;
    const techResponsibility =
      parseInt(values[INDEX.numOfInventors]) / avrgNumOfInventors;

    const techConvergence =
      values[INDEX.IPC].toString().split("|").length / avrgNumOfIPC;
    data["기술완성도"] = techPerfection;
    data["기술신뢰성"] = techResponsibility;
    data["융복합성"] = techConvergence;
    data["배점: 기술완성도"] =
      techPerfection >= 1.3
        ? 8
        : techPerfection >= 1.0
        ? 6
        : techPerfection >= 0.7
        ? 4
        : 2;
    data["배점: 기술신뢰성"] =
      techResponsibility >= 1.3
        ? 6
        : techResponsibility >= 1.0
        ? 4.5
        : techResponsibility >= 0.7
        ? 3
        : 1.5;
    data["배점: 융복합성"] =
      techConvergence >= 1.0
        ? 6
        : techConvergence >= 0.8
        ? 4.5
        : techConvergence >= 0.6
        ? 3
        : 1.5;
  } else {
  }
};
