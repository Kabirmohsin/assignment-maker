// Application constants

export const APP_CONFIG = {
  APP_NAME: 'HandwrittenAI',
  VERSION: '1.0.0',
  MAX_QUESTIONS: 50,
  MAX_TITLE_LENGTH: 100,
  MAX_INSTRUCTIONS_LENGTH: 500,
  MAX_QUESTION_LENGTH: 1000,
  MAX_ANSWER_LENGTH: 2000,
  SUPPORTED_SUBJECTS: [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Geography',
    'Computer Science',
    'Art',
    'Music',
    'Physical Education',
    'Economics',
    'Psychology',
    'Sociology',
    'Political Science',
    'Philosophy',
    'Business',
    'Accounting',
    'Law',
    'Medicine',
    'Engineering',
    'Architecture',
    'Design',
    'Languages',
    'Other'
  ],
  GRADE_LEVELS: [
    'Elementary School',
    'Middle School',
    'High School',
    'College',
    'University',
    'Graduate',
    'Professional'
  ],
  DIFFICULTY_LEVELS: [
    'Beginner',
    'Easy',
    'Medium',
    'Hard',
    'Advanced',
    'Expert'
  ],
  QUESTION_TYPES: [
    { value: 'short', label: 'Short Answer', icon: '📝' },
    { value: 'long', label: 'Long Answer', icon: '📄' },
    { value: 'multiple', label: 'Multiple Choice', icon: '🔠' },
    { value: 'essay', label: 'Essay', icon: '📝' },
    { value: 'calculation', label: 'Calculation', icon: '🧮' },
    { value: 'truefalse', label: 'True/False', icon: '✅' },
    { value: 'matching', label: 'Matching', icon: '🔄' },
    { value: 'fillblank', label: 'Fill in the Blank', icon: '___' }
  ],
  HANDWRITING_STYLES: [
    {
      id: 'handwriting1',
      name: 'Academic Script',
      description: 'Clean, professional handwriting suitable for exams and official assignments.',
      style: 'neat',
      bestFor: ['exams', 'tests', 'official'],
      inkColor: 'black'
    },
    {
      id: 'handwriting2',
      name: 'Casual Notes',
      description: 'Natural, everyday handwriting with a relaxed feel for homework and notes.',
      style: 'casual',
      bestFor: ['homework', 'notes', 'worksheets'],
      inkColor: 'blue'
    },
    {
      id: 'handwriting3',
      name: 'Creative Flow',
      description: 'Artistic handwriting with personality, perfect for creative projects.',
      style: 'artistic',
      bestFor: ['creative', 'projects', 'art'],
      inkColor: 'darkBlue'
    },
    {
      id: 'handwriting4',
      name: 'Quick Notes',
      description: 'Fast, slightly messy handwriting that looks like real classroom notes.',
      style: 'messy',
      bestFor: ['rough', 'drafts', 'quick'],
      inkColor: 'pencil'
    },
    {
      id: 'handwriting5',
      name: 'Formal Script',
      description: 'Elegant, traditional handwriting for official documents and submissions.',
      style: 'formal',
      bestFor: ['formal', 'submissions', 'documents'],
      inkColor: 'black'
    },
    {
      id: 'handwriting6',
      name: 'Student Print',
      description: 'Clear, printed handwriting ideal for science and math assignments.',
      style: 'neat',
      bestFor: ['science', 'math', 'technical'],
      inkColor: 'blue'
    }
  ],
  PAPER_TYPES: [
    { value: 'lined', label: 'Lined Paper', icon: '📝' },
    { value: 'grid', label: 'Grid Paper', icon: '🔲' },
    { value: 'blank', label: 'Blank Paper', icon: '📄' },
    { value: 'college', label: 'College Ruled', icon: '🎓' },
    { value: 'dotgrid', label: 'Dot Grid', icon: '⏺' }
  ],
  INK_COLORS: [
    { value: 'black', label: 'Black Ink', color: '#000000' },
    { value: 'blue', label: 'Blue Ink', color: '#2563eb' },
    { value: 'darkBlue', label: 'Dark Blue', color: '#1e40af' },
    { value: 'pencil', label: 'Pencil', color: '#6b7280' },
    { value: 'red', label: 'Red Ink', color: '#dc2626' },
    { value: 'green', label: 'Green Ink', color: '#16a34a' }
  ],
  FILE_FORMATS: [
    { value: 'pdf', label: 'PDF Document', extension: '.pdf' },
    { value: 'docx', label: 'Word Document', extension: '.docx' },
    { value: 'png', label: 'PNG Image', extension: '.png' },
    { value: 'jpg', label: 'JPG Image', extension: '.jpg' }
  ]
};

export const VALIDATION_RULES = {
  TITLE: {
    required: true,
    minLength: 3,
    maxLength: 100,
    pattern: /^[A-Za-z0-9\s\-.,!?'"()&]+$/
  },
  SUBJECT: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  QUESTION: {
    required: true,
    minLength: 5,
    maxLength: 1000
  },
  ANSWER: {
    maxLength: 2000
  },
  MARKS: {
    min: 0,
    max: 100
  },
  INSTRUCTIONS: {
    maxLength: 500
  }
};

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  MIN_LENGTH: (min) => `Minimum ${min} characters required`,
  MAX_LENGTH: (max) => `Maximum ${max} characters allowed`,
  INVALID_FORMAT: 'Invalid format',
  MIN_VALUE: (min) => `Minimum value is ${min}`,
  MAX_VALUE: (max) => `Maximum value is ${max}`,
  INVALID_EMAIL: 'Invalid email address',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  GENERATION_ERROR: 'Failed to generate content. Please try again.',
  PDF_ERROR: 'Failed to generate PDF. Please try again.',
  SAVE_ERROR: 'Failed to save. Please try again.',
  LOAD_ERROR: 'Failed to load data. Please refresh the page.'
};

export const SUCCESS_MESSAGES = {
  GENERATION_SUCCESS: 'Assignment generated successfully!',
  PDF_SUCCESS: 'PDF generated successfully!',
  SAVE_SUCCESS: 'Saved successfully!',
  DOWNLOAD_SUCCESS: 'Download started successfully!',
  COPY_SUCCESS: 'Copied to clipboard!'
};

export const UI_CONSTANTS = {
  DEBOUNCE_DELAY: 500,
  TOAST_DURATION: 3000,
  LOADING_DELAY: 2000,
  ANIMATION_DURATION: 300,
  MAX_PREVIEW_CHARS: 1000,
  ITEMS_PER_PAGE: 10,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024
};

export const STORAGE_KEYS = {
  DRAFTS: 'handwrittenai_drafts',
  SETTINGS: 'handwrittenai_settings',
  RECENT_ASSIGNMENTS: 'handwrittenai_recent',
  USER_PREFERENCES: 'handwrittenai_preferences'
};

export const API_ENDPOINTS = {
  GENERATE_ASSIGNMENT: '/api/generate',
  GENERATE_PDF: '/api/generate-pdf',
  SAVE_DRAFT: '/api/save-draft',
  GET_DRAFTS: '/api/drafts',
  DELETE_DRAFT: '/api/drafts',
  GET_STYLES: '/api/handwriting-styles',
  VALIDATE: '/api/validate',
  UPLOAD_IMAGE: '/api/upload',
  EXPORT: '/api/export'
};

export const DEFAULT_ASSIGNMENT = {
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
  paperType: 'lined',
  inkColor: 'black',
  format: 'pdf',
  quality: 'high'
};