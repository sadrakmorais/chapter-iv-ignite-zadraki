import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect } from "react";

type SidebarDrawerContextProps = {
  children: ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

export const SidebarDrawerContext = createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
);

export function SiderbarDrawerProvider({
  children,
}: SidebarDrawerContextProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose;
  }, [disclosure.onClose, router.asPath]);
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}
