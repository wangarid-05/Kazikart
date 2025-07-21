import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { MapPin, Users, Briefcase, Star, ArrowRight } from 'lucide-react'

const Home: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Africa's <span className="text-yellow-300">Blue-Collar</span> Workforce
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Digital job matching, onboarding, and management tools for the informal sector
            </p>
            {!user && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Find Work
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Hire Workers
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bridging the Employment Gap
            </h2>
            <p className="text-xl text-gray-600">
              Empowering workers and employers across Africa with digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Geo-Based Matching</h3>
              <p className="text-gray-600">
                Find jobs and workers in your local area with our location-based matching system
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Profiles</h3>
              <p className="text-gray-600">
                Create comprehensive digital profiles with minimal documentation requirements
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Management</h3>
              <p className="text-gray-600">
                Generate and manage contracts digitally with integrated payroll systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Workers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-600 mb-2">5,000+</div>
              <div className="text-gray-600">Jobs Posted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600">African Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of workers and employers already using KaziKart
          </p>
          {!user && (
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home