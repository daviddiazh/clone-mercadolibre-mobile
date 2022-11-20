import React, {Fragment, useContext} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { HeaderMain } from '../components/HeaderMain';

export const ProductDetailsScreen = ({ navigation }: PropsNavigation) => {

    const { product } = useContext( ProductContext ) 

    return (
        <Fragment>
            <HeaderMain navigation={ navigation } />
            <ScrollView>

                <View>
                    <Text>ProductDetails</Text>
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                </View>

            </ScrollView>
            <FooterMenuMain navigation={ navigation } />
        </Fragment>
    )
}
