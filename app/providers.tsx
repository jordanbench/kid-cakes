"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import SignupModal from "./components/SignupModal";

export type Plan = "starter" | "monthly" | "bundle";

interface ModalContextType {
  openModal: (plan?: Plan) => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export default function Providers({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<Plan | undefined>();

  function openModal(p?: Plan) {
    setPlan(p);
    setIsOpen(true);
  }

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <SignupModal
        isOpen={isOpen}
        plan={plan}
        onClose={() => setIsOpen(false)}
      />
    </ModalContext.Provider>
  );
}
