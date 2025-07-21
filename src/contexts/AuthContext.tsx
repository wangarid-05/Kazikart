import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios'

interface User {
  id: string
  email: string
  name: string
  userType: 'worker' | 'employer'
  profile?: any
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // In a real app, verify token with backend
      // For demo, we'll simulate a logged-in user
      setUser({
        id: '1',
        email: 'demo@kazikart.com',
        name: 'Demo User',
        userType: 'worker'
      })
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      const response = { data: { token: 'demo-token', user: { id: '1', email, name: 'Demo User', userType: 'worker' } } }
      localStorage.setItem('token', response.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      setUser(response.data.user)
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const register = async (userData: any) => {
    try {
      // Simulate API call
      const response = { data: { token: 'demo-token', user: { id: '1', ...userData } } }
      localStorage.setItem('token', response.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      setUser(response.data.user)
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}