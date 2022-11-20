import { createContext } from 'react'
import { IProduct } from '../interfaces/IProduct'
import { IProductId } from '../interfaces/ProductId';

interface ContextProps {
    products: IProduct,
    product: IProductId,

    getProducts: (searchTerm: string) => Object;
    // getProduct: (idProduct: string) => Object;
}

export const ProductContext = createContext({} as ContextProps);