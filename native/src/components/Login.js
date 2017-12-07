import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Login = props => {
  console.log(props)
  const onLoginPress = props.login()
  return (
    <View style={styles.wrapper}>
      <Text
        onPress={onLoginPress}
        style={styles.button}
      >Login with Google</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafbfc'
  },
  button: {
    margin: 20,
    fontSize: 30
  }
})

export default Login
