/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import calculateRights from "../computer/calculateRights";
import calculateTechnology from "../computer/calculateTechnology";
import { calculateMarket } from "../computer/claculateMarket";

export default async (
  data,
  now,
  nowYear,
  avrgNumOfClaim,
  avrgNumOfInventors,
  avrgNumOfIPC,
  avrgRemainingYears,
  avrgNumOfFamilyPatent,
  avrgNumOfFamilyContry,
  avrgPublicationDays
) => {
  data.map((data) => {
    const values = Object.values(data);
    calculateTechnology(
      data,
      values,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgNumOfIPC
    );
    calculateRights(
      data,
      nowYear,
      values,
      avrgNumOfClaim,
      avrgNumOfInventors,
      avrgRemainingYears,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry
    );
    calculateMarket(
      data,
      now,
      values,
      avrgNumOfFamilyPatent,
      avrgNumOfFamilyContry,
      avrgPublicationDays
    );
  });
};
