import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

function randomNum () {
  return Math.random().toString()
}

export default function useColors () {
  const [colors, setColors] = useState([])

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem('@ColorListStore:Colors')
    if (colorData) {
      const colors = JSON.parse(colorData)
      setColors(colors)
    }
  }

  useEffect(() => {
    if (colors.length) return
    loadColors()
  }, [])

  // Save Colors
  useEffect(() => {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors))
  }, [colors])

  const addColor = color => {
    const newColor = { id: randomNum(), color }
    setColors([ newColor, ...colors ])
  }
  return { colors, addColor }
}
