import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback, TextInput } from 'react-native';

import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const underlayColor = color(styles.$buttonBackgroundBase).darken(
    styles.$buttonBackgroundModifier,
  );

  const containerStyles = [styles.container];

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <TouchableWithoutFeedback>
      <View style={containerStyles}>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={onPress}
          underlayColor={underlayColor}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput style={styles.input} underlineColorAndorid="transparent" {...props} />
      </View>
    </TouchableWithoutFeedback>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
