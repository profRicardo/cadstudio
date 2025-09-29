import { useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simplified auth provider that doesn't depend on Supabase
  useEffect(() => {
    // Create a mock user for demo purposes
    const mockUser: User = {
      id: 'demo-user',
      email: 'demo@example.com',
      created_at: new Date().toISOString(),
      aud: 'authenticated',
      role: 'authenticated',
      updated_at: new Date().toISOString(),
      app_metadata: {},
      user_metadata: {},
      identities: [],
    };

    const mockSession: Session = {
      access_token: 'demo-token',
      refresh_token: 'demo-refresh',
      expires_in: 3600,
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      token_type: 'bearer',
      user: mockUser,
    };

    setSession(mockSession);
    setUser(mockUser);
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
