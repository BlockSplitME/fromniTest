import { CampaignType } from "./types"
import axios from 'axios';

const url = "http://localhost:8050"

async function post(data: CampaignType) {
    axios.post(url+'/createCampaign', (data))
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

async function get(name: string): Promise<CampaignType> {
  return axios.get(url+'/getCampaign/'+name)
  .then(response => {
    let data = response.data 
    return data
  })
  .catch(error => {
    console.error(error);
  });
}

async function deleteRequest(name: string) {
  axios.delete(url+'/deleteCampaign/'+name).then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error(error);
  });
}
export default {
    post, get, deleteRequest
}