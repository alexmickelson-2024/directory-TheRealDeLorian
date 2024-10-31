import { cookies } from "next/headers";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { MyUser } from "../../features/authentication/myUserModel";

export async function getUserFromCookie() {
  const cookieLookup = cookies();
  const authToken = (await cookieLookup).get("jwt_token");
  
  if (authToken) {
    const JWKS = createRemoteJWKSet(
      new URL('https://auth.snowse.duckdns.org/realms/advanced-frontend/protocol/openid-connect/certs')
    );
    console.log("authtoken exists")
    try {

      const { payload, protectedHeader } = await jwtVerify(
        authToken.value,
        JWKS,
        {
          issuer: "https://auth.snowse.duckdns.org/realms/advanced-frontend",
          audience: "dorian-class-demo",
        }
      );
      //use data from payload to make an instance of muUserModel and return it
      // console.log("payload: ", payload); //payload.sub is the guid, use email anyway to ID users. 
      // console.log("protected header: ", protectedHeader);

      const myUser: MyUser = {
        givenName: payload.given_name as string ?? "",
        familyName: payload.family_name as string ?? "",
        expiration: payload.exp as number ?? "",
        email: payload.email as string ?? ""
      }
      return myUser;
    }
    catch(error) {
      console.log(error)
      return undefined;
    }
  }
}