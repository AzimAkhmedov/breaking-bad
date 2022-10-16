import { deathsModel } from 'app/models/deaths';

export interface DeathsState {
  deaths: deathsModel[];
  deathssLoading?: boolean;

  currentDeath?: deathsModel | null;
  currentDeathLoading?: boolean;
}
