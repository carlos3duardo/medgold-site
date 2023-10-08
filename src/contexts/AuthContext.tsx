import { ReactNode, createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import axios from 'axios';

type AuthContextData = {
  token: string | undefined;
};

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | undefined>(() => {
    return getCookie('@medgold.token');
  });

  useEffect(() => {
    if (!token) {
      console.info('Gerando novo access token na API da MedGold.');

      axios
        .post('/auth')
        .then((response) => {
          setToken(response.data.access_token);
          setCookie('@medgold.token', response.data.access_token, {
            maxAge: 60 * 60 * 24 * 7, // 7 dias
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}
