import React, { useState } from 'react'
import firebase from 'firebase/compat/app' //v8 compat import
import 'firebase/compat/auth' //v8 compat import
/* const auth = firebase.auth() */
import auth from '@react-native-firebase/auth'

/* import { collection } from '@react-native-firebase/firestore' */
import { useNavigation } from '@react-navigation/native'
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import styles from './styles'

export default function LoginScreen(/* { navigation } */) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  const onLoginPress = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)
      const { uid } = response.user
      const usersRef = firebase.firestore().collection('users')
      try {
        const firestoreDocument = await usersRef.doc(uid).get()
        if (!firestoreDocument.exists) {
          alert('User does not exist anymore')
          return
        }
        const user = firestoreDocument.data()
        navigate('Home', { user })
      } catch (error) {
        alert(error)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('./../../../assets/icon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Button
              onPress={() => onFooterLinkPress()}
              style={styles.footerLink}
              title="Sign Up"
            />
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
