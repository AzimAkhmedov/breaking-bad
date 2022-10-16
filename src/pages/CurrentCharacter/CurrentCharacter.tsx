import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetDeathsByName } from 'store/modules/deaths'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
import s from './CurrentCharacter.module.scss'

const CurrentCharacter: React.FC = () => {
    const dispatch = useAppDispatch()
    const { name } = useParams<{ name: string }>()
    const CurrentCharacter = useAppSelector((state) => state.deaths.currentDeath)
    useEffect(() => {
        if (!name) return;

        dispatch(GetDeathsByName(name));
    }, []);
    useEffect(() => {
        console.log("api:", CurrentCharacter)
        console.log("name:", name);
    }, [CurrentCharacter]);
    return (
        <div className={s.folder}>
            <Container>
                <Box sx={{ display: 'flex', }}>
                    <Card sx={{ maxWidth: "80%", height: 700, }}>
                        <CardContent>
                            <Typography gutterBottom variant='h4' component='div'>
                                {CurrentCharacter?.death}
                            </Typography>
                            <Typography variant='h5' color='text.secondary'>
                                Episode: {CurrentCharacter?.episode}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Season:{CurrentCharacter?.season}
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Responsible: {CurrentCharacter?.responsible}
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Cause: {CurrentCharacter?.cause}
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Last words: {CurrentCharacter?.last_words}
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Death count: {CurrentCharacter?.number_of_deaths}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default CurrentCharacter