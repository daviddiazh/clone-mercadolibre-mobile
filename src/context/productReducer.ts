import { IProduct } from '../interfaces/IProduct';
import { IProductId } from '../interfaces/ProductId';
import { ProductState } from './ProductProvider';
import { IDescriptionProductId } from '../interfaces/IDescriptionProduct';

type ProductActionTypes = 
|   { type: 'Product - getProducts', payload: IProduct } 
|   { type: 'Product - getProduct', payload: IProductId } 
|   { type: 'Product - getDescriptionProduct', payload: IDescriptionProductId } 

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

        case 'Product - getDescriptionProduct': 
            return {
                ...state,
                descriptionProduct: action.payload
            }
        
        default:
            return state;
    }

}