export interface IAddress{
    id: number;
    name: string;
    type: string;
    addressStreet: string;
    addressRegion: string;
}
export interface IDish {
    id: number;
    category: string;
    description: string;
    imgPath: string;
    name: string;
    orderAddresses: IAddress[];
    receiptCooking: string
    receiptIngredients: string;
    receiptStory: string;
}