import { deathsModel } from 'app/models/deaths'
import { EpisodeModel } from 'app/models/episodes'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { GetAllDeaths } from 'store/modules/deaths'
import { getAllEpisodes } from 'store/modules/episodes'
import s from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
    const [input, setInput] = useState('')
    const [filtredDeath, setFiltredDeath] = useState<deathsModel[]>([])
    const [filtredEpisodes, setFiltredEpisodes] = useState<EpisodeModel[]>([])
    const dispatch = useAppDispatch()
    const { deaths } = useAppSelector(state => state.deaths)
    const { episodes } = useAppSelector(state => state.episodes)




    const inputChange = (text: string) => {
        setInput(text)
        console.log(input);
        const data = deaths.filter(deaths => deaths.last_words.toLowerCase().includes(input.toLowerCase()))
        setFiltredDeath(data)
        const episodeData = episodes.filter(episodes => episodes.title.includes(input))
        setFiltredEpisodes(episodeData)

    }
    useEffect(() => {
        dispatch(getAllEpisodes())
        dispatch(GetAllDeaths())
    }, [])
    return (
        <div className={s.folder}>
            <input value={input} onChange={(e) => inputChange(e.target.value)} type="text" name="" id="" />
            {
                input.length != 0 ? (filtredDeath.map(e => <p>Death: {e.last_words}</p>)) : (deaths.map(e => <p>  Death: {e.last_words}</p>))
            }
            {
                input.length != 0 ? (filtredEpisodes.map(e => <p> Episode {e.title}</p>)) : (episodes.map(e => <p> Episode {e.title}</p>))
            }

        </div>
    )
}

export default SearchPage