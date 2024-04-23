import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    // Check if the input length exceeds 20 characters
    if (text.length <= 20) {
      setInputValue(text); // Update the input value if it's within the limit
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={inputValue}
        maxLength={20} // Set maximum length to 20 characters
        placeholder="Enter text (max 20 characters)"
      />
      <Text style={{ marginTop: 10 }}>
        Characters remaining: {20 - inputValue.length}
      </Text>
    </View>
  );
};

export default App;
