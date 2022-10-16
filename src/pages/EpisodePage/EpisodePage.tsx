import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
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
    <Container>
      <Box sx={{ display: 'flex', }}>
        <Card sx={{ maxWidth: "80%", height: 700, }}>
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              {currentEpisode?.title}
            </Typography>
            <video className={s.video} src="" controls></video>
            <Typography variant='h5' color='text.secondary'>
              Episode: {currentEpisode?.episode}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Season:{currentEpisode?.season}
            </Typography>
            <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }} color='text.secondary'>
              In this episode:
              <Typography variant='body1' color='text.secondary'>
                <div className={s.characters}>   {currentEpisode?.characters.map((e: string, i: number) => <p key={i}>{e}</p>)}</div>
              </Typography>
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Air Date: {currentEpisode?.air_date}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default EpisodePage;
