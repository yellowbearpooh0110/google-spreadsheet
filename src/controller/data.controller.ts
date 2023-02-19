import { Request, Response } from "express";
import Joi from "joi";
import { sheetData } from "../data";

export const GetAllData = (req: Request, res: Response) => {
  const schema = Joi.object<{
    search: string;
  }>({
    search: Joi.string(),
  });

  const {
    value: { search },
    error,
  } = schema.validate(req.query);

  // tslint:disable-next-line:no-console
  console.log(req.query);

  if (error) res.json({ validationError: error });
  else {
    if (!search) res.json({ data: sheetData });
    res.json({
      data: sheetData.filter(
        (item) =>
          item["Info:"].includes(search) ||
          item["Journalist's Name"].includes(search) ||
          item["Media Name"].includes(search) ||
          item["Search citations"].includes(search) ||
          item["To pitch?"].includes(search)
      ),
    });
  }
};
