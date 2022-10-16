import { EpisodeModel } from 'app/models/episodes';

export interface EpisodesState {
  episodes: EpisodeModel[];
  episodesLoading?: boolean;

  currentEpisode?: EpisodeModel | null;
  currentEpisodeLoading?: boolean;
}
