import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, 
    Platform, TouchableNativeFeedback, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import globalStyle from '../../components/Style';
import { viewMode } from '../../../enum';
import { reduxForm, Field } from 'redux-form';
import DefaultTextInput from '../../components/UI/TextInput/TextInput';
import { required, email } from '../../../validation';
import { connect } from 'react-redux';
import { tryAuth } from '../../store/action/authAction';

const emailRequired = required('Email');

const passwordRequired = required('Password');

const validate = (values: any) => { 
  const errors: any = {}
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password not matched';
  }
  return errors;
}

class Auth extends Component<any>  {
    state = {
        viewMode : Dimensions.get('window').height > 500 ? viewMode.Portrait : viewMode.Landscape,
        loginMode: false,
    }

    submit = (values: any) => {
        // console.log('submitting form', values, this.props);
        this.props.doLogin({
            email: values.email,
            password: values.password,
        });
        this.props.navigation.replace('Tabs');
    }

    onDimensionChange = (dim: any) => {
        const viewChange = dim.window.height > 500 ? 
            viewMode.Portrait : viewMode.Landscape
        this.setState({
            viewMode: viewChange,
        });
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.onDimensionChange);
    }

    render() {
        const disabled = this.props.invalid || this.props.pristine ;
        Dimensions.addEventListener('change', this.onDimensionChange);
        const SwitchLoginContent = <View style={style.button}>
            <Text>{this.state.loginMode ? 'Switch To SignUp' : 'Switch To Login'}</Text>
        </View>;
        const LoginContent = <View style={[style.button, disabled ? style.disableButton : {} ]}>
            <Text>{this.state.loginMode ? 'Login' : 'SignUp'}</Text>
            </View>
        return (
            <ImageBackground style={style.backgroundImage} source={require('../../assets/background.jpg')}>    
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
                    <KeyboardAvoidingView behavior='height' style={style.container}>
                        { 
                            this.state.viewMode === viewMode.Portrait ? 
                                <Text style={globalStyle.heading}>Please {this.state.loginMode ? 'Login' : 'SignUp'}</Text> : null
                        }
                        {
                            Platform.OS === 'android' ? 
                                <TouchableNativeFeedback onPress={() => {
                                    this.setState({loginMode: !this.state.loginMode});
                                }}>
                                    {SwitchLoginContent}
                                </TouchableNativeFeedback> : 
                                <TouchableOpacity onPress={() => {
                                    this.setState({loginMode: !this.state.loginMode});
                                }}>
                                    {SwitchLoginContent}
                                </TouchableOpacity>
                        }
                        <View style={style.inputContainer}>
                            <Field placeholder="Enter E-mail" 
                                    name='email' 
                                    placeholderTextColor='black' 
                                    component={DefaultTextInput} 
                                    style={style.input} 
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                    autoCompleteType='email'
                                    validate={[emailRequired, email]}>
                            </Field>
                            <View style={ this.state.viewMode === viewMode.Portrait ? style.portraitPasswordContainer : style.landscapePasswordContainer}>
                                <Field placeholder="Password" 
                                        name='password' 
                                        placeholderTextColor='black' 
                                        component={DefaultTextInput} 
                                        validate={passwordRequired}
                                        secureTextEntry={true}
                                        style={[style.input, this.state.viewMode === viewMode.Landscape && !this.state.loginMode ? style.landscapeInputPassword : style.portraitInputPassword]}>
                                </Field>
                                {
                                    !this.state.loginMode ? <Field placeholder="Confirm Password" 
                                        name='confirmPassword' 
                                        placeholderTextColor='black' 
                                        component={DefaultTextInput} 
                                        secureTextEntry={true}
                                        style={[style.input, this.state.viewMode === viewMode.Portrait ? style.portraitInputPassword : style.landscapeInputPassword]}>
                                    </Field> : null
                                }
                                
                            </View>
                        </View>
                        {
                            Platform.OS === 'android' ? 
                                <TouchableNativeFeedback disabled={disabled} onPress={this.props.handleSubmit(this.submit)}>
                                    {LoginContent}
                                </TouchableNativeFeedback> : 
                                <TouchableOpacity disabled={disabled} onPress={this.props.handleSubmit(this.submit)}>
                                    {LoginContent}
                                </TouchableOpacity>
                        }
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ImageBackground>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        doLogin: (authData: any) => dispatch(tryAuth(authData)),
    }
}

const connectAuth = connect(null, mapDispatchToProps)(Auth);

export default reduxForm({
    form: 'signUp', // a unique identifier for this form
    validate
  })(connectAuth);

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: '90%',
    },
    portraitInputPassword: {
        width: '100%'
    },
    landscapeInputPassword: {
        width: '47%'
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "center"
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input: {
        backgroundColor: '#eee',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    button: {
        backgroundColor: 'lightblue',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    disableButton: {
        backgroundColor: '#bbb'
    }
})