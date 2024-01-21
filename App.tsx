import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Apps } from './src/res/Data';

const App = () => {
  // const renderCars = () => {
  //   const carsComponents =Apps.map(App => {
  //     return <CarItem brand={App.name} downlods={App.downlods}  rytng={App.rytng} />;
  //   });
  //   return carsComponents;
  // };
  //   return (
  //     <View style={styles.container} >
  //       {renderApps()}
  //     </View>
  //   );
  // };

  // export default App;

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1, // cover the all the screen
  //   },
  //   txt: {
  //     fontSize: 50,
  //     fontWeight: 'bold',
  //     borderWidth: 3,
  //     // padding: 15 ,
  //     width: 140,
  //     textAlign: 'center',
  //     marginTop: 10,
  //   },
  // });
  return (
    <View style={styles.containeSr}>
      <View style={styles.txd}>
        <Text style={styles.txt} >my first ui</Text>
        <Text style={styles.txt} >my second ui</Text>
      </View>
    </View>
  );
  //   return (
  //     <View style={styles.containeSr}>
  //     <Text styles={styles.txt}>name</Text>
  //     <Text styles={styles.txt}>downlods </Text>
  //     <Text styles={styles.txt}>rytng </Text>
  //   <Text>Appsitem</Text>
  // </View>
  //   );
};

export default App

const styles = StyleSheet.create({
  containeSr: {
    flex: 1, // cover the all the screen

    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  txt: {
    fontSize: 35,
    fontWeight: '900',
    borderWidth: 10,
    padding: 30,
    width: 200,
    textAlign: 'center',
    marginTop: 1,
  }
  txd: {
    fontSize: 35,
    fontWeight: '900',
    borderWidth: 10,
    padding: 30,
    width: 200,
    textAlign: 'center',
    marginTop: 1,
  }
});
