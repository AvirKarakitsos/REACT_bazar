import { ReactNode, useState } from "react"
import { ModalContext } from "./ModalContext";

type ModalProviderProps = {
    children: ReactNode;
};



export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
 
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
}