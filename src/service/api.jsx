import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api-faisca.online/Gintec'
    // baseURL: 'http://localhost:44397'
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
    if (error.config.url.includes('auth'))
        return error.response;
    if (error.response.status == 401)
        window.location.href = '/login';

    if (error.response.status == 403)
        window.location.href = '/login';
})

export default httpClient;