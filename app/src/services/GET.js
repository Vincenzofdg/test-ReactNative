import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8081/points/' });

const getAll = async () => {
  const { data } = await api.get();
  console.log('chamou')
  return data;
};

export default getAll;
