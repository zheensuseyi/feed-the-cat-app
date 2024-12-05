// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
  },
  link: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button: {
    backgroundColor: 'red', // Green background color
    paddingVertical: 12, // Padding on top and bottom
    paddingHorizontal: 30, // Padding on left and right
    borderRadius: 5, // Rounded corners
    marginTop: 20, // Space between the button and text input
    elevation: 5, // Shadow effect (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.8, // Shadow opacity (iOS)
    shadowRadius: 2, // Shadow radius (iOS)
  },
  button2: {
    backgroundColor: 'pink', // Green background color
    borderRadius: 1, // Rounded corners
    marginTop: 1, // Space between the button and text input
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 18, // Font size
    textAlign: 'center', // Center the text
    fontWeight: 'bold', // Bold text
  },
});
