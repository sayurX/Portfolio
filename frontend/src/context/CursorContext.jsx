import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [cursorLabel, setCursorLabel] = useState('');

  const cursorHoverProject = (label) => {
    setCursorType('project');
    setCursorText('see more');
    setCursorLabel(label);
  };

  const cursorReset = () => {
    setCursorType('default');
    setCursorText('');
    setCursorLabel('');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType,
        cursorText,
        cursorLabel,
        cursorHoverProject,
        cursorReset,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
