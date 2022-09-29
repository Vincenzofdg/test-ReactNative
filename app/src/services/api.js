import axios from 'axios';

const URL = 'http://localhost:3001'

export const getAll = async () => {
  const info = await axios.get(URL);
  return info.data;
}

export const create = async (data) => axios.post(URL, data);
export const edit = async (id, data) => axios.put(`${URL}/${id}`, data)
export const remove = async (id) => axios.delete(`${URL}/${id}`)
