import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header/Navigation */}
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
                to="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                HandwrittenAI
              </span>
              {' '}Today
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Create professional handwritten assignments in minutes with AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Registration Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
                <p className="mt-2 text-gray-600">
                  Start generating handwritten assignments for free
                </p>
              </div>
              <RegisterForm />
            </div>

            {/* Benefits/Info Section */}
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Create Account</h4>
                      <p className="mt-1 text-gray-600">
                        Sign up in seconds with your email
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Design Assignment</h4>
                      <p className="mt-1 text-gray-600">
                        Add questions, choose subject, and select handwriting style
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Generate & Download</h4>
                      <p className="mt-1 text-gray-600">
                        Get your handwritten assignment as PDF in seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What Teachers Say</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700 italic">
                      "This has saved me hours of work every week. The handwriting looks so real that my students can't tell it's AI-generated!"
                    </p>
                    <div className="mt-3 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">Sarah Johnson</div>
                        <div className="text-sm text-gray-500">High School Math Teacher</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-700 italic">
                      "Perfect for creating differentiated worksheets. I can easily adjust difficulty levels for different students."
                    </p>
                    <div className="mt-3 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">Michael Chen</div>
                        <div className="text-sm text-gray-500">Middle School Science Teacher</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Free Trial</h4>
                  <p className="text-sm text-gray-600 mt-1">10 assignments/month</p>
                </div>
                <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-4 border border-green-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Fast Generation</h4>
                  <p className="text-sm text-gray-600 mt-1">Under 30 seconds</p>
                </div>
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 border border-purple-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">6 Styles</h4>
                  <p className="text-sm text-gray-600 mt-1">Handwriting options</p>
                </div>
                <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-4 border border-amber-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Secure</h4>
                  <p className="text-sm text-gray-600 mt-1">Data protected</p>
                </div>
              </div>

              {/* Already Have Account */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Already have an account?</h3>
                  <p className="text-gray-600 mb-4">
                    Sign in to access your assignments and continue creating.
                  </p>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    Sign in to your account
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center space-y-4">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <Link to="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-gray-900">
                  Terms of Service
                </Link>
                <Link to="/help" className="hover:text-gray-900">
                  Help Center
                </Link>
                <Link to="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
                <a href="mailto:support@handwrittenai.com" className="hover:text-gray-900">
                  support@handwrittenai.com
                </a>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} HandwrittenAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;