import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  return (
    <View style={{ display: "flex" }}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 80, height: 80, }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6388/6388307.png",
            }}
          />
          <View style={{ flex:1}}>
            <Text style={styles.textod}>Bem vindo</Text>
            <Text style={styles.texto}>João Guilherme</Text>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder=" procure por...                                              🔍"
            keyboardType="text"
          />
        </View>
      </View>
      <View style={styles.acima}>
        <Text style={{ fontWeight: 'bold', paddingLeft:5, fontSize:20}}> Categorias </Text>
        <Text style={{ fontWeight: 'bold', paddingRight:5, fontSize:20 }}>Mostrar tudo</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7381/7381105.png",
            }}
          />
          <Text>Consultas</Text>
        </View>
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPRu0bsoPoLIdNo-N5xAgTsKaryYT-RN4bA&s.png",
            }}
          />
          <Text>Dentista</Text>
        </View>
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3974/3974808.png",
            }}
          />
          <Text>Cardiologista</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4320/4320333.png",
            }}
          />
          <Text>Hospital</Text>
        </View>
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrhdy4SoehSmweyUJekOQ1dnC8XyTsvdDrw&s.png",
            }}
          />
          <Text>Emergência</Text>
        </View>
        <View style={styles.cartaointer}>
          <Image
            style={styles.cartao}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5809/5809785.png",
            }}
          />
          <Text>Laboratório</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 20, fontSize:20 }}>Melhores médicos</Text>
        <View style={styles.destaque}>
          <Image
            style={styles.pessoaImg}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6388/6388307.png",
            }}
          />
          <View style={styles.medico}>
            <Text style={styles.nome}>Pedro</Text>
            <Text style={styles.cargo}>Consultor - Cardiologia</Text>
            <Text style={styles.avaliacao}>⭐3,1 (57 avaliações)</Text>
          </View>
        </View>
        <View style={styles.destaqued}>
          <Image
            style={styles.pessoaImg}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6388/6388307.png",
            }}
          />
          <View style={styles.medico}>
            <Text style={styles.nome}> Dra. Joana</Text>
            <Text style={styles.cargo}>Consultora - Fisioterapia</Text>
            <Text style={styles.avaliacao}>⭐4,9 (60 avaliações)</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:"column", marginLeft:70}}>
            <Image
            style={styles.Icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
            }}
          />
          <Text style={{marginLeft:10, color:'#fff'}}>Home</Text>
          </View>
          <View style={{flexDirection:"column", marginLeft:20}}>
            <Image
            style={styles.Icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
            }}
          />
          <Text style={{ color:'#fff'}}>Médicos</Text>
          </View>
          <View style={{flexDirection:"column", marginLeft:20}}>
            <Image
            style={styles.Icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/990/990060.png",
            }}
          />
          <Text style={{ color:'#fff'}}>Consultas</Text>
          </View>
          <View style={{flexDirection:"column", marginLeft:20}}>
            <Image
            style={styles.Icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png",
            }}
          />
          <Text style={{marginLeft:12, color:'#fff'}}>Perfil</Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1b69df",
    alignItems:"flex-start",
    width: "100%",
    height: 170,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingRight:70,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "#000000",
    borderRadius: 15,
    backgroundColor: "#f5f5ee",
    marginBottom: 5,
    marginTop: 20,
    marginLeft:60,
  },
  acima:{
    flexDirection: "row", 
    justifyContent: "space-between",
    fontWeight: 'bold',
    marginTop:20,
  },
  texto: {
    marginTop: 5,
    fontSize: 18,
    color: "#f5f5ee",
  },
  textod: {
    marginTop: 5,
    fontSize: 18,
    color: "#f5f5ee",
    fontWeight: 'bold'
  },
  cartao: {
    width: 100,
    height:100,
  },
  cartaointer: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 1,
  },
  pessoaImg: {
    width: 60,
    height: 60,
  },
  medico: {
    marginLeft: 10,

  },
  nome: {
    fontWeight: 'bold',
    fontSize:18,
  },
  avaliacao: {
    fontSize: 15,
    opacity: 0.6,
  },
  cargo:{
    fontSize:18,
  },
  destaque: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0eded',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  destaqued: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0eded',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  footer: {
    marginTop:70,
    flexDirection: 'row',
    backgroundColor: '#1b69df',
    width: "100%",
    height: 80,
  },
  Icon:{
    width:35,
    height:35,
    marginTop:10,
    marginLeft:10
  }
});

