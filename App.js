import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';

import fondoImage from '../Examen_final_del_modulo/assets/fondo.jpg'; 

export default function App() {
  return (
    <ImageBackground source={fondoImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput 
            style={styles.input1}
            placeholder="Correo electrónico" 
          
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.input2}
          />
          <View style={styles.containerbotton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    
  },
  box:{
    backgroundColor: '#e2e2e2',
    width: '80%',
    padding: 16,
    borderRadius: 8,
    
  },
  input1: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
  },

  input2: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 8,
  },

  button: {
    backgroundColor: '#20acd8',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});