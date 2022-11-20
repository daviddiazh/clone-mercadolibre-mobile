import React, { Fragment, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { HeaderMain } from '../components/HeaderMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const ProductListScreen = ({ navigation }: PropsNavigation) => {

    const { products } = useContext( ProductContext );
    
    return (
        <Fragment>
            <HeaderMain navigation={ navigation } />
            <ScrollView>
                <Text>ProductList</Text>

                {
                    products.results?.map(product => (
                        <View key={ product.id }>
                            <Text>{product.id}</Text>
                            <Text>{product.title}</Text>
                        </View>
                    ))
                }
            </ScrollView>
            <FooterMenuMain navigation={ navigation } />
        </Fragment>
    )
}
