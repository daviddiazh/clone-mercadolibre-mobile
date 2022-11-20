import { IProduct } from '../interfaces/IProduct';
import { IProductId } from '../interfaces/ProductId';
import { ProductState } from './ProductProvider';

type ProductActionTypes = 
|   { type: 'Product - getProducts', payload: IProduct } 
|   { type: 'Product - getProduct', payload: IProductId } 

export const productReducer = ( state: ProductState, action: ProductActionTypes ): ProductState => {

    switch( action.type ){
        case 'Product - getProducts':
            return {
                ...state,
                products: action.payload
            }
        
        case 'Product - getProduct': 
            return {
                ...state,
                product: action.payload
            }
        
        default:
            return state;
    }

}