import React, { useState } from 'react';
import Button from '../common/Button';

const PdfPreview = ({ pdfUrl, assignment, isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Simulated pages

  // Get font class for handwriting
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

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-soft p-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          <p className="mt-4 text-gray-600">Generating PDF preview...</p>
        </div>
      </div>
    );
  }

  const fontClass = getFontClass();

  return (
    <div className="space-y-8">
      {/* PDF Preview Container */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">{assignment.title || 'assignment'}.pdf</h3>
                <p className="text-gray-300 text-sm">
                  PDF Document • {totalPages} pages • Handwriting: {assignment.selectedFont || 'handwriting1'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">Page {currentPage} of {totalPages}</span>
            </div>
          </div>
        </div>

        {/* PDF Content */}
        <div className="p-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-300 shadow-inner overflow-hidden">
            {/* Simulated PDF Page */}
            <div className="paper-texture p-8 min-h-[600px]">
              {/* Page Header */}
              <div className="text-center mb-8 pb-6 border-b border-gray-300">
                <h1 className={`text-3xl font-bold text-gray-800 mb-3 ${fontClass}`}>
                  {assignment.title || 'Assignment Title'}
                </h1>
                <div className={`flex items-center justify-center space-x-6 text-gray-600 ${fontClass}`}>
                  <span>{assignment.subject}</span>
                  <span>•</span>
                  <span>{assignment.topic}</span>
                  <span>•</span>
                  <span>{assignment.gradeLevel}</span>
                </div>
                {assignment.dueDate && (
                  <div className={`mt-4 text-gray-700 ${fontClass}`}>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </div>
                )}
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

              {/* Questions */}
              <div className="space-y-8">
                {assignment.questions.map((question, index) => (
                  <div key={question.id} className="pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className={`text-lg text-gray-800 mb-3 ${fontClass} ink-bleed`}>
                          {question.text}
                        </div>
                        {question.marks && (
                          <div className={`inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ${fontClass}`}>
                            [{question.marks} marks]
                          </div>
                        )}
                        
                        {question.type === 'multiple' && question.options && (
                          <div className="mt-4 ml-6 space-y-2">
                            {Object.entries(question.options).map(([key, value]) => (
                              <div key={key} className="flex items-center">
                                <div className="w-5 h-5 border border-gray-400 rounded mr-3"></div>
                                <span className={`text-gray-700 ${fontClass}`}>
                                  {key.toUpperCase()}. {value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {assignment.includeAnswers && question.answer && (
                          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                            <div className="text-sm font-medium text-green-800 mb-1">Answer:</div>
                            <div className={`text-green-700 ${fontClass} ink-bleed`}>
                              {question.answer}
                            </div>
                          </div>
                        )}

                        {/* Answer space for handwritten effect */}
                        {!assignment.includeAnswers && (
                          <div className="mt-6">
                            <div className="handwriting-effect h-32 border border-gray-300 rounded p-4">
                              <div className={`text-gray-400 italic ${fontClass}`}>
                                Answer space for {assignment.selectedFont || 'handwriting1'} handwriting...
                              </div>
                              <div className={`mt-4 text-gray-800 ${fontClass} opacity-50`}>
                                Student's handwritten answer will appear here
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Page Footer */}
              <div className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-500 text-sm">
                <div className="flex justify-between items-center">
                  <div className={fontClass}>Page {currentPage}</div>
                  <div className={fontClass}>
                    Generated by HandwrittenAI • Font: {assignment.selectedFont || 'handwriting1'}
                  </div>
                  <div className={fontClass}>
                    Total Marks: {assignment.questions.reduce((sum, q) => sum + (q.marks || 0), 0)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Controls */}
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Button>
              
              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded flex items-center justify-center ${
                      currentPage === i + 1
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              <div className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
                Preview Font: <span className="font-semibold">{assignment.selectedFont || 'handwriting1'}</span>
              </div>
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Details */}
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-6">PDF Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-500 mb-1">File Size</div>
            <div className="text-xl font-semibold text-gray-800">2.4 MB</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-500 mb-1">Pages</div>
            <div className="text-xl font-semibold text-gray-800">{totalPages}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-500 mb-1">Handwriting Font</div>
            <div className="text-xl font-semibold text-gray-800">{assignment.selectedFont || 'handwriting1'}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-500 mb-1">Format</div>
            <div className="text-xl font-semibold text-gray-800">PDF/A</div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Handwriting Style</span>
              <span className="font-medium text-gray-800">{assignment.selectedFont || 'handwriting1'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Preview Quality</span>
              <span className="font-medium text-gray-800">High (Screen Preview)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Generated On</span>
              <span className="font-medium text-gray-800">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Font Preview</span>
              <div className={`font-medium text-gray-800 ${fontClass}`}>
                Active in preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;