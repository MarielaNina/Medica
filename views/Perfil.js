import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { supabase } from '../lib/supabase'

const Perfil = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/mariela.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Mariela Nina</Text>
          <Text style={styles.phoneNumber}>Teléfono: +51 952286963</Text>
        </View>
        <View style={styles.menuContainer}>
          <MenuItem icon="account-edit" title="Editar perfil" />
          <MenuItem icon="bell" title="Notificaciones" />
          <MenuItem icon="lock" title="Seguridad" />
          <MenuItem icon="earth" title="Idioma" />
          <MenuItem icon="weather-night" title="Modo oscuro" />
          <MenuItem icon="help-circle" title="Centro de ayuda" />
          <MenuItem icon="account-multiple-plus" title="Invitar amigos" />
          <MenuItem
            icon="logout"
            title="Cerrar sesión"
            showArrow={false}
            onPress={() => supabase.auth.signOut()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const MenuItem = ({ icon, title, showArrow = true, onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemIcon}>
        <Icon name={icon} size={30} color="#666666" />
      </View>
      <Text style={styles.menuItemText}>{title}</Text>
      {showArrow && (
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="chevron-right" size={30} color="#666666" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  menuContainer: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemIcon: {
    marginRight: 20,
  },
  menuItemText: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
  },
  arrowButton: {
    marginLeft: 'auto',
  },
})

export default Perfil
