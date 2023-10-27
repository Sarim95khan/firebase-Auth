import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const SignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your email');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Text>Email</Text>
        <TextInput
          style={{ borderWidth: 2, flex: 1, padding: 2 }}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Text>Password</Text>
        <TextInput
          style={{ borderWidth: 2, flex: 1, padding: 2 }}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Button onPress={SignIn} title="Login" />
          <Button onPress={SignUp} title="Create" />
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
