import { Request, Response } from "express";
import Joi from "joi";
import bcryptjs from "bcryptjs";
import passport from "passport";
import jwt from "jsonwebtoken";

import * as UserService from "../service/user.service";

// export const CreateUser = async (req: Request, res: Response) => {
//   const schema = Joi.object<{
//     name: string;
//     password: string;
//     repeat_password: string;
//     email: string;
//   }>({
//     name: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string()
//       .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
//       .required(),
//     repeat_password: Joi.ref("password"),
//     email: Joi.string()
//       .email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       })
//       .required(),
//   }).with("password", "repeat_password");

//   const {
//     value: { repeat_password, password, ..._validateRes },
//     error,
//   } = schema.validate(req.body);

//   if (error) res.json({ validationError: error });
//   else {
//     try {
//       const { password: passwordFromDB, ...userWithoutPassword } =
//         await UserService.CreateUser({
//           password: bcryptjs.hashSync(password),
//           ..._validateRes,
//         });
//       res.send({ success: true, user: userWithoutPassword });
//     } catch (dbError) {
//       res.status(500).json({ dbError });
//     }
//   }
// };

export const AuthenticateUser = (req: Request, res: Response) => {
  const schema = Joi.object<{
    name: string;
    password: string;
  }>({
    name: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) res.json({ validationError: error });
  else {
    passport.authenticate("local", { session: false }, (err, user, args) => {
      if (err || !user)
        return res.status(400).json({
          message: args.message || "Something is not right.",
          user,
        });

      req.login(user, { session: false }, (loginError) => {
        if (loginError) res.json({ loginError });
        // generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: 86400,
        });
        return res.json({ user, token });
      });
    })(req, res);
  }
};

export const GetUserProfile = (req: Request, res: Response) => {
  res.json({ user: req.user });
};
