import { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    function autenticar() {
        if (usuario === 'admin' && senha = 'admin') {
            router.replace('/home');
        }  else {
            Alert.alert('Erro', 'Usuário ou senha incorretos');
        } 
    }

    return (
        <View.style={StyleSheet.container}>
        <Button title="Entrar" onPress={autenticar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20},
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 6 },
});
