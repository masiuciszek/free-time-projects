import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 75d047aef42b61cef743a5a1f0b3578f3189bb4b2e43aa8161e3e6a63764150e'
    }
})