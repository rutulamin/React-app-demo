import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ListItem from '../listIem/ListItem';

const PlaceList = (props: any) => {
    return (
        <FlatList style={styles.container} data={props.places} renderItem={(info: any) => (
            <TouchableOpacity onPress={() => props.onPlaceSelected(info.item.key)}>
                <ListItem place={info.item} 
                    onPlaceSelected={props.onPlaceSelected}></ListItem>
            </TouchableOpacity>
        )}/>
        );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
    }
});

export default PlaceList;