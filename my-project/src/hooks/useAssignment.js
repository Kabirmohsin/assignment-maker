import { useState, useCallback } from 'react';
import assignmentService from '../services/assignmentService';

const useAssignment = () => {
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
  const [error, setError] = useState(null);
  const [savedDrafts, setSavedDrafts] = useState([]);

  const updateAssignment = useCallback((updates) => {
    setAssignment(prev => ({ ...prev, ...updates }));
    setError(null); // Clear error on update
  }, []);

  const addQuestion = useCallback((question) => {
    setAssignment(prev => ({
      ...prev,
      questions: [...prev.questions, { ...question, id: Date.now() }]
    }));
  }, []);

  const updateQuestion = useCallback((id, updates) => {
    setAssignment(prev => ({
      ...prev,
      questions: prev.questions.map(q => 
        q.id === id ? { ...q, ...updates } : q
      )
    }));
  }, []);

  const removeQuestion = useCallback((id) => {
    setAssignment(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== id)
    }));
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
    setError(null);
  }, []);

  const generateAssignment = useCallback(async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Validate assignment before generation
      const validation = await assignmentService.validateAssignment(assignment);
      
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      // Generate assignment using service
      const result = await assignmentService.createAssignment(assignment);
      
      if (!result.success) {
        throw new Error(result.error);
      }

      setGeneratedContent(result.assignment.generatedContent);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to generate assignment');
      console.error('Error generating assignment:', err);
      return { success: false, error: err.message };
    } finally {
      setIsGenerating(false);
    }
  }, [assignment]);

  const generatePDF = useCallback(async () => {
    setIsGenerating(true);
    setError(null);

    try {
      if (!generatedContent) {
        throw new Error('No generated content available');
      }

      const result = await assignmentService.generateAssignmentPDF({
        ...assignment,
        generatedContent
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      setPdfUrl(result.pdf.pdfUrl);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to generate PDF');
      console.error('Error generating PDF:', err);
      return { success: false, error: err.message };
    } finally {
      setIsGenerating(false);
    }
  }, [assignment, generatedContent]);

  const saveAsDraft = useCallback(async () => {
    setError(null);

    try {
      const result = await assignmentService.saveAsDraft(assignment);
      
      if (!result.success) {
        throw new Error(result.error);
      }

      setSavedDrafts(prev => [result.draft, ...prev]);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to save draft');
      console.error('Error saving draft:', err);
      return { success: false, error: err.message };
    }
  }, [assignment]);

  const loadDraft = useCallback((draft) => {
    setAssignment(draft);
    setGeneratedContent('');
    setPreviewImage(null);
    setPdfUrl(null);
    setError(null);
  }, []);

  const loadSampleAssignment = useCallback(() => {
    const sample = assignmentService.generateSampleAssignment();
    setAssignment(sample);
    setGeneratedContent('');
    setPreviewImage(null);
    setPdfUrl(null);
    setError(null);
  }, []);

  const getAssignmentStats = useCallback(() => {
    return assignmentService.calculateAssignmentStats(assignment);
  }, [assignment]);

  const validateAssignment = useCallback(async () => {
    try {
      const result = await assignmentService.validateAssignment(assignment);
      return result;
    } catch (err) {
      return { isValid: false, errors: [err.message] };
    }
  }, [assignment]);

  const getHandwritingStyles = useCallback(async () => {
    try {
      const result = await assignmentService.getHandwritingStyles();
      return result;
    } catch (err) {
      setError(err.message || 'Failed to load handwriting styles');
      return { success: false, error: err.message };
    }
  }, []);

  // Check if assignment is ready for generation
  const isAssignmentReady = useCallback(() => {
    return (
      assignment.title.trim() &&
      assignment.subject.trim() &&
      assignment.questions.length > 0 &&
      assignment.questions.every(q => q.text?.trim())
    );
  }, [assignment]);

  // Get formatted assignment for display
  const getFormattedAssignment = useCallback(() => {
    return assignmentService.formatAssignmentForDisplay(assignment);
  }, [assignment]);

  return {
    // State
    assignment,
    generatedContent,
    isGenerating,
    previewImage,
    pdfUrl,
    error,
    savedDrafts,
    
    // Actions
    updateAssignment,
    addQuestion,
    updateQuestion,
    removeQuestion,
    clearAssignment,
    generateAssignment,
    generatePDF,
    saveAsDraft,
    loadDraft,
    loadSampleAssignment,
    
    // Getters
    getAssignmentStats,
    getFormattedAssignment,
    getHandwritingStyles,
    
    // Validators
    validateAssignment,
    isAssignmentReady,
    
    // Setters
    setGeneratedContent,
    setPreviewImage,
    setPdfUrl,
    setIsGenerating,
    setError,
  };
};

export default useAssignment;