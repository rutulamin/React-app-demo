import React, { Component } from "react";
import { View, Button, TextInput, Alert, StyleSheet } from "react-native";

class PlaceInput extends Component<any> {
    state = {
    	placeName: '',
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
        });
    }
     
    render() {
        return(
            <View style={style.container}>
                <TextInput value={this.state.placeName} placeholder='Enter Items' 
                    onChangeText={this.changeHandler} 
                    style={style.textInput}>
                </TextInput>
                <View style={style.button}>
                    <Button title='Button' onPress={this.submitHandler}>
                    </Button>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textInput: {
      width: '70%',
      borderBottomWidth: 1, 
      borderBottomColor: 'black'
    },
    button: {
      width: '30%',
      padding: 10
    }
  });

export default PlaceInput;