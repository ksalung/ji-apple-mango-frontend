"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  refresh: () => void;
  logout: () => void;
  email: string;
  name?: string;
  avatarUrl?: string;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isLoading: true,
  refresh: () => { },
  logout: () => { },
  email: "",
  name: "",
  avatarUrl: "",
});

interface UserInfo {
  logged_in: boolean;
  email: string;
  name?: string;
  avatarUrl?: string;
}

export const AuthProvider = ({ children, initialUser }: { children: ReactNode; initialUser?: UserInfo | null }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialUser?.logged_in || false);
  const [isLoading, setIsLoading] = useState(!initialUser);
  const [email, setEmail] = useState(initialUser?.email || "");
  const [name, setName] = useState(initialUser?.name || "");
  const [avatarUrl, setAvatarUrl] = useState(initialUser?.avatarUrl || "");

  // Update state if initialUser changes (e.g. on navigation if layout re-fetches, though usually layout persists)
  useEffect(() => {
    if (initialUser) {
      setIsLoggedIn(initialUser.logged_in);
      setEmail(initialUser.email || "");
      setName(initialUser.name || "");
      setAvatarUrl(initialUser.avatarUrl || "");
      setIsLoading(false);
    }
  }, [initialUser]);

  const refresh = () => {
    setIsLoading(true);
    setIsLoggedIn(true);
    // fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/status`, {
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("[Auth] Status API response:", data);
    //     setIsLoggedIn(data.logged_in);
    //     setEmail(data.email);
    //   })
    //   .catch((err) => {
    //     console.error("[Auth] Status check failed:", err);
    //     setIsLoggedIn(false);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const logout = () => {
    console.log("[Auth] Logging out...");
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logout`, {
      method: "GET",
      credentials: "include",
    }).finally(() => {
      console.log("[Auth] Logged out");
      setIsLoggedIn(false);
      window.location.href = "/";
    });
  };

  // 처음 로딩될 때 1번만 실행
  useEffect(() => {
    if (!initialUser) {
      refresh();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, refresh, logout, email, name, avatarUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
