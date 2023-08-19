import jwt from "jsonwebtoken";
import { misc_config } from "../configs/vars";

export class _AuthLibrary {
  verifyAccessToken(access_token: string): { token_data: any; error: any } {
    // We want to pass the error to the function that is calling this function when an error was thrown
    const result: { token_data: any; error: string } = {
      token_data: null,
      error: "",
    };
    try {
      result.token_data = jwt.verify(
        access_token,
        misc_config.ACCESS_TOKEN_KEY!,
      );
    } catch (error: any) {
      result.error = error;
    }
    return result;
  }
  verifyCookie(
    _: any,
    args: any,
    context: any,
  ): { token_data: any; error: any } {
    let result: { token_data: any; error: any } = {
      token_data: null,
      error: null,
    };
    try {
      if (context.cookies) {
        let token = context.cookies[`access_token`];
        result = this.verifyAccessToken(token);
      }
    } catch (e) {
      console.log(e);
      result.error = e;
    }
    return result;
  }
  async decodeAccessToken(access_token: string) {
    const payload = jwt.decode(access_token);
    return payload;
  }
}
