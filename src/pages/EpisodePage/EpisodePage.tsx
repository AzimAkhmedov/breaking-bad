// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getEpisodeById } from 'store/modules/episodes';
import s from './Episode.module.scss';


const EpisodePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const currentEpisode = useAppSelector((state) => state.episodes.currentEpisode);

  useEffect(() => {
    if (!id) return;
    dispatch(getEpisodeById(+id));
  }, []);
  useEffect(() => {
    console.log(currentEpisode?.air_date);
  }, [currentEpisode]);

  return (
    <div className={s.folder}>

      <div className={s.title}>
        {currentEpisode?.title}
      </div>
      <video className={s.video} src="" controls></video>
      <div className={s.episode}>
        {currentEpisode?.episode} episode, Season:{currentEpisode?.season}
      </div>
      .<div className={s.characters}>
        In this episode:
        {currentEpisode?.characters.map((e: string, i: number) => <p key={i}>{e}</p>)}
      </div>

      <div className={s.date}>
        Air Date: {currentEpisode?.air_date}
      </div>
    </div>
  );
};

export default EpisodePage;
