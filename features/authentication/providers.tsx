"use client"
import {ReactNode} from "react"
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
 
if (!uri) console.log("NEXT_PUBLIC_REDIRECT_URI is not set");
else console.log("NEXT_PUBLIC_REDIRECT_URI is: " +  uri );

const oidcConfig: AuthProviderProps = {
  // authority: "https://dev-zrzezw0kftjiq5sl.us.auth0.com/",
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "dorian-class-demo",
  redirect_uri: `${uri}`,

  onSigninCallback: async (user) => {
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, newUrl);
    // console.log("sign in callback, ", user?.id_token);
    document.cookie = `jwt_token=${user?.id_token}`
  },
};


export default function Providers({children}: {children: ReactNode}) {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>
}