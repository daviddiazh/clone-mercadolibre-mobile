import React, {Fragment, useContext} from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconAD from 'react-native-vector-icons/AntDesign';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { HeaderMain } from '../components/HeaderMain';

export const ProductDetailsScreen = ({ navigation }: PropsNavigation) => {

    const { product, descriptionProduct } = useContext( ProductContext );

    console.log('descriptionProduct: ', descriptionProduct);

    return (
        <Fragment>
            <HeaderMain navigation={ navigation } />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <View style={[ styles.main ]}>
                    <Text 
                        style={[
                            styles.condition,
                            Platform.OS === 'android' ? styles.conditionAndroid : null,
                        ]}
                    >
                        { product?.condition === 'new' ? 'Nuevo' : 'Reacondicionado' } | { product?.sold_quantity } vendidos
                        </Text>
                    <Text
                        style={[
                            styles.titleProduct,
                            Platform.OS === 'android' ? styles.titleAndroidText : null,
                        ]}
                    >
                        {product.title}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                        <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                        <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                        <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                        <IconE name="star" style={[ styles.iconStars, Platform.OS === 'android' ? styles.iconStarsAndroid : null, ]} />
                    </View>

                    <View style={[styles.containerLengthImgs]}>
                    <Text 
                        style={[
                                styles.lengthImgs_text,
                                Platform.OS === 'android' ? styles.lengthImgs_textAndroid : null,
                            ]}
                        >
                            1 / { product?.pictures?.length }
                        </Text>
                    </View>

                    <Image
                        // source={{uri: `https://${product.thumbnail?.split('http://')[1]}`}}
                        source={{uri: product?.secure_thumbnail || `https://${product?.thumbnail?.split('http://')[1]}`}}
                        style={[ styles.imgProduct ]}
                    />

                    <View 
                        style={{ 
                            flexDirection: 'row',
                            justifyContent: 'flex-end' 
                        }}
                    >
                        <View style={[ styles.containerIcon ]}>
                            <IconAD 
                                name="sharealt"
                                style={[ styles.shareIcon ]}
                            />
                        </View>
                    </View>

                    <Text
                        style={[
                            styles.productPrice,
                            Platform.OS === 'android' ? styles.productPriceAndroid : null,
                        ]}
                    >
                        $ {product.price}
                    </Text>

                    <View
                        style={[
                            styles.duesContainer,
                        ]}
                    >
                        <Text style={[ styles.duesText, Platform.OS === 'android' ? styles.duesTextAndroid : null, ]}>Hasta 48 cuotas</Text>
                        <Text 
                            style={[ 
                                styles.moreInfoTextBlue,
                                Platform.OS === 'android' ? styles.moreInfoTextBlueAndroid : null,
                            ]}
                        >Más información</Text>
                    </View>

                    <Text
                        style={[
                            styles.stockTitle,
                            Platform.OS === 'android' ? styles.stockTitleAndroid : null,
                        ]}
                    >
                        Stock disponible
                    </Text>

                    <View style={[ styles.quantityContainer ]}>
                        <Text 
                            style={[ 
                                styles.quantityText,
                                Platform.OS === 'android' ? styles.buyNow_textAndroid : null,
                            ]}
                        >
                                Cantidad: <Text style={{fontWeight: "700"}}>1</Text>
                        </Text>
                        <IconAD name="right" color="#307df0" />
                    </View>

                    <View style={[ styles.buyNow ]}>
                        <Text style={[ styles.buyNow_text, Platform.OS === 'android' ? styles.buyNow_textAndroid : null, ]}>Comprar ahora</Text>
                    </View>

                    <View style={[ styles.addToCart ]}>
                        <Text 
                            style={[ 
                                styles.addToCart_text,
                                Platform.OS === 'android' ? styles.addToCart_textAndroid : null,
                            ]}
                        >
                            Agregar al carrito
                        </Text>
                    </View>

                    <View style={[ styles.btnsAddtoFavoriteAndShare ]}>
                        <View style={[ styles.containerIcons ]}>
                            <IconAD 
                                name="hearto"
                                style={[
                                    styles.iconsBtns,
                                    Platform.OS === 'android' ? styles.iconsBtnsAndroid : null,
                                ]}
                            />
                            <Text 
                                style={[
                                    styles.textBtnsIcons,
                                    Platform.OS === 'android' ? styles.textBtnsIconsAndroid : null,
                                ]}
                            >
                                Agregar a favoritos
                            </Text>
                        </View>

                        <View style={[ styles.containerIcons ]}>
                            <IconAD 
                                name="sharealt" 
                                style={[
                                    styles.iconsBtns,
                                    Platform.OS === 'android' ? styles.iconsBtnsAndroid : null,
                                ]}
                            />
                            <Text 
                                style={[
                                    styles.textBtnsIcons,
                                    Platform.OS === 'android' ? styles.textBtnsIconsAndroid : null,
                                ]}
                            >
                                Compartir
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text 
                            style={[
                                styles.titleDescription,
                                Platform.OS === 'android' ? styles.titleDescriptionAndroid : null,
                            ]}
                        >
                            Descripción
                        </Text>
                        <Text
                            style={[
                                styles.descriptionText,
                                Platform.OS === 'android' ? styles.descriptionTextAndroid : null,
                            ]}
                        >
                            { descriptionProduct.plain_text }
                        </Text>
                    </View>
                    
                </View>

            </ScrollView>
            <FooterMenuMain navigation={ navigation } />
        </Fragment>
    )
}

const styles = StyleSheet.create({

    main: {
        marginBottom: 60,
        padding: 15,
        margin: 0
    },

    condition: {
        fontSize: 10,
        color: '#666',
    },

    conditionAndroid: {
        fontSize: 12, 
    },
    
    titleProduct: {
        color: '#000',
        fontSize: 14,
        paddingVertical: 10,
        marginVertical: -4
    },

    titleAndroidText: {
        fontSize: 17,
    },
    
    iconStars: {
        color: '#307df0',
        fontSize: 10.5,
    },

    iconStarsAndroid: {
        fontSize: 12,
    },

    containerLengthImgs: {
        backgroundColor: '#ebebeb',
        width: 50,  
        paddingVertical: 5,
        borderRadius: 100,
        marginTop: 25,
    },

    lengthImgs_text: {
        textAlign: 'center',
        color: '#000',
        fontWeight: "500",
        fontSize: 10.5
    },

    lengthImgs_textAndroid: {
        fontSize: 13
    },

    imgProduct: {
        width: '100%',
        height: 330,        
        marginRight: 10,
        resizeMode: 'contain',
        textAlign: 'center',  
    },

    containerIcon: {
        backgroundColor: '#ebebeb',
        width: 30,
        paddingVertical: 7,
        borderRadius: 100,
    },

    shareIcon: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15
    },

    productPrice: {
        color: '#000',
        fontSize: 23,
        fontWeight: "500",
    },

    productPriceAndroid: {
        fontSize: 28,
    },

    duesContainer: {
        marginLeft: 20,
        marginVertical: 10,
    },

    duesText: {
        fontSize: 13,
        color: '#000',
    },

    duesTextAndroid: {
        fontSize: 16,
        paddingLeft: 3,
    },

    moreInfoTextBlue: {
        color: '#307df0',
        fontSize: 13,
        paddingTop: 3
    },

    moreInfoTextBlueAndroid: {
        fontSize: 16,
        paddingLeft: 3,
    },

    stockTitle: {
        color: '#000',
        fontWeight: "500",
        fontSize: 14,
        marginTop: 20
    },

    stockTitleAndroid: {
        fontSize: 17,
    },

    quantityContainer: {
        backgroundColor: '#f1f1f1',
        color: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        marginVertical: 20,
    },

    quantityText: {
        fontSize: 14,
        color: '#000'
    },

    quantityTextAndroid: {
        fontSize: 17,
    },

    buyNow: {
        backgroundColor: '#1259c3',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
    },

    buyNow_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "600"
    },

    buyNow_textAndroid: {
        fontSize: 17,
    },

    addToCart: {
        backgroundColor: '#4189e626',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 10
    },

    addToCart_text: {
        color: '#1259c3',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "600"
    },

    addToCart_textAndroid: {
        fontSize: 17,
    },

    btnsAddtoFavoriteAndShare: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
    },

    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    textBtnsIcons: {
        color: '#307df0',
        fontSize: 14,
        paddingLeft: 5        
    },

    textBtnsIconsAndroid: {
        fontSize: 17,
    },

    iconsBtns: {
        color: '#307df0',
        fontSize: 13,
    },

    iconsBtnsAndroid: {
        fontSize: 16,
    },

    titleDescription: {
        color: '#000',
        fontSize: 18,
        paddingVertical: 30,
    },

    titleDescriptionAndroid: {
        fontSize: 21,
    },

    descriptionText: {
        color: '#000',
        fontSize: 13,
    },

    descriptionTextAndroid: {
        fontSize: 16
    }

});