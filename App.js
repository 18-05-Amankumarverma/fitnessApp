import { StyleSheet, Text, Button, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.mainBody}>
        <Text style={styles.mainHeading}>What is your name?</Text>
        <View style={styles.container}>
          <Image
            source={require('./assets/fitness.png')}  // Replace with your image source
            style={styles.image}
            resizeMode="contain"  // Adjust the resizeMode as per your requirement
          />
        </View>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}  // Adjust as needed, or remove to allow unlimited lines
          placeholder="Type your text here..."
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainBody: {
    paddingTop: 130,
    padding: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#192026"
  },
  mainHeading: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 160,
    color: "#fff",
    fontFamily: ''
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,  // Adjust the width and height as per your image's aspect ratio
    height: 400,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 4,
    paddingLeft: 15,
    fontSize: 16,
    height: 50,
    width: "85%",
    marginTop: 170,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "85%",
    alignItems: 'center',
    marginBottom: 100
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
