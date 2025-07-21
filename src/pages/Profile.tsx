import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { User, Mail, Phone, MapPin, Briefcase, Star, Edit, Save, X } from 'lucide-react'

const Profile: React.FC = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    title: 'Construction Worker',
    experience: '5 years',
    hourlyRate: 'KSh 500/hour',
    bio: 'Experienced construction worker with expertise in residential and commercial projects. Skilled in masonry, plumbing, and electrical work.',
    skills: ['Masonry', 'Plumbing', 'Electrical', 'Safety Protocols'],
    languages: ['English', 'Swahili']
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original data
  }

  const workHistory = [
    {
      id: 1,
      company: 'BuildCorp Ltd',
      position: 'Senior Construction Worker',
      duration: '2022 - Present',
      description: 'Leading construction projects for residential buildings'
    },
    {
      id: 2,
      company: 'Urban Developers',
      position: 'Construction Worker',
      duration: '2020 - 2022',
      description: 'Worked on commercial building projects'
    },
    {
      id: 3,
      company: 'Home Builders Inc',
      position: 'Junior Construction Worker',
      duration: '2019 - 2020',
      description: 'Assisted in residential construction projects'
    }
  ]

  const reviews = [
    {
      id: 1,
      client: 'John Smith',
      rating: 5,
      comment: 'Excellent work quality and very professional. Completed the project on time.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      client: 'Mary Johnson',
      rating: 4,
      comment: 'Good work, but could improve communication during the project.',
      date: '1 month ago'
    },
    {
      id: 3,
      client: 'David Wilson',
      rating: 5,
      comment: 'Outstanding craftsmanship and attention to detail. Highly recommended!',
      date: '2 months ago'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn-primary flex items-center"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="btn-primary flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mr-6">
                <User className="h-10 w-10 text-primary-600" />
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="text-2xl font-bold text-gray-900 border border-gray-300 rounded px-2 py-1 w-full"
                    />
                    <input
                      type="text"
                      name="title"
                      value={profileData.title}
                      onChange={handleInputChange}
                      className="text-gray-600 border border-gray-300 rounded px-2 py-1 w-full"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                    <p className="text-gray-600">{profileData.title}</p>
                  </>
                )}
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8 (24 reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{profileData.email}</span>
                )}
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{profileData.phone}</span>
                )}
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{profileData.location}</span>
                )}
              </div>
              
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    name="experience"
                    value={profileData.experience}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-2 py-1 flex-1"
                  />
                ) : (
                  <span className="text-gray-700">{profileData.experience} experience</span>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-700">{profileData.bio}</p>
            )}
          </div>

          {/* Work History */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Work History</h3>
            <div className="space-y-4">
              {workHistory.map((job) => (
                <div key={job.id} className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-medium text-gray-900">{job.position}</h4>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.duration}</p>
                  <p className="text-sm text-gray-700 mt-1">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Rate & Availability */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rate & Availability</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="hourlyRate"
                    value={profileData.hourlyRate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                ) : (
                  <p className="text-xl font-bold text-primary-600">{profileData.hourlyRate}</p>
                )}
              </div>
              <div>
                <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
            <div className="space-y-2">
              {profileData.languages.map((language, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-700">{language}</span>
                  <span className="text-sm text-gray-500">Fluent</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {reviews.slice(0, 2).map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">"{review.comment}"</p>
                  <p className="text-xs text-gray-500">- {review.client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile