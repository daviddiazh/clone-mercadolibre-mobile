import { createContext } from 'react'
import { IDescriptionProductId } from '../interfaces/IDescriptionProduct';
import { IProduct } from '../interfaces/IProduct'
import { IProductId } from '../interfaces/ProductId';

interface ContextProps {
    products: IProduct,
    product: IProductId,
    descriptionProduct: IDescriptionProductId

    getProducts: (searchTerm: string) => Object;
    getProduct: (productId: string) => Object;
    getDescriptionProduct: (productId: string) => Object;
}

export const ProductContext = createContext({} as ContextProps);