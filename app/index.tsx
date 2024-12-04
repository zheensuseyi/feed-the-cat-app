// importing things from react, including state which we can use to bind a variable to change 
import React, { useState } from 'react';
// importing things to use in my some view from react native
import { Text, View, ImageBackground, TouchableOpacity} from 'react-native';
// importing my styles from my styles.js file
import styles from '@/app/styles'; 

// name of the function, takes no parameters
const App = () => {
  // State variables that will control the background image and the button text
  const [backgroundImage, setBackgroundImage] = useState(require('@/assets/images/cat.png')); // Initial image is cat.png
  const [buttonText, setButtonText] = useState('PLEASE FEED ME 😿'); // Initial button text, will be changed upon button press


  // Function to change the background image and button text
  const changeBackgroundImage = () => {
    setBackgroundImage(require('@/assets/images/greencat.png')); // Change image to greencat.png
    setButtonText('THANK YOU!'); // Change button text after it's pressed
  };

  // the "Some View" of react native
  return (
    // ImageBackground component with dynamic source based on state
    <ImageBackground
      source={backgroundImage}  // Dynamic background image based on state
      style={styles.image}  // Apply styles for image
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button} // Apply styles for custom button
          onPress={changeBackgroundImage}
        >
          <Text style={styles.buttonText}>{buttonText}</Text> 
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default App;
