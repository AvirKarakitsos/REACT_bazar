import { ReactNode, useState } from "react"
import { ModalContext } from "./ModalContext";
import { ArticleType } from "../types/project";

type ModalProviderProps = {
    children: ReactNode;
};

const emptyArticle: ArticleType = {
    id: 0,
    categoryId: 0,
    title: "",
    description: "",
    availableOn: [{
        id: 0,
        websiteId:0,
        link: "",
    }],
    photos: [{
        id: 0,
        url: "",
    }],
    price: 0,
    isNew: false,
    createdAt: ""
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [article, setArticle] = useState(emptyArticle)
 
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, article, setArticle }}>
            {children}
        </ModalContext.Provider>
    )
}