import React, { useState, useRef } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function ColorForm ({ onNewColor = f => f }) {
  const [inputValue, setValue] = useState('')
  const input = useRef()
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput}
        ref={input}
        autoCapitalize='none'
        value={inputValue}
        onChangeText={setValue}
        placeholder='Enter a colour name...'/>
      <Button title='add'
        onPress={() => {
          input.current.blur()
          onNewColor(inputValue)
          setValue('')
        }}
        style={styles.btn}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 2,
    margin: 5,
    padding: 5
  },
  btn: {}
})
