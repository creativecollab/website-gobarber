import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../Services/Api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredetials {
  email: string;
  password: string;
}

interface AuthContextI {
  user: object;
  signIn(credentials: SignInCredetials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextI>({} as AuthContextI);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  /**
   *METODO SIGNOUT
   */
  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextI {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Error Auth');
  }

  return context;
}

export { AuthProvider, useAuth };
