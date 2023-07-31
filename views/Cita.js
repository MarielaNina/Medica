import React from 'react'
import { StatusBar, View, StyleSheet, Image, ScrollView } from 'react-native'
import { Button, Text, Divider } from 'react-native-paper'
import { Calendar } from 'react-native-calendars'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

export default function Cita() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    'Selecciona una especialidad'
  )
  const daySpacing = 4

  const handleSpecialtyChange = itemValue => {
    setSelectedSpecialty(itemValue)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.selectSpecialty}>
        <Text style={styles.specialtyText}>Selecciona una especialidad:</Text>
        <Picker
          selectedValue={selectedSpecialty}
          style={styles.picker}
          onValueChange={itemValue => handleSpecialtyChange(itemValue)}
        >
          <Picker.Item
            label="Selecciona una especialidad"
            value="Selecciona una especialidad"
          />
          <Picker.Item label="Odontología " value="Odontología" />
          <Picker.Item label="Pediatría" value="Pediatría" />
          <Picker.Item label="Psicología " value="Psicología" />
          <Picker.Item label="Dermatología" value="Dermatología" />
          {/* Agrega más opciones de especialidades aquí */}
        </Picker>
      </View>
      <View style={styles.doctorInfo} paddingVertical={10}>
        <Image
          source={require('../assets/marco.jpg')}
          style={styles.doctorImage}
        />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>Marco Nina</Text>
          <Text style={styles.doctorSpecialty}>Pediatra</Text>
        </View>
      </View>
      <View style={styles.calendarContainer} paddingVertical={20}>
        {/* Componente de calendario con el estilo modificado */}
        <Calendar
          style={styles.calendar}
          theme={{
            // Estilos del texto de los días
            textDayFontSize: 10, // Tamaño del texto de los días
            textDayFontWeight: '100', // Grosor del texto de los días
            textDayHeaderFontSize: 12, // Tamaño del texto del encabezado de los días (D, L, M, ...)
            textMonthFontSize: 10, // Tamaño del texto del mes
          }}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.timeSlots} paddingTop={18}>
        {/* Aquí puedes colocar los botones con horas disponibles */}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          8:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          9:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          10:00
        </Button>
        {/* Agrega más botones de horas disponibles */}
      </View>
      <View style={styles.moreButtonsContainer}>
        {/* Aquí puedes colocar más botones */}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          11:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          12:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          13:00
        </Button>
        {/* Agrega más botones */}
      </View>
      <View style={styles.moreButtonsContainer}>
        {/* Aquí puedes colocar más botones */}
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          14:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          15:00
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          16:00
        </Button>
        {/* Agrega más botones */}
      </View>
      <Button
        style={styles.registerButton}
        mode="contained"
        labelStyle={styles.buttonText2}
      >
        Registrar Cita
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  selectSpecialty: {
    marginTop: 5, // Reduce el espacio entre el componente selectSpecialty y el texto specialtyText
  },
  specialtyText: {
    fontSize: 14,
    marginBottom: 0, // Reduce el espacio entre el texto y el componente Picker
  },
  picker: {
    height: 40,
    backgroundColor: '#f1f1f1',
  },
  calendarContainer: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    width: '97%', // Ajusta el ancho del calendario
    aspectRatio: 1, // Mantén el aspecto cuadrado para hacerlo más corto de altura
    backgroundColor: '#f1f1f1', // O cualquier otro color de fondo deseado
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  doctorDetails: {
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 16,
  },
  divider: {
    marginVertical: 5,
  },
  button: {
    borderWidth: 2,
    color: '#246BFD',
    borderColor: '#246BFD',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#246BFD',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  timeSlots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  moreButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  registerButton: {
    paddingVertical: 10,
    marginBottom: 50,
    backgroundColor: '#246BFD',
  },
})
