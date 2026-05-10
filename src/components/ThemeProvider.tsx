"use client";
import { createContext, useContext } from "react";
const ThemeContext = createContext({ theme: "dark", setTheme: (_: string) => {} });
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value={{ theme: "dark", setTheme: () => {} }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
