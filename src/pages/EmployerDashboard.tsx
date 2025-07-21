import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Users, Briefcase, Eye, MessageSquare, Plus } from 'lucide-react'

const EmployerDashboard: React.FC = () => {
  const { user } = useAuth()

  const jobPostings = [
    {
      id: 1,
      title: 'Construction Worker',
      location: 'Nairobi, Kenya',
      applications: 24,
      views: 156,
      status: 'Active',
      posted: '3 days ago'
    },
    {
      id: 2,
      title: 'Delivery Driver',
      location: 'Lagos, Nigeria',
      applications: 18,
      views: 89,
      status: 'Active',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Security Guard',
      location: 'Accra, Ghana',
      applications: 31,
      views: 203,
      status: 'Filled',
      posted: '2 weeks ago'
    }
  ]

  const stats = [
    { label: 'Active Jobs', value: '8', icon: Briefcase, color: 'text-blue-600' },
    { label: 'Total Applications', value: '127', icon: Users, color: 'text-green-600' },
    { label: 'Profile Views', value: '1,234', icon: Eye, color: 'text-purple-600' },
    { label: 'Messages', value: '23', icon: MessageSquare, color: 'text-yellow-600' }
  ]

  const recentApplications = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Construction Worker',
      experience: '3 years',
      rating: 4.5,
      applied: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mary Smith',
      job: 'Delivery Driver',
      experience: '2 years',
      rating: 4.8,
      applied: '5 hours ago'
    },
    {
      id: 3,
      name: 'David Wilson',
      job: 'Security Guard',
      experience: '5 years',
      rating: 4.2,
      applied: '1 day ago'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your job postings and applications</p>
        </div>
        <button className="btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Post New Job
        </button>
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
        {/* Job Postings */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Job Postings</h2>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.location}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{job.applications} applications</span>
                        <span>{job.views} views</span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        job.status === 'Active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{application.name}</h4>
                      <p className="text-sm text-gray-600">{application.job}</p>
                      <p className="text-xs text-gray-500">{application.experience} experience</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(Math.floor(application.rating))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">{application.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{application.applied}</p>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerDashboard