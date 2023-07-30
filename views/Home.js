import { StatusBar, ActivityIndicator, Image, TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
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
      <Image source={require('../assets/doctores.jpg')} style={styles.doctorsImage} />
      <Text style={styles.sectionTitle}>Especialidades Médicas</Text>
      <View style={styles.specialties}>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="dental" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Odontología</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="apple" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Nutrición</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="heart" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Triaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="child" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Pediatría</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="stethoscope" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="medkit" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Obstetricia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="user-md" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Cirugía</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="user-md" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Psicología</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialtyButton}>
          <Icon name="heartbeat" size={22} color="#246BFD" />
          <Text style={styles.specialtyLabel}>Cardiología</Text>
        </TouchableOpacity>
        {/* Agrega más botones de especialidades aquí */}
      </View>
      <Text style={styles.sectionTitle}>Top Doctors</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Top Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dentista</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
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
  doctorsImage: {
    marginTop: 20,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialties: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    
  },
  specialtyButton: {
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
    
    
  },
  specialtyLabel: {
    marginTop: 2,
    fontSize: 13,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#246BFD',


  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#246BFD',
  },
});
