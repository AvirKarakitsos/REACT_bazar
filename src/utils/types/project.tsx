export type ArticleType = {
    id: number;
    title: string;
    description: string;
    photos: number;
    price: number;
    websites: {
        id: number;
        logoShort: string;
        link: string;
    }[];
};

export type CategoryType = {
    id: number;
    name: string;
};

export type WebsiteType = {
    id: number;
    name: string;
    logo: string;
    logoShort: string;
};

export type AvailableOnType = {
    id: number;
    websiteId: number;
    link: string;
};
