import React from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const GenerateButton = ({ 
  onClick, 
  isLoading = false, 
  disabled = false,
  assignment 
}) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (onClick) {
      await onClick();
      navigate('/preview');
    }
  };

 const isValid =
  assignment.title?.trim() &&
  assignment.subject?.trim() &&
  assignment.topic?.trim();


  return (
    <div className="sticky bottom-6 z-10">
      <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-200 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 text-lg">Ready to generate?</h4>
            <p className="text-gray-600 text-sm">
              {isValid 
                ? "Click below to generate your handwritten assignment"
                : "Complete all required fields to enable generation"
              }
            </p>
            {!isValid && (
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm text-amber-600">Add title, subject, and at least one question</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={() => {
                // Save draft functionality would go here
                console.log('Save draft');
              }}
              disabled={isLoading}
            >
              Save Draft
            </Button>
            <Button
              onClick={handleClick}
              loading={isLoading}
              disabled={disabled || !isValid}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Assignment
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Questions: {assignment.questions.length}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Style: {assignment.selectedFont}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Answers: {assignment.includeAnswers ? 'Included' : 'Not included'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateButton;