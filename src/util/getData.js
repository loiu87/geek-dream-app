/* eslint-disable import/no-anonymous-default-export */
import clmnDaysAverage from "../computer/columnAverage";
import clmnOrSmblAverage from "../computer/clmnOrSmblAverage";
import clmnYearAverage from "../computer/clmnYearAverage";
import columnAverage from "../computer/columnAverage";
import { INDEX } from "../constants";

export default async (
  data,
  now,
  nowYear,
  setAvrgNumOfClaim,
  setAvrgNumOfInventors,
  setAvrgNumOfIPC,
  setAvrgRemainingYears,
  setAvrgNumOfFamilyPatent,
  setAvrgNumOfFamilyContry,
  setAvrgPublicationDays
) => {
  setAvrgNumOfClaim(columnAverage({ datas: data, index: INDEX.numOfClaim }));
  setAvrgNumOfInventors(
    columnAverage({ datas: data, index: INDEX.numOfInventors })
  );

  setAvrgNumOfIPC(clmnOrSmblAverage({ datas: data, index: INDEX.IPC }));
  setAvrgRemainingYears(
    clmnYearAverage({ nowYear, datas: data, index: INDEX.filingDate })
  );
  setAvrgNumOfFamilyPatent(
    columnAverage({ datas: data, index: INDEX.numOfFamilyPatent })
  );
  setAvrgNumOfFamilyContry(
    columnAverage({ datas: data, index: INDEX.numOfFamilyContry })
  );
  setAvrgPublicationDays(
    clmnDaysAverage({ now, datas: data, index: INDEX.releaseDate })
  );
};
