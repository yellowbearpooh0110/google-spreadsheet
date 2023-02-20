import { Request, Response } from "express";
import Joi from "joi";
import { sheetData } from "../data";

export const GetAllData = (req: Request, res: Response) => {
  const schema = Joi.object<{
    search: string;
  }>({
    search: Joi.string(),
  });

  const { value, error } = schema.validate(req.query);

  const search = value.search.toLowerCase();

  if (error) res.json({ validationError: error });
  else {
    if (!search) res.json({ data: sheetData });
    res.json({
      data: sheetData.filter(
        (item) =>
          item["Info:"].toLowerCase().includes(search) ||
          item["Journalist's Name"].toLowerCase().includes(search) ||
          item["Media Name"].toLowerCase().includes(search) ||
          item["Search citations"].toLowerCase().includes(search) ||
          item["To pitch?"].toLowerCase().includes(search)
      ),
    });
  }
};
