import { StatusBar, ActivityIndicator, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function Ventana1() {
  const iconSize = 50 // Tamaño del icono, puedes ajustarlo según tus necesidades
  const titleFontSize = 40 // Tamaño del texto del título, puedes ajustarlo según tus necesidades

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/icon.png')}
            style={[styles.icon, { width: iconSize, height: iconSize }]}
          />
          <Text style={[styles.title, { fontSize: titleFontSize }]}>
            MEDICA
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
  },
  footer: {
    marginBottom: 120,
  },
})
