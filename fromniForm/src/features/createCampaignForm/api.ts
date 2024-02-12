import { CampaignType } from "./types"
import axios from 'axios';

async function post(data: CampaignType) {
    axios.post('http://localhost:8050/createCampaign', (data))
    .then(response => {
      console.log(response.data); // Выводим данные, полученные от сервера после создания пользователя
    })
    .catch(error => {
      console.error(error); // Обрабатываем ошибку при запросе
    });
}

async function get(name: string): Promise<CampaignType> {
  
  return axios.post('http://localhost:8050/getCampaign', {name: name})
  .then(response => {
    let data = response.data 
    return data
  })
  .catch(error => {
    console.error(error); // Обрабатываем ошибку при запросе
  });
}
export default {
    post, get
}