import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  const navigate = useNavigate();

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
                to="/register"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign Up
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
              Welcome back to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                HandwrittenAI
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Sign in to access your assignments and create new handwritten worksheets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Login Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-gray-600">
                  Enter your credentials to access the AI assignment generator
                </p>
              </div>
              <LoginForm onSuccess={() => navigate('/dashboard')} />
            </div>

            {/* Features/Info Section */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">AI-Powered Generation</h3>
                    <p className="mt-2 text-gray-600">
                      Create realistic handwritten assignments using advanced AI models that mimic human writing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Teacher-Approved</h3>
                    <p className="mt-2 text-gray-600">
                      Used by thousands of educators worldwide to save time and create engaging assignments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Instant Download</h3>
                    <p className="mt-2 text-gray-600">
                      Get high-quality PDFs ready to print or share with students in seconds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">10K+</div>
                    <div className="text-sm text-gray-600">Assignments Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">2K+</div>
                    <div className="text-sm text-gray-600">Teachers</div>
                  </div>
                </div>
              </div>

              {/* New User CTA */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">New to HandwrittenAI?</h3>
                <p className="text-gray-600 mb-4">
                  Join thousands of educators creating amazing handwritten assignments with AI.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Create your free account
                </Link>
                <p className="mt-3 text-xs text-gray-500 text-center">
                  Free plan includes 10 assignments per month
                </p>
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

export default Login;