export type ArticleType = {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    availableOn: {
        id: number;
        tag: string;
    }[];
    photos: {
        id: number;
        url: string;
    }[];
    price: number;
    isNew: boolean;
    createdAt: string;
}
