import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

const PlaceDetail = (props: any) => {
    return (
        <View style={styles.container}>
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
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
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