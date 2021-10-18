import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'


import  COLORS  from '../constants/colors'

import { loadOrders } from '../store/actions/orders.actions';
import { logout } from '../store/actions/auth.action';

import LocationSelector from '../components/Profile/LocationSelector';

const SUCURSALES = [
    {name:"ABASTO",lat:-34.97611,lng:-58.09722},
    {name:"OBELISCO",lat:-34.603851,lng:-58.381775},
    {name:"PUERTO MADERO",lat:-34.609440,lng:-58.36186},
    {name:"GRAL PAZ",lat:-34.6454,lng:-58.5286},
  ]

const UserScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState();
    const [location, setLocation] = useState({lat:0,lng:0});
    const [sucursalCercana, setSucursal] = useState({name:"NINGUNA",lat:0,lng:0});

    const user = useSelector(state => state.auth.mail);
    const cant_orders = useSelector(state => state.orders.orders).length;

    const handleTitleChange = text => setTitle(text);

    const handleOrders = () => {
        // dispatch(addPlace(title, image, location));
        navigation.navigate('OrderListScreen');
    }

    // const handlePickImage = (uri) => {
    //     setImage(uri);
    // }
    const handleLogout = () => {
        dispatch(logout())
    }
    

    const handlePickLocation = (loc) => {
        setLocation(loc);
    }

    useEffect(() => {
        CalculateDistance();
    }, [location])

    useEffect(() => {
        dispatch(loadOrders());
    }, [])

    function getDistanciaMetros(lat1,lon1,lat2,lon2)
    {
        const rad = function(x) {return x*Math.PI/180;}
        var R = 6378.137; //Radio de la tierra en km 
        var dLat = rad( lat2 - lat1 );
        var dLong = rad( lon2 - lon1 );
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
        Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        //aquí obtienes la distancia en metros por la conversion 1Km =1000m
        var d = R * c * 1000; 
        return d ; 
    }

    const CalculateDistance = () => {

        let distancias =  SUCURSALES.map(sucursal => getDistanciaMetros(sucursal.lat,sucursal.lng, location.lat,location.lng));
        // let min = Math.min(...distancias.map(item => item.rest))
        // const minRest = Math.min(...distancias.map(({ rest }) => rest));
        var index = distancias.indexOf(Math.min(...distancias));
        console.log(index);
        setSucursal(SUCURSALES[index]);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>{user}</Text>
                {/* <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                /> */}
                {/* <Text >USUARIO: {user} </Text> */}
                {/* <ImageSelector onImage={handlePickImage} /> */}
                <LocationSelector onLocation={handlePickLocation} />

                {/* <Button
                    title="CALCULAR CERCANIA"
                    color={COLORS.JUNGLE}
                    onPress={CalculateDistance}
                /> */}
                
                
                <View style={styles.location}>
                {(location.lat !== 0)?
                    <View>
                        <Text> Localizacion Actual: {location.lat} - {location.lng}  </Text>
                        <Text> Sucursal mas Cercana: {sucursalCercana.name} </Text>
                    </View>
                :   <View>
                        <Text> AUN NO TENEMOS SU UBICACION </Text>
                        <Text> Presione el boton para conocer la sucursal mas cercana </Text>
                    </View>
                }
                </View>

                <View style={styles.location}>
                    <Text>Ya realizaste {cant_orders} compras con nuestro APP. </Text>
                    <Button
                        title="MIS COMPRAS"
                        color={COLORS.JUNGLE}
                        onPress={handleOrders}
                    />                 
                </View>

                                    <Button
                        title="DESLOGUEARSE"
                        color={COLORS.CLARET}
                        onPress={handleLogout}
                    />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    location: {
        marginBottom: 20,
    },
})

export default UserScreen