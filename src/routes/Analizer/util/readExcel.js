import * as XLSX from "xlsx";
import { convertToJson } from "./convertToJson";

export const readExcel = async (event, setData, setRawData) => {
  let input = event.target;
  let reader = new FileReader();
  console.log(event.target.files[0].name);
  reader.onload = async () => {
    let data = reader.result;
    let workBook = XLSX.read(data, { type: "binary" });
    const sheetName = workBook.SheetNames[0];
    let workSheet = workBook.Sheets[sheetName];
    const result = XLSX.utils.sheet_to_csv(workSheet, { header: 1 });
    setRawData({
      fileName: event.target.files[0].name,
      content: result,
    });
    setData(convertToJson(result));
  };
  await reader.readAsBinaryString(input.files[0]);
};
