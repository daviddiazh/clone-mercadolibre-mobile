import React, { Fragment, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, ImageBackground, Platform } from 'react-native';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { HeaderMain } from '../components/HeaderMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';

export const ProductListScreen = ({ navigation }: PropsNavigation) => {

    const { getProduct, products } = useContext( ProductContext );

    const detailsProduct = (id: any) => {
        getProduct(id);
        navigation.navigate('ProductDetailsScreen');
    }
    
    return (
        <Fragment>
            <HeaderMain navigation={ navigation } />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

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

                    <View>
                        {
                            products.results?.map((product: any) => (
                                <View key={ product.id }>

                                    {/* <Text>{`${product.thumbnail.split('http://')[1]}`}</Text> */}

                                    <TouchableOpacity key={ product.id } onPress={ () => detailsProduct(product.id) }>
                                        <View style={[ styles.cardProduct ]}>
                                            <Image 
                                                // source={{uri: product.thumbnail}}
                                                source={{uri: `https://${product.thumbnail.split('http://')[1]}`}}
                                                style={[ styles.imgProduct ]}
                                            />

                                            <View style={[ styles.containerDataProduct ]}>
                                                <Text style={[
                                                    styles.titleProduct,
                                                    Platform.OS === 'android' ? styles.titleAndroidText : null,
                                                ]}>
                                                    {product.title.length >= 90 ? product.title.substring(90, '') + '...' : product.title}
                                                </Text>
                                                <Text 
                                                    style={[
                                                        styles.priceProduct,
                                                        Platform.OS === 'android' ? styles.priceAndroidText : null,
                                                    ]}
                                                >
                                                    $ {product.price}</Text>
                                                <Text
                                                    style={[
                                                        styles.dividedPrice,
                                                        Platform.OS === 'android' ? styles.dividedPriceAndroid : null,
                                                    ]}
                                                >
                                                    en 36x $ {String(product?.price! / 36).split('.')[0]}</Text>
                                                <Text
                                                    style={[
                                                        styles.freeDelivery,
                                                        Platform.OS === 'android' ? styles.freeDeliveryAndroid : null,
                                                    ]}
                                                >
                                                    Envío gratis</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                                                    <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                                                    <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                                                    <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                                                    <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                                                </View>
                                            </View>
                                        </View>
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
    },

    cardProduct: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        paddingHorizontal: 30,
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1,
    },

    imgProduct: {
        width: '40%',
        height: 130,
        marginLeft: -20,
        resizeMode: 'contain',
        textAlign: 'center',  
        marginRight: 10
    },

    containerDataProduct: {
        width: '70%',
    },

    titleProduct: {
        color: '#333',
        fontSize: 13,
        paddingVertical: 10,
    },

    titleAndroidText: {
        fontSize: 16,
    },

    priceProduct: {
        fontSize: 18,
        color: '#000',
        fontWeight: "400"
    },

    priceAndroidText: {
        fontSize: 22,
    },

    dividedPrice: {
        fontSize: 10.5,
        color: '#333',
        fontWeight: "400"
    },

    dividedPriceAndroid: {
        fontSize: 12,
    },

    freeDelivery: {
        fontSize: 10.5,
        color: 'rgb(0, 166, 80)',
        fontWeight: "500",
        paddingVertical: 5
    },

    freeDeliveryAndroid: {
        fontSize: 12,
    },

    iconStars: {
        color: '#307df0',
        fontSize: 10.5,
    },

    iconStarsAndroid: {
        fontSize: 12,
    }

});