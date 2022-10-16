import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { episodesService } from 'api';
import { GetAllEpisodesParams } from 'api/episodes/types';
import { EpisodesState } from './types';

const initialState: EpisodesState = {
  episodes: [],
};

export const getAllEpisodes = createAsyncThunk('episodes/getAllEpisodes', async (params: GetAllEpisodesParams | undefined, ThunkApi) => {
  return await episodesService.getAllEpisodes(params).then((response) => response.data);
});

export const getEpisodeById = createAsyncThunk('episodes/getEpisodeById', async (id: number, ThunkApi) => {
  return await episodesService.getEpisodeById(id).then((response) => response.data[0]);
});

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEpisodes.pending, (state) => {
        state.episodesLoading = true;
      })
      .addCase(getAllEpisodes.fulfilled, (state, action) => {
        state.episodes = action.payload;
        state.episodesLoading = false;
      })
      .addCase(getEpisodeById.pending, (state) => {
        state.currentEpisodeLoading = true;
      })
      .addCase(getEpisodeById.fulfilled, (state, action) => {
        state.currentEpisode = action.payload;
        state.currentEpisodeLoading = false;
      });
  },
});

export const {} = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
