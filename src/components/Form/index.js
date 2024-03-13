import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Button, FlatList} from "react-native";
import styles from "./style";
import * as Speech from "expo-speech";


export default function Form(){
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');

  const speakText = () => {
    if (text.trim() !== '') {
      Speech.speak(text, {language} );
    }
  };

  const renderLanguages = () => {
    const languages = [
      {label: 'English', value: 'en'},
      {label: 'Portuguese', value: 'pt-BR'},
      {label: 'French', value: 'fr'}
    ];

    return languages.map(lang => (
      <Button 
      key={lang.value}
      title={lang.label}
      onPress={() => setLanguage(lang.value)}
      color = {language === lang.value ? '#007bff' : '#5a5d6c'}
      style={{}}
      />
    ))}

  return(
    <View>
      <View style={styles.mainContentForm}>
        <TextInput
          style={styles.inputText}
          placeholder="Digite o texto a ser reproduzido"
          onChangeText={text => setText(text)}
          value={text}
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={speakText}>
          <Text>Digite</Text>
          </TouchableOpacity>
      </View>
        <View>
          {renderLanguages()}
        </View>
    </View>
  );

}

