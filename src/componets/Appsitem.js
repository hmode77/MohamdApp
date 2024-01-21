import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Apps } from '../res/Data';

const Appsitem = () => {
  const renderCars = () => {
    const carsComponents =Apps.map(App => {
      return <CarItem brand={App.name} downlods={App.downlods}  rytng={App.rytng} />;
    });
    return carsComponents;
  };
  return (
    <View styles={styles.Apps}    >
        <Text>styles={styles.txt}name</Text>
        <Text>styles={styles.txt}downlods </Text>
        <Text>styles={styles.txt}rytng </Text>
      <Text>Appsitem</Text>
    </View>
  )
}

export default Appsitem

const styles = StyleSheet.create({
    
})