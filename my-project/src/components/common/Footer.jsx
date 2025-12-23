import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <span className="text-lg font-bold text-gray-800">
                Handwritten<span className="text-primary-600">AI</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Generate realistic handwritten assignments using AI. Perfect for teachers, students, and educators.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} HandwrittenAI. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This is a frontend demo. AI generation is simulated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;