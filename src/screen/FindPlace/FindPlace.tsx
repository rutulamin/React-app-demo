import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/placeList/PlaceList';

class FindPlace extends Component<any> {
    onPressHandlar = (key: any, name: any) => {
        this.props.navigation.push('PlaceDetail', {
            id: key,
            name: name,
        })
    }

    render() {
        return (
            <View>
                <PlaceList places={this.props.places} onPlaceSelected={this.onPressHandlar}></PlaceList>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        places: state.place.places
    }
}

export default connect(mapStateToProps, null)(FindPlace);