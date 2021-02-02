/* eslint-disable import/no-anonymous-default-export */
import columnAverage from "../computer/columnAverage";
import { INDEX } from "../constants";

export default async ({
  data,
  setAvrgTechPerfection,
  setAvrgTechResponsibility,
  setAvrgTechConvergence,
  setAvrgTechPerfectionScore,
  setAvrgTechResponsibilityScore,
  setAvrgTechConvergenceScore,
  setAvrgRightsCompletness,
  setAvrgRightsLife,
  setAvrgRightsScalability,
  setAvrgRightsCompletnessScore,
  setAvrgRightsLifeScore,
  setAvrgRightsScalabilityScore,
  setAvrgMarketDefence,
  setAvrgMarketEntry,
  setAvrgMarketConcentration,
  setAvrgMarketDominance,
  setAvrgMarketDefenceScore,
  setAvrgMarketEntryScore,
  setAvrgMarketConcentrationScore,
  setAvrgMarketDominanceScore,
}) => {
  setAvrgTechPerfection(
    columnAverage({ datas: data, index: INDEX.techPerfection })
  );
  setAvrgTechResponsibility(
    columnAverage({ datas: data, index: INDEX.techResponsibility })
  );
  setAvrgTechConvergence(
    columnAverage({ datas: data, index: INDEX.techConvergence })
  );
  setAvrgTechPerfectionScore(
    columnAverage({ datas: data, index: INDEX.techPerfectionScore })
  );
  setAvrgTechResponsibilityScore(
    columnAverage({ datas: data, index: INDEX.techResponsibilityScore })
  );
  setAvrgTechConvergenceScore(
    columnAverage({ datas: data, index: INDEX.techConvergenceScore })
  );
  setAvrgRightsCompletness(
    columnAverage({ datas: data, index: INDEX.rightsCompletness })
  );
  setAvrgRightsLife(columnAverage({ datas: data, index: INDEX.rightsLife }));
  setAvrgRightsScalability(
    columnAverage({ datas: data, index: INDEX.rightsScalability })
  );
  setAvrgRightsCompletnessScore(
    columnAverage({ datas: data, index: INDEX.rightsCompletnessScore })
  );
  setAvrgRightsLifeScore(
    columnAverage({ datas: data, index: INDEX.rightsLifeScore })
  );
  setAvrgRightsScalabilityScore(
    columnAverage({ datas: data, index: INDEX.rightsScalabilityScore })
  );
  setAvrgMarketDefence(
    columnAverage({ datas: data, index: INDEX.marketDefence })
  );
  setAvrgMarketEntry(columnAverage({ datas: data, index: INDEX.marketEntry }));
  setAvrgMarketConcentration(
    columnAverage({ datas: data, index: INDEX.marketConcentration })
  );
  setAvrgMarketDominance(
    columnAverage({ datas: data, index: INDEX.marketDominance })
  );
  setAvrgMarketDefenceScore(
    columnAverage({ datas: data, index: INDEX.marketDefenceScore })
  );
  setAvrgMarketEntryScore(
    columnAverage({ datas: data, index: INDEX.marketEntryScore })
  );
  setAvrgMarketConcentrationScore(
    columnAverage({ datas: data, index: INDEX.marketConcentrationScore })
  );
  setAvrgMarketDominanceScore(
    columnAverage({ datas: data, index: INDEX.marketDominanceScore })
  );
};
