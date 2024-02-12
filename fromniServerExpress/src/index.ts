import { AppDataSource } from "./data-source"
import * as resolvers from './resolvers/resolver'

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))

app.get('/getCampaign/:name', resolvers.getCampaign);
app.post('/createCampaign', resolvers.addCampaign);
app.delete('/deleteCampaign/:name', resolvers.deleteCampaign)

app.listen(8050, () => {
  console.log('Сервер запущен на порту 8050');
});
