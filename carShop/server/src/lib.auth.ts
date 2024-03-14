import * as jwt from "jsonwebtoken";
import { User } from "../../models/user.model";
import { setting } from "../../setting/settings";

const secret = setting.botJwtSecret;
const tokenLifeSpan = setting.jwtTokenLifeTime;

export const generateAuthToken = (payload: any) => {
  return jwt.sign(payload, secret, {
    expiresIn: `${tokenLifeSpan}d`,
    algorithm: `HS256`,
  });
};

export const verifyAuthToken = (idToken: string) => {
  try {
    return <User>jwt.verify(idToken, secret);
  } catch (error) {
    console.error(error);
    return null;
  }
};
