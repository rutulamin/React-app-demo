import React, { FC } from "react";
import { TextInput } from "react-native";
import globalStyle from "../Style";

const PlaceInput = (props: any) => (
    <TextInput placeholder='Place Name' style={globalStyle.textInput}
        value={props.value} onChangeText={props.onChange}>
    </TextInput>
);

export default PlaceInput;