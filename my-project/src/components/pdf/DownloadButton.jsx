import React from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import assignmentService from '../services/assignmentService';


const DownloadButton = ({ 
  onDownload, 
  isLoading = false, 
  disabled = false,
  assignment 
}) => {
  const navigate = useNavigate();

 const handleDownload = async () => {
  // 🔐 login check
  if (!localStorage.getItem("token")) {
    alert("Please login to download assignment");
    return;
  }

  // 🧠 safety
  if (!assignment?.questions || assignment.questions.length === 0) {
    alert("No questions to save");
    return;
  }

  try {
    // ✅ STEP 1: SAVE TO MONGODB
    const res = await assignmentService.saveAsDraft(assignment);

    if (!res.success) {
      alert(res.error || "Failed to save assignment");
      return;
    }

    console.log("✅ Assignment saved to MongoDB");

    // ✅ STEP 2: EXISTING DOWNLOAD LOGIC
    if (onDownload) {
      await onDownload();
    }

    const link = document.createElement('a');
    link.href = '#';
    link.download = `${assignment.title || 'assignment'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // ✅ STEP 3: NAVIGATE
    navigate('/download');

  } catch (error) {
    console.error(error);
    alert("Something went wrong while saving");
  }
};


  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: assignment.title,
        text: `Check out this assignment generated with HandwrittenAI`,
        url: window.location.href,
      });
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getFileSize = () => {
    const baseSize = 2.4; // MB
    const questionsFactor = assignment.questions.length * 0.1;
    return (baseSize + questionsFactor).toFixed(1);
  };

  return (
    <div className="sticky bottom-6 z-10">
      <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-xl border border-gray-200 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Ready to download</h4>
                <p className="text-gray-600 text-sm">
                  Your handwritten assignment is ready! Download as PDF or print directly.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{assignment.questions.length} questions</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{getFileSize()} MB • PDF</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Just now</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={handleShare}
              disabled={isLoading}
              className="hidden md:flex"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </Button>
            
            <Button
              variant="outline"
              onClick={handlePrint}
              disabled={isLoading}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </Button>
            
            <Button
              onClick={handleDownload}
              loading={isLoading}
              disabled={disabled}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Print ready (300 DPI)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Editable PDF format</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-600">No watermark</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
              <span className="text-gray-600">High-quality handwriting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;