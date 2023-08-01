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
    console.log({ email, password })
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
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
      <View style={{ marginBottom: 20 }}>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 130, height: 130, alignSelf: 'center' }}
        />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 25, marginBottom: 40 }}>
        Iniciar Seccion
      </Text>
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
      <Text style={{ marginVertical: 20, textAlign: 'center' }}>
        O continuar con
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F5F5F5',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/Facebook.png')}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F5F5F5',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/Google.png')}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F5F5F5',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/GitHub.png')}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
        </View>
      </View>
    </View>
  )
}
