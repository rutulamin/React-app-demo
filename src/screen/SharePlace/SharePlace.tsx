import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import PlaceInput from '../../components/placeInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/action/placeAction';
import globalStyle from '../../components/Style';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlace extends Component<any>  {
    state = {
        placeName: '',
        placeLocation: null,
    };

    changeHandler = (event: any) => {
        this.setState({
            placeName: event
        });
    }

    submitHandler = () => {
        this.props.onAdded({
            key: Math.random().toString(),
            placeName: this.state.placeName,
            image: require('../../assets/beautiful-place.jpg'),
            location: this.state.placeLocation,
        });
    }

    getLocation = async (data: any) => {
        await this.setState({
            ...this.state,
            placeLocation: data,
        });
    }
    
    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <Text style={globalStyle.heading}>Share place with us!</Text>
                    <PickImage></PickImage>
                    <PickLocation onChangeLocation={this.getLocation}></PickLocation>
                    <PlaceInput value={this.state.placeName} onChange={this.changeHandler}></PlaceInput>
                    <View style={style.button}> 
                        <Button title="Share the Place!" onPress={this.submitHandler} 
                            disabled={this.state.placeLocation === null || this.state.placeName === ''}>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        margin: 10,
    }  
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAdded: (placeName: any) => dispatch(addPlace(placeName)),
    }
}

export default connect(null, mapDispatchToProps)(SharePlace);
