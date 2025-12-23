import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssignment } from '../context/AssignmentContext';
import FontSelector from '../components/assignment/FontSelector';
import GenerateButton from '../components/assignment/GenerateButton';
import assignmentService from '../services/assignmentService';


const CreateAssignment = () => {
  const { 
    assignment, 
    updateAssignment,
    isGenerating,
    setGeneratedContent,
    setIsGenerating 
  } = useAssignment();

  const [activeTab, setActiveTab] = useState('details');
  const navigate = useNavigate();
  const handleInputChange = (field, value) => {
  updateAssignment({
    [field]: value,
  });
};
const handleGenerate = async () => {
  setIsGenerating(true);

  const response = await assignmentService.createAssignment(assignment);

  if (!response.success) {
    alert(response.error);
    setIsGenerating(false);
    return;
  }

  updateAssignment({
    questions: response.assignment.questions,
  });

  setGeneratedContent(response.generatedContent);
  setIsGenerating(false);

  navigate("/preview");
};



const handleSaveDraft = async () => {
  if (!localStorage.getItem("token")) {
    alert("Please login to save assignment");
    return;
  }

  const res = await assignmentService.saveAsDraft(assignment);

  if (!res.success) {
    alert(res.error);
    return;
  }

  alert("Assignment saved successfully ✅");
};


   
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Assignment</h1>
            <p className="text-gray-600">
              Fill in the details below to generate a handwritten assignment
            </p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-primary-600">
            {assignment.title && assignment.subject ? 'Ready to generate' : 'Add details'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(
                (assignment.title ? 40 : 0) +
                (assignment.subject ? 40 : 0) +
                (assignment.selectedFont ? 20 : 0)
              )}%` 
            }}
          ></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['details', 'style'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab === 'details' && 'Assignment Details'}
                {tab === 'style' && 'Handwriting Style'}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === 'details' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Assignment Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assignment Title *
                  </label>
                  <input
                    type="text"
                    value={assignment.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Calculus Midterm Exam"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={assignment.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="e.g., Mathematics"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic
                  </label>
                  <input
                    type="text"
                    value={assignment.topic}
                    onChange={(e) => handleInputChange('topic', e.target.value)}
                    placeholder="e.g., Quadratic Equations"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Level
                  </label>
                  <select
                    value={assignment.gradeLevel}
                    onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>Elementary School</option>
                    <option>Middle School</option>
                    <option>High School</option>
                    <option>College</option>
                    <option>University</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={assignment.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={assignment.dueDate}
                    onChange={(e) => handleInputChange('dueDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructions (Optional)
                </label>
                <textarea
                  value={assignment.instructions}
                  onChange={(e) => handleInputChange('instructions', e.target.value)}
                  placeholder="Add any specific instructions for students..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="includeAnswers"
                    checked={assignment.includeAnswers}
                    onChange={(e) => handleInputChange('includeAnswers', e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="includeAnswers" className="ml-3 text-gray-700">
                    Include Answer Key
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showMarks"
                    checked={assignment.showMarks}
                    onChange={(e) => handleInputChange('showMarks', e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="showMarks" className="ml-3 text-gray-700">
                    Show Marks Distribution
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'style' && (
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <FontSelector
              selectedFont={assignment.selectedFont}
              onFontSelect={(fontId) => handleInputChange('selectedFont', fontId)}
            />
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Paper Style</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paper Type
                  </label>
                  <select
                    value={assignment.paperType || 'lined'}
                    onChange={(e) => handleInputChange('paperType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="lined">Lined Paper</option>
                    <option value="grid">Grid Paper</option>
                    <option value="blank">Blank Paper</option>
                    <option value="college">College Ruled</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ink Color
                  </label>
                  <select
                    value={assignment.inkColor || 'black'}
                    onChange={(e) => handleInputChange('inkColor', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="darkBlue">Dark Blue</option>
                    <option value="pencil">Pencil Effect</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <div className="sticky bottom-6 z-10">
        <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-200 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-lg">Ready to generate?</h4>
              <p className="text-gray-600 text-sm">
                {assignment.title && assignment.subject 
                  ? "Click below to generate your handwritten assignment" 
                  : "Complete all required fields to enable generation"
                }
              </p>
              {!assignment.title && !assignment.subject && (
                <div className="flex items-center space-x-2 mt-2">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm text-amber-600">Add title and subject</span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
             <button
  onClick={handleSaveDraft}
  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
>
  Save Draft
</button>


              
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !assignment.title || !assignment.subject}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Assignment
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CreateAssignment;