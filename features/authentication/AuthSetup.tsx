"use client";
import { useAuth } from "react-oidc-context";

export default function LoginLogoutButton() {
    const auth = useAuth();

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <div className="p-6"
                    onClick={() => {
                        document.cookie = "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                        void auth.removeUser();
                    }}
                >
                    Log Out
                
            </div>
        );
    }

    return <div className="p-6" onClick={() => void auth.signinRedirect()}>Log In</div>;
}
