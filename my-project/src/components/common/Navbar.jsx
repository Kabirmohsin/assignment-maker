import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/create', label: 'Create' },
    { path: '/preview', label: 'Preview' },
    { path: '/download', label: 'Download' },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              Handwritten<span className="text-primary-600">AI</span>
            </span>
            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
              Beta
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Assignment
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white shadow"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;