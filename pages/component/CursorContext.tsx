import { createContext, useContext, useState, ReactNode } from 'react';

type CursorContextType = {
  cursorStyle: string;
  setCursorStyle: React.Dispatch<React.SetStateAction<string>>;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorStyle, setCursorStyle] = useState('default');

  return (
    <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
      {children}
    </CursorContext.Provider>
  );
}