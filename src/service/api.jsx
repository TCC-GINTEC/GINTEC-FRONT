import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api-faisca.online/GintecPROD'
    //baseURL: 'https://localhost:44397'
    //baseURL: 'http://192.168.0.3:5019'
    //baseURL: 'http://172.20.10.2:5019'

});

httpClient.interceptors.request.use(    
    async (config) => {

        var token = localStorage.getItem("user_token");

        httpClient.defaults.headers.authorization = `Bearer ${token}`;
        config.headers = {
            Authorization: `Bearer ${token}`,
        };

        if (config.url.includes('auth'))
            return config;

        if (!token) {
            window.location.href = '/login';
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

httpClient.interceptors.response.use(async (response) => {
    return response
}, async (error) => {
    console.log(error)
    if (error.config.url.includes('auth'))
        return error.response;
    if (!error.response)
        return error.response
    if (error.response.status == 401) {
        window.location.href = '/login';        
    }

    if (error.response.status == 403) {
        window.location.href = '/login';        
    }

})

export default httpClient;