import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetAllDeaths } from 'store/modules/deaths'
import s from './CharactersPage.module.scss'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/system'
import { deathsModel } from 'app/models/deaths'



const CharactersPage: React.FC = () => {
    const [input, setInput] = useState('')
    const [searchedData, setSearchedData] = useState<deathsModel[]>([])
    const dispatch = useAppDispatch()
    const { deaths } = useAppSelector((state) => state.deaths)


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '100%',
        color: theme.palette.text.secondary,
    }));
    const searchByName = (name: string) => {
        setInput(name)
        const searchedArr = deaths.filter(deaths => deaths.death.toLowerCase().includes(input.toLowerCase()))
        setSearchedData(searchedArr)

    }
    
    useEffect(() => {
        dispatch(GetAllDeaths())
        console.log(searchedData);
        
    }, [])
    useEffect(() => {
        console.log(searchedData);
        console.log(deaths);
    }, [deaths]);
    return (
        <Container >
            <input value={input} onChange={e => searchByName(e.target.value)} type="text" name="" id="" />
            <Box sx={{ flexGrow: 1, display: 'flex', gap: '50px', flexDirection: 'column', flexWrap: 'nowrap', maxWidth: "100%" }}>
                {input.length != 0 ? (searchedData.map(e => <div key={e.death_id} className={s.item}>  <NavLink to={`/characters/${e.death.split(' ').splice(0, 1).join('+')}`} ><Item className={s.element}> {e.death}</Item> </NavLink> </div>)) : (
                    deaths.map(e => <div key={e.death_id} className={s.item}>  <NavLink to={`/characters/${e.death.split(' ').splice(0, 1).join('+')}`} ><Item className={s.element}> {e.death}</Item> </NavLink> </div>)
                )}
            </Box>
        </Container>
    )
}

export default CharactersPage