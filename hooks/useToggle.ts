// hooks/useToggle.ts
import { useState, useCallback } from 'react';

export const useToggle = (initial = false): [boolean, () => void] => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};
