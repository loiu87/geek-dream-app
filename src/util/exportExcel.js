/* eslint-disable import/no-anonymous-default-export */
import * as XLSX from "xlsx";

export default (data) => {
  let ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "test");
  XLSX.writeFile(wb, "result.xlsx");
};
