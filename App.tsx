import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlaceInput from './src/components/placeInput/PlaceInput';
import PlaceList from './src/components/placeList/PlaceList';
import PlaceDetail from './src/components/placeDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, selectPlace, closePlace, deletePlace } from './src/store/action/placeAction';

const App: React.FC = (props: any) => {
	function addPlaces(data: any) {
		props.addPlace(data);
	}

	function onPlaceSelect(key: any) {
		props.selectPlace(key);
	}

	function onCloseModel() {
		props.closePlace();
	}

	function onDeletePlace (key: any) {
		props.deletePlace(key);
	}
	
	return (
		<View style={style.container}>
			<PlaceInput onAdded={addPlaces}></PlaceInput>
			<PlaceList places={props.places} onPlaceSelected={onPlaceSelect}></PlaceList>
			<PlaceDetail selectedPlace={props.selectedPlace}
				onModelClosed={onCloseModel} onDelete={onDeletePlace}></PlaceDetail>
		</View>
	);
  
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 20,
		flexWrap: 'wrap',
	},
});

const mapStateToProps = (state: any) => {
    return {
		places: state.place.places,
		selectedPlace: state.place.selectedPlace
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
		addPlace: (placeData: any) => dispatch(addPlace(placeData)),
		selectPlace: (placeId: any) => dispatch(selectPlace(placeId)),
		closePlace: () => dispatch(closePlace()),
		deletePlace: (placeId: any) => dispatch(deletePlace(placeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
