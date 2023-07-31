import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Avatar, List, Divider, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-rapi-ui'

import doctores from '../data/doctors.json'

export default function Historial() {
  const [doctors, setDoctors] = useState(doctores)
  const [search, setSearch] = useState('')
  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/mariela.png')}
              style={styles.userImage}
            />
            <View style={styles.userInfoText}>
              <Text style={styles.greeting}>Buen día</Text>
              <Text style={styles.userName}>Mariela Nina</Text>
            </View>
            <TouchableOpacity style={styles.notificationIcon}>
              <Icon name="bell" size={25} color="#DCDCDC" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartIcon}>
              <Icon name="heart" size={25} color="#DCDCDC" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            placeholder="Buscar"
            value={search}
            onChangeText={val => {
              setSearch(val)
            }}
            leftContent={<Icon name="search" size={15} color="gray" />}
          />
        </View>

        {doctors
          .filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map(doctor => (
            <View key={doctor.id} padding={5}>
              <List.Item
                title={doctor.name}
                description={doctor.specialty}
                left={() => (
                  <Avatar.Image
                    source={doctor.image}
                    Color={'#fff'}
                    size={60}
                  />
                )}
              />
              <Divider />
            </View>
          ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    paddingTop: 0,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoText: {
    flex: 1,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 16,
  },
  notificationIcon: {
    padding: 10,
  },
  heartIcon: {
    padding: 10,
  },

  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
})
