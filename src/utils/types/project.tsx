export type ArticleType = {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    availableOn: {
        id: number;
        websiteId: number
        link: string;
    }[];
    photos: {
        id: number;
        url: string;
    }[];
    price: number;
    isNew: boolean;
    createdAt: string;
}

export type CategoryType = {
    id: number;
    name: string;
    banner: string;
    subcategories: {
        id: number;
        name: string;
    }[]
}

export type WebsiteType =  {
    id: number;
    name: string;
    logo: string;
    logoShort: string;
}

export type AvailableOnType =  {
    id: number;
    websiteId: number;
    link: string;
}
