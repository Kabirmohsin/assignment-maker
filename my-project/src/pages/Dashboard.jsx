import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const recentAssignments = [
    { id: 1, title: 'Calculus Derivatives Practice', subject: 'Mathematics', date: 'Today', status: 'Completed' },
    { id: 2, title: 'Physics Kinematics Worksheet', subject: 'Physics', date: 'Yesterday', status: 'Draft' },
    { id: 3, title: 'English Grammar Exercises', subject: 'English', date: '2 days ago', status: 'Completed' },
  ];

  const stats = [
    { label: 'Total Assignments', value: '24', color: 'blue' },
    { label: 'Completed', value: '18', color: 'green' },
    { label: 'In Draft', value: '3', color: 'yellow' },
    { label: 'Remaining Credits', value: '8', color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Handwritten<span className="text-primary-600">AI</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/create"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Create New
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, <span className="text-primary-600">{user?.name || 'Teacher'}!</span>
              </h1>
              <p className="mt-2 text-gray-600">
                Ready to create your next handwritten assignment?
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Last login: Today</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=3b82f6&color=fff`}
                  alt={user?.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow"
                />
              </div>
              <div>
                <div className="text-sm text-gray-500">Teacher Account</div>
                <div className="font-medium text-gray-900">{user?.email}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            to="/create"
            className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Create Assignment</h3>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="opacity-90">Generate a new handwritten worksheet</p>
          </Link>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">My Assignments</h3>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="opacity-90">View and manage all your assignments</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">AI Templates</h3>
              <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <p className="opacity-90">Browse pre-made assignment templates</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Assignments */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Assignments</h2>
            <Link to="/assignments" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View all →
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentAssignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{assignment.title}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {assignment.subject}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {assignment.date}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        assignment.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 mr-4">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Getting Started</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Click "Create New"</h4>
                  <p className="text-gray-600 text-sm mt-1">Start by creating your first assignment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Add Questions</h4>
                  <p className="text-gray-600 text-sm mt-1">Enter your questions and choose subject</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Select Style</h4>
                  <p className="text-gray-600 text-sm mt-1">Pick a handwriting style that fits your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Generate & Download</h4>
                  <p className="text-gray-600 text-sm mt-1">Get your PDF ready to print or share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Watch Tutorial</h4>
                <p className="text-gray-600 text-sm mb-3">Learn how to create amazing assignments in 5 minutes</p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Watch video →
                </button>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Join Community</h4>
                <p className="text-gray-600 text-sm mb-3">Connect with other educators and share ideas</p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Join forum →
                </button>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Contact Support</h4>
                <p className="text-gray-600 text-sm mb-3">Get help from our support team</p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Contact us →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/create"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Your First Assignment
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            Free plan includes 10 assignments per month
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;