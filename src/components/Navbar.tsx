import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Users, Briefcase, LogOut, User } from 'lucide-react'

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-gray-900">KaziKart</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to={user.userType === 'worker' ? '/worker-dashboard' : '/employer-dashboard'}
                  className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/jobs"
                  className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Jobs
                </Link>
                {user.userType === 'employer' && (
                  <Link
                    to="/workers"
                    className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Workers
                  </Link>
                )}
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-primary-500 p-2 rounded-md"
                >
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-500 p-2 rounded-md"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar