import { FC, useReducer, useEffect, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ProductContext } from './ProductContext';
import { productReducer } from './productReducer';
import { Loading } from '../components/Loading';
import { IProductId } from '../interfaces/ProductId';

export interface ProductState{
    products: IProduct;
    product: IProductId
}

const PRODUCT_INITIAL_STATE: ProductState = {
    products: [],
    product: {}
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider = ({ children }: Props) => {

    const [ state, dispatch ] = useReducer(productReducer, PRODUCT_INITIAL_STATE);
    const [ isLoading, setLoading ] = useState(false);

    const getProducts = async (searchTerm: string) => { 
        
        setLoading(true);
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ searchTerm }&limit=25`);
        const data = await resp.json()

        dispatch({ type: 'Product - getProducts', payload: data })
        setLoading(false);

        if( isLoading ) return <Loading />;

        return data;
    }

    const getProduct = async (productId: string) => {
        // const { data: description, isLoading: isLoadingDescription } = useFetch(`https://api.mercadolibre.com/items/${ productId }/description`)
        setLoading(true);
        const resp = await fetch(`https://api.mercadolibre.com/items/${ productId }`);

        const data = await resp.json()

        console.log('data - getProduct PROVIDER', data);

        dispatch({ type: 'Product - getProduct', payload: data }); //TODO: Check it
        setLoading(false);

        if( isLoading ) return <Loading />;

        return data
    }

    return (
        <ProductContext.Provider value={{
            ...state,

            getProducts,
            getProduct,
        }}>
            { children }
        </ProductContext.Provider>
    )
}