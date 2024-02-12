import { log } from "console";
import { AppDataSource } from "../data-source";
import { Form } from "../entity/form.entity";


export const addCampaign = async (req, res) => {
  const formRepository = AppDataSource.getRepository(Form);
    const { name, channels } = req.body;
    
    if (!name || !channels) {
      return res.status(400).json({ error: 'Имя и channel обязательны' });
    }
  
    const newCampaign = formRepository.create({ name: name, channels: channels });
    
    try {
      await formRepository.save(newCampaign);
      res.json(newCampaign);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при создании кампании' });
    }
}

export const getCampaign = async(req, res) => {
    const name = req.params.name
    const form = AppDataSource.getRepository(Form);
    try {
      const data = await form.find({where: {
        name: name
      }});
      res.json(data);
    } catch(error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
}

export const deleteCampaign = async(req, res) => {
  const name = req.params.name
  const form = AppDataSource.getRepository(Form);
  try {
    form.delete({name: name})
  } catch(error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
}