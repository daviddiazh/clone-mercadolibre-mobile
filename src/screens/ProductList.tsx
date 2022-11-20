import React, { Fragment, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { HeaderMain } from '../components/HeaderMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import IconAD from 'react-native-vector-icons/AntDesign';

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

                <View style={[ styles.main ]}>

                    <View style={[ styles.header ]}>
                        <Text style={[ styles.generalText ]}>+{products.paging?.total} Resultados</Text>
                        <View style={[ styles.containerFilterTomorrow ]}>
                            <Text style={[ styles.generalText ]}>Llegan mañana</Text>
                            <View style={[ styles.header_containerSwitch ]}>
                                <View style={[ styles.header_switch ]}/>
                            </View>
                        </View>
                        <View style={[ styles.header_filters ]}>
                            <Text style={{ color: '#1259c3', fontSize: 13 }}>Filtrar (1)</Text>
                            <IconAD name="down" color="#1259c3" />
                        </View>
                    </View>

                    {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text>Ir a atrás</Text>
                    </TouchableOpacity> */}

                    <View>
                        {
                            products.results?.map(product => (
                                <View key={ product.id }>
                                    <TouchableOpacity key={ product.id } onPress={ () => detailsProduct(product.id) }>
                                        <Text>{product.id}</Text>
                                        <Text>{product.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </View>
                </View>

            </ScrollView>
            <FooterMenuMain navigation={ navigation } />
        </Fragment>
    )
}

const styles = StyleSheet.create({

    main: {
        // backgroundColor: '#ebebeb',
        // height: '100%',
        // flex: 1
        marginBottom: 70,
        padding: 0,
        margin: 0
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: '#ebebeb'
    },

    generalText: {
        color: '#333',
        fontSize: 13
    },

    header_filters: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header_containerSwitch: {
        width: 30,
        height: 15,
        borderRadius: 100,
        backgroundColor: '#c8c8c8',
        marginLeft: 10
    },

    header_switch: {
        width: 14,
        height: 11.5,
        marginVertical: 1.5,
        marginLeft: 1.5,
        borderRadius: 100,
        backgroundColor: '#fff',
    },

    containerFilterTomorrow: {
        flexDirection: 'row'
    }

});