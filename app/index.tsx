// importing things from react, including state which we can use to bind a variable to change 
import React, { useState } from 'react';
// importing things to use in my some view from react native
import { Text, View, ImageBackground, TouchableOpacity, Button} from 'react-native';
// importing my styles from my styles.js file
import styles from '@/app/styles'; 
// name of the function, takes no parameters
const App = () => {
  // State variables that will control the background image and the button text
  const [backgroundImage, setBackgroundImage] = useState(require('@/assets/images/cat.png')); // Initial image is cat.png
  const [buttonText, setButtonText] = useState('PLEASE FEED ME 😿'); // Initial button text, will be changed upon button press
  const [counter, setCounter] = useState(0);
  const [maxPresses, setMaxPresses] = useState(false); // State to track if the button should disappear

  // Function for button presses, depending on how much the button gets pressed, different things will happen!
  const increment = () => {
    if(counter > 0.1) {
      setBackgroundImage(require('@/assets/images/greencat.png')); // Change image to greencat.png
      setButtonText('THANK YOU!🔥'); // Change button text after it's pressed
    }
    if(counter > 0.2) {
      setButtonText('Ok im full right about meow...😸 '); // Change button text after it's pressed
    }
    if(counter > 0.3) {
      setButtonText('ong we eating good 😈'); // Change button text after it's pressed
      setBackgroundImage(require('@/assets/images/super_saiyan_cat.jpg')); // Change image to supersaiyancat.jpg
    }
    if(counter > 0.4) {
      setBackgroundImage(require('@/assets/images/greendog.jpeg')); // Change image to supersaiyancat.jpg
      setButtonText(''); // Change button text after it's pressed
      setMaxPresses(true); // Update state to hide the button
    }
    // Increment counter
    setCounter(counter + 0.0169);
  };

  // the "Some View" of react native
  return (
    // ImageBackground component with dynamic source based on state
    <ImageBackground
      source={backgroundImage}  // Dynamic background image based on state
      style={styles.image}  // Apply styles for image
    >
      <View style={styles.container}>
        <View style={{ flexGrow: counter }} />
        {!maxPresses ? (
        <TouchableOpacity
          style={styles.button} // Apply styles for custom button
          onPress={increment}
        >
          <Text style={styles.buttonText}>{buttonText}</Text> 
        </TouchableOpacity>
        ) : (
          <Text style={styles.title}>can i haz a bite 🥺</Text>
        )}
      </View>
    </ImageBackground>
  );
}

export default App;
