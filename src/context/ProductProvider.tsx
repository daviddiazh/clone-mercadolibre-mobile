import { FC, useReducer, useEffect } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ProductContext } from './ProductContext';
import { productReducer } from './productReducer';
import { useFetch } from '../hooks/useFetch';
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

// export const ProductProvider: FC<any> = ({ children }) => {
export const ProductProvider = ({ children }: Props) => {

    const [ state, dispatch ] = useReducer(productReducer, PRODUCT_INITIAL_STATE);

    const getProducts = async (searchTerm: string) => { 
        // const { data, isLoading } = useFetch<IProduct>(`https://api.mercadolibre.com/sites/MLC/search?q=${ searchTerm }&limit=25`);
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ searchTerm }&limit=25`);

        const data = await resp.json()

        // console.log('data - getProducts PROVIDER', data);

        dispatch({ type: 'Product - getProducts', payload: data })

        // if( isLoading ) return <Loading />

        return data;
    }

    // const getProduct = async (productId: string) => {
    //     const { data, isLoading } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ productId }`);

    //     const { data: description, isLoading: isLoadingDescription } = useFetch(`https://api.mercadolibre.com/items/${ productId }/description`)

    //     console.log('data - getProduct PROVIDER', data);

    //     dispatch({ type: 'Product - getProduct', payload: data }); //TODO: Check it

    //     if( isLoading || isLoadingDescription ) return <Loading />

    //     return {
    //         data,
    //         description
    //     }
    // }

    return (
        <ProductContext.Provider value={{
            ...state,

            getProducts,
            // getProduct,
        }}>
            { children }
        </ProductContext.Provider>
    )
}