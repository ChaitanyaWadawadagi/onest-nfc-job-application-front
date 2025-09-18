// Minimal useAuth hook placeholder
import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null as any);
  return { user, setUser };
};
