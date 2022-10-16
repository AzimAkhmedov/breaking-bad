import instance from 'api/instance';
import { GetAllDeaths, GetDeathsByName } from './types';

export const getAllDeaths: GetAllDeaths = (data) => {
  return instance.get('/deaths', {
    data,
  });
};
export const getDeathsByName: GetDeathsByName = (name) => {
  return instance.get(`/death?name=${name}`);
};
