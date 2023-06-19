import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (value) => {
    setIsToggled(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch
          value={isToggled}
          onValueChange={handleToggle}
          thumbColor={isToggled ? 'red' : '#374563'}
          trackColor={{ false: '#FFFFFF', true: '#FFC0C0' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  switchContainer : {
    width : "90%",
    backgroundColor : "gray",
    borderRadius : 10,
  },
  circleContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },

});

export default ToggleButton;
