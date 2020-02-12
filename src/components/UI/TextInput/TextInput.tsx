import React, { FC } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const DefaultTextInput: FC = ({ input: { onChange, ...restInput }, meta: { submitFailed, error }, ...propsStyle}: any) => {
    Object.defineProperty(propsStyle, 'style', { enumerable: false });
    // console.log(...propsStyle.style);
    return (
            // <View style={style.container}>
                <TextInput style={[style.input, propsStyle.style, 
                    submitFailed && error && style.invalidInput]} 
                    onChangeText={onChange} { ...restInput} {...propsStyle}  />
            //     {
            //         submitFailed && error && 
            //         (<Text>
            //             {error}
            //         </Text>)
            //     }
            // </View>
    );
}

const style = StyleSheet.create({
    input: {
        width: '100%',
        padding: 10,
        marginTop:5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#1F1F1F',
    },
    invalidInput: {
        borderColor: 'red',
        backgroundColor: '#ffbbaa'
    }
});

export default DefaultTextInput;