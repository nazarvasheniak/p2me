import axios from 'axios'

export const axiosSetBaseURL = () => {
    axios.defaults.baseURL = "http://139.60.163.142:9000/api"
}