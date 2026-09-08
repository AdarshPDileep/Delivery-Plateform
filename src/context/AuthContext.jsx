import { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../data/users';
import { loginAdmin, logoutAdmin } from '../api/api';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for saved session
    const savedUser = localStorage.getItem('cg_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, portal) => {
    // Mock login logic
    const found = users.find(u => u.email === email && u.portal === portal);
    
    if (found) {
      // In a real app, verify password here
      setUser(found);
      localStorage.setItem('cg_user', JSON.stringify(found));
      return true;
    }
    return false;
  };

  const loginWithAdminBackend = async (email, password) => {
    const response = await loginAdmin(email, password);
    const adminUser = {
      id: 'ADMIN_LOCAL',
      name: 'Admin User',
      email: response.data.email,
      role: response.data.role || 'ADMIN',
      portal: 'admin',
      status: 'Active',
      token: response.data.token,
      lastLogin: new Date().toISOString(),
    };

    setUser(adminUser);
    localStorage.setItem('cg_user', JSON.stringify(adminUser));
    localStorage.setItem('cg_admin_token', response.data.token);
    return adminUser;
  };

  const logout = async () => {
    const activeUser = user;

    try {
      if (activeUser?.portal === 'admin') {
        await logoutAdmin(activeUser.token || localStorage.getItem('cg_admin_token'));
      }
    } catch {
      // Local sign-out should still complete if the backend is unavailable.
    } finally {
      setUser(null);
      localStorage.removeItem('cg_user');
      localStorage.removeItem('cg_admin_token');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithAdminBackend, logout, loading, isAuthenticated: !!user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}




