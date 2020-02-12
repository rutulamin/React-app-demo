import React, { FC, Component } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/action/placeAction';

class PlaceDetail extends Component<any>{
    id = this.props.navigation.state.params.id;
    selectedPlace = this.props.places.filter((e: any) => e.key === this.id)[0]; 

    onDeleteHandler = () => {
        this.props.onDelete(this.selectedPlace.key);
        this.props.navigation.pop();
    }

    render () {
        return (
            <View style={styles.container}>
                {   
                    this.selectedPlace ? 
                        (<View>
                            <Text style={styles.title}>{this.selectedPlace.placeName}</Text>
                            <Image style={styles.image} source={this.selectedPlace.image}></Image>
                        </View>) : null 
                }
                <View style={styles.buttonContainer}>
                    <Button title='Delete' color='red' onPress={this.onDeleteHandler}></Button>
                </View>
            </View>
            );
    }
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

const mapStateToProps = (state: any) => {
    return {
        places: state.place.places
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDelete: (placeId: any) => dispatch(deletePlace(placeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);