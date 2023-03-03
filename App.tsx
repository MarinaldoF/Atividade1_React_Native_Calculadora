import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(Number(number1) + Number(number2));
  };

  const handleSubtraction = () => {
    setResult(Number(number1) - Number(number2));
  };

  const handleMultiplication = () => {
    setResult(Number(number1) * Number(number2));
  };

  const handleDivision = () => {
    setResult(Number(number1) / Number(number2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        style={styles.input}
        value={number1}
        onChangeText={value => setNumber1(value)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={number2}
        onChangeText={value => setNumber2(value)}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddition}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleMultiplication}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDivision}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#555',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  result: {
    fontSize: 24,
  },
});
