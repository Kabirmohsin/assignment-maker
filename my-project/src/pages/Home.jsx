import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '✍️',
      title: 'Realistic Handwriting',
      description: 'AI-generated handwriting that looks authentic and natural.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📚',
      title: 'Multiple Subjects',
      description: 'Generate assignments for Math, Science, Literature, and more.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '⚙️',
      title: 'Customizable',
      description: 'Adjust difficulty, length, and handwriting style.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📥',
      title: 'Instant Download',
      description: 'Get PDFs ready to print or share digitally.',
      color: 'from-amber-500 to-amber-600'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'High School Teacher',
      content: 'This has saved me hours of work creating assignments. The handwriting looks so real!',
      avatar: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'University Professor',
      content: 'Perfect for creating practice exams. My students can\'t tell it\'s AI-generated.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Tutor',
      content: 'I use this daily for custom worksheets. The quality is consistently excellent.',
      avatar: 'ER'
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-blue-100 rounded-full mb-6">
            <span className="text-primary-700 font-medium">AI-Powered Assignment Generator</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Create Realistic{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Handwritten Assignments
            </span>
            {' '}in Minutes
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Generate authentic-looking handwritten assignments, worksheets, and exams using advanced AI. 
            Perfect for teachers, tutors, and educators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/create')}
              className="px-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Assignment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="px-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16">
            <div className="bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-2xl shadow-soft border border-gray-200">
              <div className="paper-texture p-6 rounded-xl border border-gray-300">
                <div className="font-handwriting text-xl text-gray-800 leading-relaxed">
                  <p className="mb-4">Mathematics Assignment</p>
                  <p className="mb-4">1. Solve the quadratic equation: x² - 5x + 6 = 0</p>
                  <p className="mb-4">2. Find the derivative of f(x) = 3x³ - 2x² + 5</p>
                  <p>3. Calculate the area under the curve y = x² from x=0 to x=3</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-300 text-sm text-gray-500">
                  Generated with HandwrittenAI • Grade 11 • Calculus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HandwrittenAI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with educator-focused features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-200 hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create professional assignments in four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Enter Details', desc: 'Add subject, topic, and questions' },
            { step: '2', title: 'Choose Style', desc: 'Select handwriting style and format' },
            { step: '3', title: 'Generate', desc: 'AI creates handwritten content' },
            { step: '4', title: 'Download', desc: 'Get PDF ready to print or share' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button onClick={() => navigate('/create')} size="lg">
            Start Creating Now
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Educators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of teachers who save time with HandwrittenAI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Assignments?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start creating professional handwritten assignments today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/create')}
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-700"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">Free plan includes 10 assignments per month</p>
        </div>
      </section>
    </div>
  );
};

export default Home;