import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssignment } from '../context/AssignmentContext';
import AssignmentPreview from '../components/assignment/AssignmentPreview';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import assignmentService from '../services/assignmentService';


const PreviewAssignment = () => {
  const navigate = useNavigate();
  const { assignment, generatedContent, isGenerating, setPdfUrl, setIsGenerating } = useAssignment();
  const questions = assignment?.questions || [];


  // Map fontId to display name
  const getFontDisplayName = (fontId) => {
    const fontNames = {
      handwriting1: 'Academic Script',
      handwriting2: 'Casual Notes',
      handwriting3: 'Creative Flow',
      handwriting4: 'Quick Notes',
      handwriting5: 'Formal Script',
      handwriting6: 'Student Print',
    };
    return fontNames[fontId] || fontId;
  };

  // Helper function to get font class with handwriting styles
  const getFontClass = (fontId) => {
    const fontMap = {
      handwriting1: 'font-handwriting1 handwriting-academic ink-bleed',
      handwriting2: 'font-handwriting2 handwriting-casual ink-bleed',
      handwriting3: 'font-handwriting3 handwriting-artistic ink-bleed',
      handwriting4: 'font-handwriting4 handwriting-notes ink-bleed',
      handwriting5: 'font-handwriting5 handwriting-formal ink-bleed',
      handwriting6: 'font-handwriting6 handwriting-print ink-bleed',
    };
    return fontMap[fontId] || 'font-handwriting1 handwriting-academic ink-bleed';
  };

const handleGeneratePDF = async () => {
  // 🔐 login check
  if (!localStorage.getItem("token")) {
    alert("Please login to download assignment");
    return;
  }

  // 🧠 safety check
  if (!assignment?.questions || assignment.questions.length === 0) {
    alert("No questions to save");
    return;
  }

  try {
    setIsGenerating(true);

    // 🔥 STEP 1: SAVE TO MONGODB
    const res = await assignmentService.saveAsDraft(assignment);

    if (!res.success) {
      alert(res.error || "Failed to save assignment");
      setIsGenerating(false);
      return;
    }

    console.log("✅ Assignment saved to MongoDB");

    // 🔥 STEP 2: PDF GENERATION (existing logic)
    await new Promise(resolve => setTimeout(resolve, 3000));

    setPdfUrl(`/generated/${assignment.title || 'assignment'}.pdf`);

    setIsGenerating(false);

    // 🔥 STEP 3: NAVIGATE TO DOWNLOAD
    navigate('/download');

  } catch (error) {
    console.error(error);
    setIsGenerating(false);
    alert("Something went wrong while saving assignment");
  }
};


  const handleGoBack = () => {
    navigate('/create');
  };

  if (isGenerating) {
    return (
      <div className="max-w-6xl mx-auto">
        <Loader text="Generating preview..." />
      </div>
    );
  }

  const currentFontClass = getFontClass(assignment.selectedFont);
  const currentFontName = getFontDisplayName(assignment.selectedFont);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignment Preview</h1>
          <p className="text-gray-600">
            Review your generated assignment before downloading
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="secondary"
            onClick={handleGoBack}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Edit Assignment
          </Button>
          
          <Button
            onClick={handleGeneratePDF}
            loading={isGenerating}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate PDF
          </Button>
        </div>
      </div>

      {/* Preview Stats */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Questions</div>
          <div className="text-2xl font-bold text-gray-800">{questions.length}
</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Total Marks</div>
          <div className="text-2xl font-bold text-gray-800">
           {questions.reduce((sum, q) => sum + (q.marks || 0), 0)}

          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Handwriting Style</div>
          <div className={`text-lg font-bold text-gray-800 ${currentFontClass}`}>
            {currentFontName}
          </div>
          <div className="text-xs text-gray-500 mt-1">{assignment.selectedFont}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Status</div>
          <div className="text-2xl font-bold text-green-600">Ready</div>
        </div>
      </div>

      {/* Font Preview Banner */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Selected Handwriting Style</h3>
              <p className="text-sm text-gray-600">
                Using <span className={`font-medium text-blue-600 ${currentFontClass}`}>
                  {currentFontName}
                </span> 
                {' '}({assignment.selectedFont}) for all text
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/create')}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            Change Style
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Preview */}
      <AssignmentPreview
        assignment={assignment}
        generatedContent={generatedContent}
        isLoading={isGenerating}
      />

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          onClick={handleGoBack}
          className="flex-1 sm:flex-none"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          Back to Editing
        </Button>
        
        <Button
          variant="secondary"
          onClick={() => {
            // Save for later functionality
            console.log('Saved for later');
          }}
          className="flex-1 sm:flex-none"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          Save for Later
        </Button>
        
        <Button
          onClick={handleGeneratePDF}
          loading={isGenerating}
          className="flex-1 sm:flex-none"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Generate & Download PDF
            </>
          )}
        </Button>
      </div>

      {/* Font Information */}
      <div className="mt-8 bg-white rounded-xl shadow-soft p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">About This Handwriting Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Style Details</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI-generated natural handwriting variations
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unique character spacing and slant
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Paper texture and ink bleed effects
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lined paper and notebook margin simulation
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Best Used For</h4>
            <div className={`text-lg leading-relaxed p-4 rounded-lg border border-gray-200 paper-texture ${currentFontClass}`}>
              {assignment.selectedFont === 'handwriting1' && 'Exams, tests, and official documents'}
              {assignment.selectedFont === 'handwriting2' && 'Homework, notes, and daily assignments'}
              {assignment.selectedFont === 'handwriting3' && 'Creative projects, stories, and art assignments'}
              {assignment.selectedFont === 'handwriting4' && 'Quick notes, classroom work, and rough drafts'}
              {assignment.selectedFont === 'handwriting5' && 'Formal essays, reports, and submissions'}
              {assignment.selectedFont === 'handwriting6' && 'Science, math, and technical assignments'}
            </div>
          </div>
        </div>
      </div>

      {/* Download Information */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-soft p-6 border border-green-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Download Information</h3>
            <p className="text-sm text-gray-600 mb-3">
              Your PDF will include all the styling you see in the preview:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                  ✓
                </div>
                <span className={`${currentFontClass} text-gray-700`}>
                  {currentFontName} handwriting font
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                  ✓
                </div>
                Lined paper background with notebook margin
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                  ✓
                </div>
                Ink bleed effect for realistic handwriting
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                  ✓
                </div>
                Paper texture and professional formatting
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Generated content is simulated for this demo. In a real application, 
          AI would generate authentic handwritten text based on your input.
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Font: {currentFontName} • Style: {assignment.selectedFont} • Format: PDF with exact preview styling
        </p>
      </div>
    </div>
  );
};

export default PreviewAssignment;