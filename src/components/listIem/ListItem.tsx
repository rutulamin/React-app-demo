import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

class ListItem extends Component<any> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.place.image}></Image>
                <Text style={styles.title}>{this.props.place.placeName}</Text>
            </View>
            );
    }
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 10,
        width: '100%',
        backgroundColor: 'black',
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        paddingTop: 10,
        paddingLeft: 10,
        color: 'white',
        fontSize: 20,
    }
});

export default ListItem;