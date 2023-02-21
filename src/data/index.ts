export type SheetUserType = {
  id: number;
  user: string;
  password: string;
};

export type SheetDatumType = {
  "Journalist's Name": string;
  "Media Name": string;
  "To pitch?": string;
  "Info:": string;
  "Search citations": string;
};

export const sheetUsers: SheetUserType[] = [];
export const sheetData: SheetDatumType[] = [];
export { loadDoc } from "./load";
