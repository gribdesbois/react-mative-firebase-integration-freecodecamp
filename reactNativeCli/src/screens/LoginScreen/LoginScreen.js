import React, { useState } from 'react'
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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigation()

  const onFooterLinkPress = () => {
    navigate('Registration')
  }

  const onLoginPress = () => {}

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
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Button
              onPress={() => onFooterLinkPress}
              style={styles.footerLink}
              title="Sign Up"
            />
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
