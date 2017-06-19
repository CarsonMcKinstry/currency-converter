import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback, TextInput } from 'react-native';

// import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  // const underlayColor = color(styles.$buttonBackgroundBase).darken(
  //   styles.$buttonBackgroundModifier,
  // );

  const containerStyles = [styles.container];

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }
  // underlayColor={underlayColor}
  return (
    <TouchableWithoutFeedback>
      <View style={containerStyles}>
        <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
          <Text style={buttonTextStyles}>{buttonText}</Text>
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
  textColor: PropTypes.string,
};

export default InputWithButton;
