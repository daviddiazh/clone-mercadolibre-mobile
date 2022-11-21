import React, {Fragment, useContext} from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconAD from 'react-native-vector-icons/AntDesign';
import { FooterMenuMain } from '../components/FooterMenu/FooterMenuMain';
import { ProductContext } from '../context/ProductContext';
import { PropsNavigation } from '../interfaces/IPropsNavigator';
import { HeaderMain } from '../components/HeaderMain';

export const ProductDetailsScreen = ({ navigation }: PropsNavigation) => {

    const { product } = useContext( ProductContext );

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
                    <Text>1/{ product?.pictures?.length }</Text>

                    <Image
                        // source={{uri: `https://${product.thumbnail?.split('http://')[1]}`}}
                        source={{uri: product?.secure_thumbnail || `https://${product?.thumbnail?.split('http://')[1]}`}}
                        style={[ styles.imgProduct ]}
                    />

                    <IconAD name="sharealt" />

                    <Text>$ {product.price}</Text>

                    <Text>Hasta 48 cuotas</Text>
                    <Text>Más información</Text>

                    <Text>Llega gratis el jueves</Text>
                    <Text>Enviar a Medellin, Antioquia</Text>

                    <Text>Retira gratis a partir del viernes en una agencia de Mercado Libre</Text>
                    <Text>Comprando dentro de las próximas 3 h 54 min</Text>
                    <Text>Ver en el mapa</Text>

                    <Text>Stock disponible</Text>

                    <TouchableOpacity>
                        <Text>Cantidad: 1</Text>
                        <IconAD name="right" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Comprar ahora</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Agregar al carrito</Text>
                    </TouchableOpacity>

                    <View>
                        <View>
                            <IconAD name="hearto" />
                            <Text>Agregar a favoritos</Text>
                        </View>

                        <View>
                            <IconAD name="sharealt" />
                            <Text>Compartir</Text>
                        </View>
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
    
    titleProduct: {
        color: '#000',
        fontSize: 14,
        paddingVertical: 10,
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

    imgProduct: {
        width: '100%',
        height: 330,        
        marginRight: 10,
        resizeMode: 'contain',
        textAlign: 'center',  
    },

});