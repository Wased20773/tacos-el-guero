import { createContext, useContext, useEffect, useState } from "react";

export const PageProviderContext = createContext(null);

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("currentPage") || "homepage";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  return (
    <PageProviderContext.Provider value={{ page, setPage }}>
      {children}
    </PageProviderContext.Provider>
  );
};

export const usePage = () => {
    const context = useContext(PageProviderContext);
    if (!context) {
        throw new Error("usePage must be used within a PageProvider");
    }
    return context;
}