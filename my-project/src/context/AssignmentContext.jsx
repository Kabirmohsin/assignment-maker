import React, { createContext, useState, useContext, useCallback } from 'react';

const AssignmentContext = createContext();

export const useAssignment = () => {
  const context = useContext(AssignmentContext);
  if (!context) {
    throw new Error('useAssignment must be used within AssignmentProvider');
  }
  return context;
};

export const AssignmentProvider = ({ children }) => {
  const [assignment, setAssignment] = useState({
    title: '',
    subject: '',
    topic: '',
    gradeLevel: 'High School',
    difficulty: 'Medium',
    numQuestions: 5,
    instructions: '',
    questions: [],
    selectedFont: 'handwriting1',
    handwritingStyle: 'Neat',
    includeAnswers: false,
    showMarks: true,
    dueDate: '',
  });

  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const updateAssignment = useCallback((updates) => {
    setAssignment(prev => ({ ...prev, ...updates }));
  }, []);

  const clearAssignment = useCallback(() => {
    setAssignment({
      title: '',
      subject: '',
      topic: '',
      gradeLevel: 'High School',
      difficulty: 'Medium',
      numQuestions: 5,
      instructions: '',
      questions: [],
      selectedFont: 'handwriting1',
      handwritingStyle: 'Neat',
      includeAnswers: false,
      showMarks: true,
      dueDate: '',
    });
    setGeneratedContent('');
    setPreviewImage(null);
    setPdfUrl(null);
  }, []);

  const value = {
    assignment,
    generatedContent,
    previewImage,
    pdfUrl,
    isGenerating,
    updateAssignment,
    clearAssignment,
    setGeneratedContent,
    setPreviewImage,
    setPdfUrl,
    setIsGenerating,
  };

  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
};