import React, { Fragment, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { HeaderMain } from '../components/HeaderMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';

export const ProductListScreen = ({ navigation }: PropsNavigation) => {

    const { getProduct, products } = useContext( ProductContext );

    const detailsProduct = (id: any) => {
        getProduct(id);
        navigation.navigate('ProductDetailsScreen');
    }
    
    return (
        <Fragment>
            <HeaderMain navigation={ navigation } />
            <ScrollView>
                {/* <Text>ProductList</Text> */}

                {
                    products.results?.map(product => (
                        <View>
                            <TouchableOpacity key={ product.id } onPress={ () => detailsProduct(product.id) }>
                                <Text>{product.id}</Text>
                                <Text>{product.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
            <FooterMenuMain navigation={ navigation } />
        </Fragment>
    )
}
