import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity, TextInput } from "react-native";

export default function Cards() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("1");

  const fetchCharacters = async (pageNumber: string) => {
    try {
      const response = await fetch( `https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const renderStatusDot = (status : any) => {
    let color;
    switch (status) {
      case "Dead":
        color = "red";
        break;
      case "Alive":
        color = "green";
        break;
      default:
        color = "yellow";
    }
    return <View style={[styles.statusDot, { backgroundColor: color }]} />;
  };

  const renderItem = ({ item } : any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.text}>Gênero: {item.gender}</Text>
        <View style={styles.statusRow}>
          {renderStatusDot(item.status)}
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#19adc7" />
        <Text>Carregando personagens...</Text>
      </View>
    );
  }

  const voltar = () => {
    router.push("/")
  }

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={voltar}>
        <Text style={styles.backBtn}>🔙</Text>
    </TouchableOpacity>
      <Text style={styles.title}>Lista de Cards</Text>
      <Text style={styles.subtitle}>Personagens de Rick and Morty</Text>
      <Text style={styles.subtitle2}>Insira uma pagina - pagina atual {page}</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="1/42"
        value={page}
        onChangeText={(value) => setPage(value)}
      />
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item : any) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    backBtn:{
        fontSize: 40,
        position: "absolute",
        top: -30,
        left: -10
    },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#06525f",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
    subtitle2: {
    fontSize: 12,
    textAlign: "center",
    color: "#076a91",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: "center",
    width: "35%",
    alignSelf: "center"
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 999,
    marginRight: 10,
  },
  cardInfo: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#06525f",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
