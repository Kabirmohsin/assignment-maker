import React from 'react';
import Loader from '../common/Loader';


const AssignmentPreview = ({ 
  assignment, 
  generatedContent, 
  isLoading = false 
}) => {
  const questions = assignment?.questions ?? [];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Map fontId to the correct font class
  const getFontClass = () => {
    const fontMap = {
      handwriting1: 'font-handwriting1 handwriting-academic',
      handwriting2: 'font-handwriting2 handwriting-casual',
      handwriting3: 'font-handwriting3 handwriting-artistic',
      handwriting4: 'font-handwriting4 handwriting-notes',
      handwriting5: 'font-handwriting5 handwriting-formal',
      handwriting6: 'font-handwriting6 handwriting-print',
    };
    return fontMap[assignment.selectedFont] || 'font-handwriting1 handwriting-academic';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-soft p-8">
        <Loader text="Generating handwritten preview..." />
      </div>
    );
  }

  const fontClass = getFontClass();

  // Determine paper style based on assignment
  const getPaperStyle = () => {
    switch (assignment.paperType) {
      case 'lined':
        return 'lined-paper';
      case 'grid':
        return 'paper-texture';
      case 'college':
        return 'lined-paper'; // Smaller lines for college ruled
      default:
        return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Preview Header */}
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Assignment Preview</h3>
            <p className="text-gray-600">Using {assignment.selectedFont || 'handwriting1'} handwriting style</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              {assignment.difficulty}
            </div>
            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {assignment.gradeLevel}
            </div>
          </div>
        </div>

        {/* Assignment Header with LINED PAPER */}
        <div className={`${getPaperStyle()} p-8 rounded-xl border-2 border-gray-300 bg-white`}>
          <div className="notebook-margin">
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold text-gray-800 mb-2 ${fontClass}`}>
                {assignment.title || 'Assignment Title'}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
              <p className={`text-gray-600 mt-4 ${fontClass}`}>
                {assignment.subject} • {assignment.topic}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <div className={`flex items-center text-gray-700 ${fontClass}`}>
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Due Date:</span>
                  <span className="ml-2">{formatDate(assignment.dueDate)}</span>
                </div>
                <div className={`flex items-center text-gray-700 ${fontClass}`}>
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="font-medium">Total Marks:</span>
                  <span className="ml-2">
                    {questions.reduce((sum, q) => sum + (q.marks || 0), 0)} marks
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className={`flex items-center text-gray-700 ${fontClass}`}>
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium">Student:</span>
                  <span className="ml-2">[Student Name]</span>
                </div>
                <div className={`flex items-center text-gray-700 ${fontClass}`}>
                  <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">Includes Answers:</span>
                  <span className="ml-2">{assignment.includeAnswers ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            {assignment.instructions && (
              <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800">Instructions</h4>
                    <div className={`mt-2 text-sm text-yellow-700 ${fontClass}`}>
                      <p>{assignment.instructions}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Generated Content Preview with LINED PAPER */}
        {generatedContent ? (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Generated Content</h4>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                AI Generated with {assignment.selectedFont || 'handwriting1'}
              </span>
            </div>
            <div className="lined-paper p-6 rounded-xl border-2 border-gray-300 bg-white">
              <div className="notebook-margin">
                <div className={`text-lg leading-relaxed text-gray-800 whitespace-pre-line ${fontClass}`}>
                  {generatedContent}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-700 mb-2">No content generated yet</h4>
            <p className="text-gray-500 max-w-md mx-auto">
              Click "Generate Assignment" to create handwritten content with {assignment.selectedFont || 'handwriting1'} style.
            </p>
          </div>
        )}
      </div>

      {/* Questions Preview with LINED PAPER */}
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-6">Questions Preview</h4>
        <div className="space-y-6">
          {questions.length > 0 ? (
            questions.map((question, index) => (
             <div key={question.id ?? index} className="lined-paper p-6 rounded-xl">

                <div className="notebook-margin">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className={`font-medium text-gray-800 ${fontClass}`}>Question {index + 1}</h5>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">
                            {question.type}
                          </span>
                          {question.marks && (
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                              {question.marks} marks
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className={`text-gray-700 ${fontClass}`}>{question.text || 'No question text provided'}</p>
                  </div>

                  {question.type === 'multiple' && question.options && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                      <p className="text-sm font-medium text-gray-700 mb-3">Options:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Object.entries(question.options).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center font-medium">
                              {key.toUpperCase()}
                            </div>
                            <span className={`text-gray-700 ${fontClass}`}>{value}</span>
                            {question.correctOption === key && (
                              <span className="ml-auto px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                                Correct
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {assignment.includeAnswers && question.answer && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-800 mb-2">Expected Answer:</p>
                      <p className={`text-green-700 ${fontClass}`}>{question.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500">Questions will be generated by AI</p>
              <p className="text-sm text-gray-400 mt-1">They will appear in {assignment.selectedFont || 'handwriting1'} style</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentPreview;