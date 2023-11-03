import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const tokenCreator = (obj: object): Promise<string> => {
  return new Promise((resolve, reject) => {
    if(typeof secret === "string"){
        jwt.sign(obj, secret , (err, code) => {
          if (err) {
            reject(err.message);
          } else if (code) {
            resolve(code);
          } else {
            reject("Error occured");
          }
        });
    } else {
        reject("Secret not found");
    }
  });
};

// export const tokenVerify = ()