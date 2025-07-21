import React, { useState } from 'react'
import { MapPin, Star, Briefcase, Search, Filter, MessageSquare } from 'lucide-react'

const Workers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedSkill, setSelectedSkill] = useState('')

  const workers = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Construction Worker',
      location: 'Nairobi, Kenya',
      experience: '5 years',
      rating: 4.8,
      reviews: 24,
      skills: ['Masonry', 'Plumbing', 'Electrical'],
      hourlyRate: 'KSh 500/hour',
      availability: 'Available',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Experienced construction worker with expertise in residential and commercial projects.'
    },
    {
      id: 2,
      name: 'Mary Smith',
      title: 'Professional Cleaner',
      location: 'Lagos, Nigeria',
      experience: '3 years',
      rating: 4.9,
      reviews: 18,
      skills: ['Deep Cleaning', 'Office Cleaning', 'Carpet Cleaning'],
      hourlyRate: '₦800/hour',
      availability: 'Available',
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Detail-oriented cleaner specializing in residential and commercial spaces.'
    },
    {
      id: 3,
      name: 'David Wilson',
      title: 'Security Guard',
      location: 'Accra, Ghana',
      experience: '7 years',
      rating: 4.6,
      reviews: 31,
      skills: ['Night Security', 'CCTV Monitoring', 'Access Control'],
      hourlyRate: 'GH₵15/hour',
      availability: 'Busy',
      profileImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Reliable security professional with extensive experience in commercial security.'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      title: 'Delivery Driver',
      location: 'Cape Town, South Africa',
      experience: '2 years',
      rating: 4.7,
      reviews: 15,
      skills: ['Motorcycle Delivery', 'GPS Navigation', 'Customer Service'],
      hourlyRate: 'R45/hour',
      availability: 'Available',
      profileImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Fast and reliable delivery driver with excellent customer service skills.'
    },
    {
      id: 5,
      name: 'Michael Brown',
      title: 'Mechanic',
      location: 'Kampala, Uganda',
      experience: '8 years',
      rating: 4.5,
      reviews: 42,
      skills: ['Engine Repair', 'Brake Systems', 'Diagnostics'],
      hourlyRate: 'UGX 8,000/hour',
      availability: 'Available',
      profileImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Skilled mechanic specializing in automotive repair and maintenance.'
    },
    {
      id: 6,
      name: 'Grace Mwangi',
      title: 'Restaurant Server',
      location: 'Dar es Salaam, Tanzania',
      experience: '4 years',
      rating: 4.8,
      reviews: 28,
      skills: ['Customer Service', 'Food Safety', 'POS Systems'],
      hourlyRate: 'TSh 3,000/hour',
      availability: 'Available',
      profileImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      description: 'Friendly and professional server with excellent customer service skills.'
    }
  ]

  const skills = ['All Skills', 'Masonry', 'Plumbing', 'Electrical', 'Deep Cleaning', 'Night Security', 'Customer Service', 'Engine Repair']
  const locations = ['All Locations', 'Nairobi, Kenya', 'Lagos, Nigeria', 'Accra, Ghana', 'Cape Town, South Africa', 'Kampala, Uganda', 'Dar es Salaam, Tanzania']

  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         worker.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || worker.location === selectedLocation
    const matchesSkill = selectedSkill === '' || selectedSkill === 'All Skills' || worker.skills.some(skill => skill === selectedSkill)
    
    return matchesSearch && matchesLocation && matchesSkill
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Skilled Workers</h1>
        <p className="text-gray-600">Connect with verified professionals across Africa</p>
      </div>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search workers by name or profession..."
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
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredWorkers.length} of {workers.length} workers
        </p>
      </div>

      {/* Worker Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkers.map((worker) => (
          <div key={worker.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src={worker.profileImage}
                alt={worker.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{worker.name}</h3>
                <p className="text-gray-600">{worker.title}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {worker.rating} ({worker.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  worker.availability === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {worker.availability}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {worker.location}
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Briefcase className="h-4 w-4 mr-2" />
                {worker.experience} experience
              </div>

              <p className="text-sm text-gray-700">{worker.description}</p>

              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {worker.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-lg font-semibold text-gray-900">
                  {worker.hourlyRate}
                </span>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                  <button className="btn-primary text-sm px-4 py-2">
                    Hire
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No workers found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}

export default Workers