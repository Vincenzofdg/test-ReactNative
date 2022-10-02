import { get } from 'axios';

const url = 'http://localhost:8081/points'

export const getAll = async () => {
  const { data } = await get(url);
  return data;
};

export const getById = async (id) => {
  const { data } = await get(`${url}/${id}`);
  return data.points[0];
};
