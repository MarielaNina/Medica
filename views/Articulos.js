import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

const articlesData = [
  {
    id: 1,
    title: 'Tratamiento de enfermedades cardiovasculares',
    category: 'Salud',
    shortDescription:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
    image: require('../assets/corazon.webp'),
    date: '25 de Julio 2023',
  },
  {
    id: 2,
    title: '¿Cómo eliminar la ANEMIA por completo?',
    category: 'Salud',
    shortDescription:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
    image: require('../assets/alimentos.jpg'),
    date: '15 de Julio 2023',
  },
  {
    id: 3,
    title: 'Efectos secundarios del Covid-19',
    category: 'Salud',
    shortDescription:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
    image: require('../assets/covid.jpg'),
    date: '10 de Julio 2023',
  },
  {
    id: 4,
    title: 'Alimentos para una dieta equilibrada',
    category: 'Lifestyle',
    shortDescription:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
    image: require('../assets/comida.jpg'),
    date: '5 de Julio 2023',
  },
  // Agregar más artículos aquí
]

const Articulos = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tendencias}>Tendencias</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {articlesData.map(article => (
            <View key={article.id} style={styles.articleContainer1}>
              <Image
                source={article.image}
                style={styles.articleImage}
                resizeMode="cover"
              />
              <Text style={styles.articleTitle}>{article.title}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Articles</Text>
          <View style={styles.categoryButtons}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Nuevos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Salud</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Lifestyle</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>
          {articlesData.map(article => (
            <View
              key={article.id}
              style={styles.articleContainer}
              paddingHorizontal={4}
              paddingVertical={4}
            >
              <Image
                source={article.image}
                style={styles.articleImage}
                resizeMode="cover"
                borderRadius={10}
              />
              <View style={styles.articleText}>
                <View style={styles.articleDetails}>
                  <Text style={styles.articleDate}>{article.date}</Text>
                  <Text style={styles.articleCategory}>{article.category}</Text>
                </View>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleParagraph}>
                  {article.shortDescription}
                </Text>
                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Leer</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  tendencias: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  seeAll: {
    fontSize: 16,
    color: '#1976D2',
  },
  articleContainer: {
    backgroundColor: 'white',
    paddingBottom: 15,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  articleContainer1: {
    width: 200,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 150,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  categoryContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  categoryButtons: {
    flexDirection: 'row',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#1976D2',
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#1976D2',
  },
  articleText: {
    width: '100%',
    paddingHorizontal: 20,
  },
  articleDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    paddingBottom: 4,
  },
  articleDate: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: 8,
  },
  articleCategory: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  readButton: {
    backgroundColor: '#1976D2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-end',
  },
  readButtonText: {
    fontSize: 16,
    color: 'white',
  },
})

export default Articulos
