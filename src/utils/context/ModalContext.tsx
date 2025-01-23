import { createContext } from "react";
import { ArticleType } from "../types/project";

export type ModalContextType = {
    isOpen: boolean,
    setIsOpen: (input: boolean) => void,
    article: ArticleType,
    setArticle: (input: ArticleType) => void;
 }

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

