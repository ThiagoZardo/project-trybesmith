export interface Order {
  id?: number;
  userId: number;
  productsIds: number[];
}

export type OrderRequestCreate = {
  productsIds: number[];
};

export interface OrderCreate {
  userId: number;
  productsIds: number[]
}
