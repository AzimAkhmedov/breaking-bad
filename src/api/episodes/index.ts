import instance from 'api/instance';
import { GetAllEpisodes, GetEpisodeById } from './types';

export const getAllEpisodes: GetAllEpisodes = (data) => {
  return instance.get('/episodes', {
    data,
  });
};

export const getEpisodeById: GetEpisodeById = (id) => {
  return instance.get(`/episodes/${id}`);
};
