import React, { Component } from 'react';
import { TextInput } from 'react-native';

const FeedbackEditorScreen = () => {

  const [value, onChangeText] = React.useState('输入反馈内容');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default FeedbackEditorScreen;
