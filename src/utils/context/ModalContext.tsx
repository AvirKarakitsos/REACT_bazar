import { createContext } from "react";

export type ModalContextType = {
    isOpen: boolean;
    setIsOpen: (input: boolean) => void;
 }

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

