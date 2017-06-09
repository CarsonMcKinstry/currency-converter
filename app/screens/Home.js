import React from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSTION_DATE = new Date();

class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };
  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };

  handleTextChange = (text) => {
    console.log('change text', text);
  };
  handleSwapCurrency = () => {
    console.log('press swap currency');
  };
  handleOptionsPress = () => {
    console.log('handle options press');
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton
              buttonText={TEMP_BASE_CURRENCY}
              onPress={this.handlePressBaseCurrency}
              defaultValue={TEMP_BASE_PRICE}
              keyboardType="numeric"
              onChangeText={this.handleTextChange}
            />
            <InputWithButton
              buttonText={TEMP_QUOTE_CURRENCY}
              onPress={this.handlePressQuoteCurrency}
              value={TEMP_QUOTE_PRICE}
              editable={false}
            />
            <LastConverted
              base={TEMP_BASE_CURRENCY}
              quote={TEMP_QUOTE_CURRENCY}
              date={TEMP_CONVERSTION_DATE}
              conversionRate={TEMP_CONVERSION_RATE}
            />
            <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Home;