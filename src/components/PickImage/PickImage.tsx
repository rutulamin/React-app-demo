import React, { Component } from "react"
import { View, StyleSheet, Button, Image, PermissionsAndroid } from "react-native";
import ImagePicker from 'react-native-image-picker';

export default class PickImage extends Component {
    state ={
        imageSource: require('../../assets/placeholder-image.png'),
    };

    onSelectImage = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            ]
            );
            console.log(granted);
            if (granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED &&
                granted["android.permission.WRITE_EXTERNAL_STORAGE"] === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.showImagePicker({
                    title: 'Pick an Image',
                }, res => {
                    if (res.didCancel) {
                        console.log('canceled');
                    } else if (res.error) {
                        console.log('error', res.error);
                    } else {
                        console.log(res);
                        this.setState({
                            ...this.state,
                            imageSource: { uri : res.uri}
                        });
                    }
                })
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.preview}>
                    <Image style={style.image} source={this.state.imageSource}></Image>
                </View>
                <View style={style.button}>
                    <Button title="Pick Image" onPress={this.onSelectImage}></Button>
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
        width: '80%',
        height: 150,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        margin: 10,
    }
})