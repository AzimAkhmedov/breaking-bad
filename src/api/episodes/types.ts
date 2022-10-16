import { EpisodeModel } from 'app/models/episodes';
import { AxiosPromise } from 'axios';

export interface GetAllEpisodesParams {
  id?: number;
  title?: string;
  season?: number;
  episode?: number;
  air_date?: string;
  characters?: number[];
  series?: string;
}

export interface GetAllEpisodes {
  (data?: GetAllEpisodesParams): AxiosPromise<EpisodeModel[]>;
}

export interface GetEpisodeById {
  (id: number): AxiosPromise<EpisodeModel[]>;
}
