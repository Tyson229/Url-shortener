import React, { createContext, useContext, useState } from "react";


type LinkContextProviderProps = {
  children: React.ReactNode;
};

type LinkContext = {
  links: linkResult[];
  setLinks: React.Dispatch<React.SetStateAction<linkResult[]>>;
};

export type linkResult = {
  original: string;
  shortened: string;
};
const LinkContext = createContext<LinkContext | null>(null);

export default function LinkContextProvider({
  children,
}: LinkContextProviderProps) {

  const [links, setLinks] = useState<linkResult[]>([]);
  
  return (
    <LinkContext.Provider value={{ links, setLinks }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinkContext() {
  const context = useContext(LinkContext);
  if (!context)
    throw new Error("useLinkContext must be used within a LinkContextProvider");
  return context;
}
