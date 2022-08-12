import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {Formik} from 'formik';
import * as Yup from 'yup';

const isIOS = Platform.OS === 'ios';

const COLORS = {primary: '#3C2064', white: '#fff'};
const radioButtonsData = [
  {
    id: 'Otp',
    label: 'OTP',
    value: 'OTP',
    selected: true,
  },
  {
    id: 'Password',
    label: 'Password',
    value: 'PASSWORD',
    selected: false,
  },
];

const OtpSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, 'Mobile number must be 10 digits long')
    .max(10, 'Mobile number must be 10 digits long')
    .matches(/^((\+91)?|91)?[789][0-9]{9}/, 'mobile number is not valid')
    .required('Please enter mobile number'),
});

const PasswordSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, 'Mobile number must be 10 digits long')
    .max(10, 'Mobile number must be 10 digits long')
    .matches(/^((\+91)?|91)?[789][0-9]{9}/, 'mobile number is not valid')
    .required('Please enter mobile number'),
  password: Yup.string().required('Please enter password'),
});

const SignIn = ({navigation}) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons([...radioButtonsArray]);
  }

  const isPasswordSelected = radioButtons[1]?.selected;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} style={styles.flex}>
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : undefined}
          style={{flex: 1}}>
          <>
            <Image
              source={{
                uri: 'https://edukaan.home.tatamotors/assets/images/e_dukaan_header_logo.webp',
              }}
              resizeMode="contain"
              style={styles.signInImage}
            />
            <View style={styles.cardContainer}>
              <Text style={styles.baseText}>Welcome Back</Text>
              <Text style={styles.subtitle}>Sign in to continue</Text>

              <View style={styles.radioContainer}>
                <Text style={styles.signInText}>Sign in by</Text>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButton}
                  layout="row"
                />
              </View>

              <Formik
                enableReinitialize={true}
                initialValues={
                  isPasswordSelected ? {mobile: '', password: ''} : {mobile: ''}
                }
                validateOnBlur={true}
                validateOnChange={true}
                validationSchema={
                  isPasswordSelected ? PasswordSchema : OtpSchema
                }
                onSubmit={(values) => {
                  console.log(values);
                }}>
                {({
                  handleChange,
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  dirty,
                }) => (
                  <>
                    <View style={[styles.textInputContainer, styles.vertical]}>
                      <Text style={styles.inputLabelText}>Mobile number</Text>
                      <TextInput
                        placeholder="Enter mobile number"
                        placeholderTextColor="gray"
                        keyboardType="phone-pad"
                        maxLength={10}
                        value={values.mobile}
                        onChangeText={handleChange('mobile')}
                        onBlur={handleBlur('mobile')}
                        style={[
                          styles.textInput,
                          touched.mobile && errors.mobile
                            ? styles.errorStyle
                            : {},
                        ]}
                      />
                      {touched.mobile && errors.mobile ? (
                        <Text style={styles.errorText}>{errors.mobile}</Text>
                      ) : null}
                    </View>

                    {isPasswordSelected && (
                      <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabelText}>Password</Text>
                        <TextInput
                          placeholder="Enter password"
                          placeholderTextColor="gray"
                          secureTextEntry={true}
                          value={values.password}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          style={[
                            styles.textInput,
                            touched.password && errors.password
                              ? styles.errorStyle
                              : {},
                          ]}
                        />
                        {touched.password && errors.password ? (
                          <Text style={styles.errorText}>
                            {errors.password}
                          </Text>
                        ) : null}
                      </View>
                    )}

                    <View>
                      <Pressable
                        style={[
                          styles.button,
                          !isValid || !dirty ? styles.disbaledStyle : {},
                        ]}
                        disabled={!isValid || !dirty}
                        onPress={() => {
                          Keyboard.dismiss();
                          handleSubmit();
                        }}>
                        <Text style={styles.buttonText}>SEND OTP</Text>
                      </Pressable>
                    </View>
                  </>
                )}
              </Formik>

              <View
                style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
                <View style={{flex: 1}}>
                  <View style={{alignSelf: 'stretch'}}>
                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'black',
                        fontSize: 15,
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}>
                      Not Registered ?
                    </Text>
                  </View>
                </View>
                <View style={{borderLeftWidth: 1, borderLeftColor: 'white'}} />
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    style={{alignSelf: 'stretch'}}
                    onPress={() => {}}>
                    <Text
                      style={{
                        color: '#0d6efd',
                        fontSize: 15,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                      }}>
                      Click here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1}}>
                  <View style={{alignSelf: 'stretch'}}>
                    <Text
                      style={{
                        textAlign: 'right',
                        color: 'black',
                        fontSize: 15,
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}>
                      Go back to
                    </Text>
                  </View>
                </View>
                <View style={{borderLeftWidth: 1, borderLeftColor: 'white'}} />
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    style={{alignSelf: 'stretch'}}
                    onPress={() => navigation.replace('HomeScreen')}>
                    <Text
                      style={{
                        color: '#0d6efd',
                        fontSize: 15,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 5,
                      }}>
                      Homepage
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginTop: 20, marginLeft: 70, marginRight: 70}}>
                <Text style={{color: '#2596be'}}>
                  Login made Easy - You may now use your Fleet Edge mobile
                  number to login to eDukaan !
                </Text>
              </View>
            </View>
          </>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  flex: {
    flex: 1,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 50,
    paddingBottom: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 17,
    flexShrink: 1,
    marginLeft: 30,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 30,
    marginTop: 10,
    color: 'gray',
  },
  radioContainer: {
    flexDirection: 'row',
    marginLeft: '10%',
    marginTop: 10,
  },
  innerText: {
    color: 'red',
  },
  signInImage: {
    marginTop: 40,
    marginBottom: 10,
    height: 80,
  },
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  signInText: {
    color: COLORS.primary,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInputContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  inputLabelText: {
    fontSize: 15,
    marginTop: 5,
  },
  vertical: {marginTop: 25},
  textInput: {
    paddingVertical: 10,
    color: 'gray',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
  },
  errorStyle: {
    borderBottomColor: '#fc0a0a',
  },
  errorText: {
    fontSize: 13,
    color: '#fc0a0a',
    marginTop: 1,
  },
  button: {
    marginTop: 50,
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: '30%',
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    alignSelf: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
  disbaledStyle: {
    backgroundColor: '#c5ced4',
  },
});
export default SignIn;
