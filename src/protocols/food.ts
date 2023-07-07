export type Food = {
    id: number;
    type: string;
    name: string;
    price: number;
};
export type FoodCreateUpdate = Omit<Food, "id"> 