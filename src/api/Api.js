//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://donation.almanshuriyyah.com/api'
})

export default Api