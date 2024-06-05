import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response:AxiosResponse)=> response.data;

const requests = {
    get:(url:string)=> axios.get(url).then(responseBody),
    post:(url:string, body:{})=> axios.post(url,body).then(responseBody),
    put:(url:string, body:{})=> axios.put(url,body).then(responseBody),
    delete:(url:string)=> axios.delete(url).then(responseBody)
}

const Catalog ={
    list:()=> requests.get('products'),
    details: (id:number) => requests.get(`products/${id}`)
}


const TestErrors = {
    get404Error:()=> requests.get('Error/not-found'),
    get400Error:()=> requests.get('Error/bad-request'),
    get401Error:()=> requests.get('Error/unauthorised'),
    getValidationError:()=> requests.get('Error/validation-error'),
    get500Error:()=> requests.get('Error/server-error')
}

const agent = {
    Catalog,
    TestErrors
}
export default agent;