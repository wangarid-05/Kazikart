import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { MapPin, Briefcase, Star, Clock, DollarSign } from 'lucide-react'

const WorkerDashboard: React.FC = () => {
  const { user } = useAuth()

  const recentJobs = [
    {
      id: 1,
      title: 'Construction Worker',
      company: 'BuildCorp Ltd',
      location: 'Nairobi, Kenya',
      salary: 'KSh 25,000/month',
      status: 'Applied',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Delivery Driver',
      company: 'QuickDelivery',
      location: 'Lagos, Nigeria',
      salary: '₦45,000/month',
      status: 'Interview',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'Security Guard',
      company: 'SecureMax',
      location: 'Accra, Ghana',
      salary: 'GH₵1,200/month',
      status: 'Hired',
      date: '2 weeks ago'
    }
  ]

  const stats = [
    { label: 'Jobs Applied', value: '12', icon: Briefcase, color: 'text-blue-600' },
    { label: 'Profile Views', value: '45', icon: Star, color: 'text-yellow-600' },
    { label: 'Hours Worked', value: '120', icon: Clock, color: 'text-green-600' },
    { label: 'Earnings', value: 'KSh 15,000', icon: DollarSign, color: 'text-purple-600' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your job search</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Applications</h2>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <p className="text-sm font-medium text-green-600 mt-1">{job.salary}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        job.status === 'Hired' 
                          ? 'bg-green-100 text-green-800'
                          : job.status === 'Interview'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {job.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{job.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Profile Progress</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Basic Info Complete
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Skills Added
                </div>
                <div className="flex items-center text-yellow-600">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Add Work Experience
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  Upload ID Document
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary text-left">
                Browse New Jobs
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-left">
                Update Profile
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-left">
                View Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkerDashboard