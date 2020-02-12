import React, { Component } from "react"
import { View, StyleSheet, Button, PermissionsAndroid } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default class PickLocation extends Component<any> {
    state = {
        initialRegion: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        marker: false,
    };
    public map: any;

    onSelectLocation = () => {
        this.props.onChangeLocation({
            latitude: this.state.initialRegion.latitude,
            longitude: this.state.initialRegion.longitude,
        });
    }

    locationHandler = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(async(res) => {
                    await this.setState({
                        ...this.state,
                        initialRegion: {
                            ...this.state.initialRegion,
                            latitude: res.coords.latitude,
                            longitude: res.coords.longitude,
                        },
                        marker: true,
                    });
                    this.map.animateToRegion({
                        ...this.state.initialRegion,
                    });
                    this.onSelectLocation();
                }, err => {
                    console.log(err);
                },{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })
            } else {
                console.log('GPS permission denied');
            }
        } catch (err) {
            console.log(err);
        }
    }

    getLocation = async (event: any) => {
        await this.setState({
            ...this.state,
            initialRegion: {
                ...this.state.initialRegion,
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude,
            },
            marker: true,
        });
        this.map.animateToRegion({
            ...this.state.initialRegion,
        });
        this.onSelectLocation();
    }

    render() {
        return (
            <View style={style.container}>
                <MapView initialRegion={this.state.initialRegion} style={style.preview}
                onPress={this.getLocation} ref={ref => this.map = ref}>
                    {
                        this.state.marker ? <Marker coordinate={this.state.initialRegion}>
                        </Marker> : null
                    }
                    
                </MapView>
                <View style={style.button}>
                    <Button title="Locate Me" onPress={this.locationHandler}></Button>
                </View>
            </View>
        );
    }
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: "center"
    },
    preview: {
        width: '100%',
        height: 250,
    },
    button: {
        margin: 10,
    }
})