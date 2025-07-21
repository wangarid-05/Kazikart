import React, { useState } from 'react'
import { MapPin, Clock, DollarSign, Briefcase, Search, Filter } from 'lucide-react'

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const jobs = [
    {
      id: 1,
      title: 'Construction Worker',
      company: 'BuildCorp Ltd',
      location: 'Nairobi, Kenya',
      salary: 'KSh 25,000 - 35,000/month',
      type: 'Full-time',
      category: 'Construction',
      description: 'Experienced construction worker needed for residential building projects.',
      requirements: ['2+ years experience', 'Physical fitness', 'Safety certification'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Delivery Driver',
      company: 'QuickDelivery',
      location: 'Lagos, Nigeria',
      salary: '₦40,000 - 50,000/month',
      type: 'Full-time',
      category: 'Transportation',
      description: 'Reliable delivery driver for food and package delivery services.',
      requirements: ['Valid driving license', 'Own motorcycle/car', 'Good navigation skills'],
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Security Guard',
      company: 'SecureMax',
      location: 'Accra, Ghana',
      salary: 'GH₵1,000 - 1,500/month',
      type: 'Full-time',
      category: 'Security',
      description: 'Night shift security guard for commercial building complex.',
      requirements: ['Security training certificate', 'Night shift availability', 'Good communication'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'House Cleaner',
      company: 'CleanPro Services',
      location: 'Cape Town, South Africa',
      salary: 'R3,000 - 4,000/month',
      type: 'Part-time',
      category: 'Cleaning',
      description: 'Professional house cleaning services for residential clients.',
      requirements: ['Experience in cleaning', 'Attention to detail', 'Reliable transport'],
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'Mechanic Assistant',
      company: 'AutoFix Garage',
      location: 'Kampala, Uganda',
      salary: 'UGX 400,000 - 600,000/month',
      type: 'Full-time',
      category: 'Automotive',
      description: 'Assistant mechanic for busy auto repair shop.',
      requirements: ['Basic mechanical knowledge', 'Willingness to learn', 'Physical strength'],
      posted: '4 days ago'
    },
    {
      id: 6,
      title: 'Restaurant Server',
      company: 'Taste of Africa',
      location: 'Dar es Salaam, Tanzania',
      salary: 'TSh 300,000 - 450,000/month',
      type: 'Full-time',
      category: 'Hospitality',
      description: 'Friendly server for busy restaurant in city center.',
      requirements: ['Customer service experience', 'Good communication', 'Flexible schedule'],
      posted: '5 days ago'
    }
  ]

  const categories = ['All', 'Construction', 'Transportation', 'Security', 'Cleaning', 'Automotive', 'Hospitality']
  const locations = ['All Locations', 'Nairobi, Kenya', 'Lagos, Nigeria', 'Accra, Ghana', 'Cape Town, South Africa', 'Kampala, Uganda', 'Dar es Salaam, Tanzania']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || job.location === selectedLocation
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || job.category === selectedCategory
    
    return matchesSearch && matchesLocation && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Next Job</h1>
        <p className="text-gray-600">Discover opportunities across Africa's growing job market</p>
      </div>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredJobs.length} of {jobs.length} jobs
        </p>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 font-medium">{job.company}</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.posted}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.category}
                </span>
                <button className="btn-primary">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 mb-3">{job.description}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}

export default Jobs