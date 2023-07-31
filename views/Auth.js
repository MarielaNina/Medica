import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Alert } from 'react-native'
import { TextInput, Button, CheckBox } from 'react-native-rapi-ui'
import { AntDesign } from '@expo/vector-icons'
export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkBox, setCheckBox] = useState(false)
  async function signInWithEmail() {
    if (checkBox) {
      console.log({ email, password })
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) Alert.alert(error.message)
    }
    Alert.alert('Acepte los terminos', 'asdasd')
  }
  return (
    <View
      style={{
        paddingHorizontal: 40,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <View style={{ marginBottom: 40 }}>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 130, height: 130, alignSelf: 'center' }}
        />
      </View>
      <Text style={{ textAlign: 'center' }}>Iniciar Seccion</Text>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <TextInput
          placeholder="Correo"
          borderWidth={0}
          borderRadius={15}
          backgroundColor={'#F5F5F5'}
          onChangeText={text => setEmail(text)}
          value={email}
          leftContent={<AntDesign name="user" size={24} color="gray" />}
        />
        <TextInput
          placeholder="Contrasena"
          borderRadius={15}
          borderWidth={0}
          backgroundColor={'#F5F5F5'}
          onChangeText={text => setPassword(text)}
          value={password}
          leftContent={<AntDesign name="lock" size={24} color="gray" />}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox value={checkBox} onValueChange={val => setCheckBox(val)} />
          <Text size="md" style={{ marginLeft: 10, color: 'gray' }}>
            Acepto los términos y condiciones
          </Text>
        </View>
        <Button
          text="Iniciar seccion"
          style={{ borderRadius: 50 }}
          onPress={() => signInWithEmail()}
        />
      </View>
      <Text>Auth</Text>
    </View>
  )
}
