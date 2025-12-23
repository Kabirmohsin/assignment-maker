import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up timer
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up timer on unmount or when value/delay changes
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;