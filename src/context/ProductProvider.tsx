import { FC, useReducer, } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ProductContext } from './ProductContext';
import { productReducer } from './productReducer';
import { IProductId } from '../interfaces/ProductId';
import { IDescriptionProductId } from '../interfaces/IDescriptionProduct';

export interface ProductState{
    products: IProduct;
    product: IProductId;
    descriptionProduct: IDescriptionProductId;
}

const PRODUCT_INITIAL_STATE: ProductState = {
    products: [],
    product: {},
    descriptionProduct: {}
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider = ({ children }: Props) => {

    const [ state, dispatch ] = useReducer(productReducer, PRODUCT_INITIAL_STATE);

    const getProducts = async (searchTerm: string) => { 
        
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ searchTerm }&limit=25`);
        const data = await resp.json()

        dispatch({ type: 'Product - getProducts', payload: data })

        return data;
    }

    const getProduct = async (productId: string) => {

        const resp = await fetch(`https://api.mercadolibre.com/items/${ productId }`);
        const data = await resp.json()

        dispatch({ type: 'Product - getProduct', payload: data });

        return data;
    }

    const getDescriptionProduct = async (productId: string) => {

        const resp = await fetch(`https://api.mercadolibre.com/items/${ productId }/description`);
        const data = await resp.json();

        dispatch({ type: 'Product - getDescriptionProduct', payload: data });

        return data;
    }

    return (
        <ProductContext.Provider value={{
            ...state,

            getProducts,
            getProduct,
            getDescriptionProduct
        }}>
            { children }
        </ProductContext.Provider>
    )
}