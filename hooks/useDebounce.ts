import { useEffect, useState } from "react";

function useDebounce<T>(values: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(values);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(values);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [values, delay]);

  return debounceValue;
}

export default useDebounce;
