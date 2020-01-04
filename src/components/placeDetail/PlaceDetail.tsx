import React from 'react';
import { View, Modal, Button, Image, Text, StyleSheet } from 'react-native';

const PlaceDetail = (props: any) => {
    return (
        <Modal visible={props.selectedPlace !== null} animationType='slide'>
            <View style={styles.modelContainer}>
                {   
                    props.selectedPlace ? 
                        (<View>
                            <Text style={styles.title}>{props.selectedPlace.placeName}</Text>
                            <Image style={styles.image} source={props.selectedPlace.image}></Image>
                        </View>) : null 
                }
                <View style={styles.buttonContainer}>
                    <Button title='Delete' color='red' onPress={() => props.onDelete(props.selectedPlace.key)}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Close' onPress={props.onModelClosed}></Button>
                </View>
            </View>
        </Modal>
        );
};

const styles = StyleSheet.create({
    modelContainer: {
        margin: 20
    },
    image: {
        height: 350,
        width: '100%',
        marginTop: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default PlaceDetail;