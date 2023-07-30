import React, { useState } from 'react';
import { StatusBar, StyleSheet ,Image, TextInput, Text, View, TouchableOpacity} from 'react-native';
import { Avatar, List, Divider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Historial(){
    const iconSize = 50; // Tamaño del icono, puedes ajustarlo según tus necesidades
    const titleFontSize = 40; // Tamaño del texto del título, puedes ajustarlo según tus necesidades
    const [isStarClicked, setIsStarClicked] = useState(false);

    const handleStarClick = () => {
      setIsStarClicked(!isStarClicked);
    };
  
    const doctors = [
      {
        id: 1,
        name: 'Dr. John Ramirez',
        specialty: 'Cardiologo',
        image: require('../assets/doctor3.jpg'),
      },
      {
        id: 2,
        name: 'Dr. Marco Nina ',
        specialty: 'Pediatra',
        image: require('../assets/marco.jpg'),
        
      },
      {
        id: 3,
        name: 'Dr. Peter Parker',
        specialty: 'Nutricionista',
        image: require('../assets/peter.jpg'),
      },
      {
        id: 4,
        name: 'Dr. Diego Montenegro ',
        specialty: 'Psicologo',
        image: require('../assets/doctor4.jpg'),
      },
      // Agrega aquí más objetos de doctores
    ];
  
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/mariela.png')} style={styles.userImage} />
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
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          placeholder="Buscar"
          style={styles.searchText}
          editable={false}
          pointerEvents="none"
        />
      </View>

        {doctors.map((doctor) => (
          <View key={doctor.id} padding={5}>
            <List.Item
              title={doctor.name}
              description={doctor.specialty}
              left={() => <Avatar.Image source={doctor.image} Color={'#fff'} size={80}  />}
              right={() => (
                <Button 
                  icon={() => (
                    <Icon 
                      name={"star"}
                      size={25}
                      color={isStarClicked ? 'gold' : 'rgba(128, 128, 128, 0.6)'}
                    />
                  )}
                  onPress={handleStarClick}
                />
              )}
            />
            <Divider />
            
          </View>
          
        ))}
      </View>
    );
  };
  
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
    searchBar: {
      marginTop: 20,
      height: 40,
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchText: {
      fontSize: 16,
      color: '#000',
      flex: 1,
    },
  });
  