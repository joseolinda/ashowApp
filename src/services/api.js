import axios from 'axios';

//import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

api.interceptors.request.use(async (config) => {
    try {
        const token = await AsyncStorage.getItem('@AShowMoura:token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    } catch (err) {
        alert(err);
    }
});

export default api;

//https://ashowmoura.ifce.edu.br/api/