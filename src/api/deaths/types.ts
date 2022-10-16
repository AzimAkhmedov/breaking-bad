import { deathsModel } from 'app/models/deaths';
import { AxiosPromise } from 'axios';

export interface getAllDeathsParams {
  death_id?: number;
  death?: string;
  cause?: string;
  responsible?: string;
  last_words?: string;
  season?: number;
  episode?: number;
  number_of_deaths?: number;
}

export interface GetAllDeaths {
  (data?: getAllDeathsParams): AxiosPromise<deathsModel[]>;
}

export interface GetDeathsByName {
  (name?: string): AxiosPromise<deathsModel[]>;
}
