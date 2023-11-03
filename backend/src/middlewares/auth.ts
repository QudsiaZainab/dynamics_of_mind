import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { findUserId } from "../models/auth";
import { findAdminId } from "../models/admin/auth";


// export function idExtractor(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ):void {
//   try {
//     let token = req.headers.authorization;
//     if (token) {
//       token = token?.split(" ")[1];
//       const JWT_SECRET = process.env.SECRET!;
//       jwt.verify(token, JWT_SECRET, async (err, decode: any) => {
//         if (err) {
//           res.send(403).json({ message: err.message });
//         } else {
//           if (decode) {
//             const userObj = await findUserId(decode.id);
//             if (userObj) {
//               req.user = userObj?.user_id;
//               next();
//             } else {
//               res.status(403).json({ message: "Error Occured" });
//             }
//           }
//         }
//       });
//     } else {
//       res.status(403).json({ message: "Not Authenticated" });
//     }
//   } catch (err) {
//     res
//       .status(403)
//       .send({ err, message: "Error occured. Please try again later" });
//   }
// }

export function idExtractor(
  req: Request,
  res: Response,
  next: NextFunction
):void {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token?.split(" ")[1];
      const JWT_SECRET = process.env.SECRET!;
      jwt.verify(token, JWT_SECRET, async (err, decode: any) => {
        if (err) {
          res.send(403).json({ message: err.message });
        } else {
          if (decode) {
            if(decode.userType === "admin"){
              const adminObj = await findAdminId(decode.id);
              if(adminObj) {
                req.admin = adminObj.id;
                next();
              } else {
                res.status(403).json({message:"Error Occured"})
              }
            } else if(decode.userType === "user"){
              const userObj = await findUserId(decode.id);
              if (userObj) {
                req.user = userObj?.user_id;
                next();
              } else {
                res.status(403).json({ message: "Error Occured" });
              }

            } else {
              res.status(500).json({message:"Error Occured. Try again"})
            }
          }
        }
      });
    } else {
      res.status(403).json({ message: "Not Authenticated" });
    }
  } catch (err) {
    res
      .status(403)
      .send({ err, message: "Error occured. Please try again later" });
  }
}
