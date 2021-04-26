import React from 'react'
import { Stylesheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
    padding: 10,
    // borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor:'rgba(255, 255, 255, 0.8)'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10  
  }
})
