import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList, SectionList } from 'react-native';
import pokemonList from "./data.json"
import groupedPokemonList from "./grouped-data.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* <ScrollView style={styles.scrollView}>
      {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })
      }
    </ScrollView> */}
    <View style={styles.scrollView}>
    {/* <FlatList 
      data={pokemonList}
      renderItem={ ({ item }) => {
        console.log(item.id);
        return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
      }}
      keyExtractor={(item) => item.id.toString()}
      //horizontal
      ItemSeparatorComponent={<View style={{ height:16 }} />}
      ListEmptyComponent={<Text>No items found</Text>}
      ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
      ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
    /> */}

    <SectionList 
      sections={groupedPokemonList}
      renderItem={( {item} ) => {
        return (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        );
      }}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeaderText}>{section.type}</Text>
      )}
      ItemSeparatorComponent={() => <View style={{ height:16 }} />}
      SectionSeparatorComponent={() => <View style={{ height:16 }} />}
    />
    </View>
    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  headerText: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#f555",
    marginTop: 10,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  }
});
