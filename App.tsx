import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [sqColor, setsqColor] = useState('green');
  const [recColor, setRecColor] = useState('red');
  const [circleColor, setCircleColor] = useState('yellow');
  const [triColor, setTriColor] = useState('blue');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';

    const getRandomColor = () => {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    setRandomBackground(getRandomColor());
    setsqColor(getRandomColor());
    setRecColor(getRandomColor());
    setCircleColor(getRandomColor());
    setTriColor(getRandomColor());
  };

  return (
    <>
      <View style={[styles.shapeContainer, { backgroundColor: randomBackground }]}>
        <View style={[styles.sq, { backgroundColor: sqColor }]}>
          <Text>SQUARE</Text>
        </View>

        <View style={[styles.tri, { borderBottomColor: triColor }]}>
          <Text>TRIANGLE</Text>
        </View>
      </View>
      <View style={[styles.shapeContainer, { backgroundColor: randomBackground }]}>
        <View style={[styles.circle, { backgroundColor: circleColor }]}>
          <Text>CIRCLE</Text>
        </View>
        <View style={[styles.rec, { backgroundColor: recColor }]}>
          <Text>RECTANGLE</Text>
        </View>
      </View>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B40',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  shapeContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  sq: {
    marginTop: 10,
    width: 150,
    height: 150,
    backgroundColor: '#ffffff',
    marginHorizontal: 5,
    color: '#000000'
  },
  rec: {
    width: 200,
    height: 400,
    backgroundColor: 'green',
    marginTop: 10,
    marginHorizontal: 5,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  tri: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderBottomWidth: 200,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    transform: [{ rotate: '360deg' }],
    marginRight: 20,
  },
});
