// Utility helper functions

/**
 * Format date to readable string
 */
export const formatDate = (dateString, options = {}) => {
  if (!dateString) return 'Not set';
  
  const date = new Date(dateString);
  const defaultOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

/**
 * Format file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Generate random ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return text.substr(0, maxLength) + '...';
};

/**
 * Validate email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Download file from URL
 */
export const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

/**
 * Generate random color
 */
export const getRandomColor = () => {
  const colors = [
    '#3b82f6', // blue
    '#10b981', // emerald
    '#8b5cf6', // violet
    '#f59e0b', // amber
    '#ef4444', // red
    '#06b6d4', // cyan
    '#84cc16', // lime
    '#f97316', // orange
    '#ec4899', // pink
    '#6366f1', // indigo
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Calculate reading time
 */
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

/**
 * Sanitize input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Format marks distribution
 */
export const formatMarksDistribution = (questions) => {
  const totalMarks = questions.reduce((sum, q) => sum + (q.marks || 0), 0);
  const marksByType = questions.reduce((acc, q) => {
    const type = q.type || 'other';
    acc[type] = (acc[type] || 0) + (q.marks || 0);
    return acc;
  }, {});
  
  return {
    totalMarks,
    marksByType,
    averageMarks: totalMarks / questions.length || 0
  };
};

/**
 * Get subject icon
 */
export const getSubjectIcon = (subject) => {
  const iconMap = {
    'Mathematics': '∫',
    'Physics': '⚛',
    'Chemistry': '⚗',
    'Biology': '🧬',
    'English': '📚',
    'History': '🏛',
    'Geography': '🌍',
    'Computer Science': '💻',
    'Art': '🎨',
    'Music': '🎵',
    'Physical Education': '🏃',
    'Economics': '💰',
    'Psychology': '🧠',
    'Sociology': '👥',
    'Political Science': '🏛',
    'Philosophy': '🤔',
    'Business': '💼',
    'Accounting': '📊',
    'Law': '⚖',
    'Medicine': '🩺',
    'Engineering': '⚙',
    'Architecture': '🏗',
    'Design': '🎨',
    'Languages': '🗣',
    'Other': '📝'
  };
  
  return iconMap[subject] || '📝';
};

/**
 * Get difficulty color
 */
export const getDifficultyColor = (difficulty) => {
  const colorMap = {
    'Beginner': 'green',
    'Easy': 'green',
    'Medium': 'blue',
    'Hard': 'orange',
    'Advanced': 'red',
    'Expert': 'purple'
  };
  
  return colorMap[difficulty] || 'gray';
};

/**
 * Generate initials from name
 */
export const getInitials = (name) => {
  if (!name) return '??';
  
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substr(0, 2);
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Parse query parameters
 */
export const parseQueryParams = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};
  
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  
  return result;
};

/**
 * Create query string
 */
export const createQueryString = (params) => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value.toString());
    }
  });
  
  return searchParams.toString();
};

/**
 * Check if running on mobile
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

/**
 * Check if running on tablet
 */
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

/**
 * Check if running on desktop
 */
export const isDesktop = () => {
  return window.innerWidth > 1024;
};

/**
 * Get current device type
 */
export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

/**
 * Generate password
 */
export const generatePassword = (length = 12) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  return password;
};

/**
 * Calculate percentage
 */
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

/**
 * Sleep/wait function
 */
export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};