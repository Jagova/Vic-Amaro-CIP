export interface Service {
    image: string;
    title: string;
    description: string;
    onlineDescription: string;
    presencialDescription: string;
    path: string;
    isPrincipal: boolean;
    priceOnline: string;
    pricePresencial: string;
    priority: number,
    presencialLink: string;
    onlineLink: string;
}