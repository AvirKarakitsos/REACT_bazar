import { ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import { ArticleType } from '../types/project';

type ModalProviderProps = {
    children: ReactNode;
};

const emptyArticle: ArticleType = {
    id: 0,
    title: '',
    description: '',
    websites: [
        {
            id: 0,
            logoShort: '',
            link: '',
        },
    ],
    photos: 0,
    price: 0,
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [article, setArticle] = useState(emptyArticle);

    return (
        <ModalContext.Provider
            value={{ isOpen, setIsOpen, article, setArticle }}
        >
            {children}
        </ModalContext.Provider>
    );
};
