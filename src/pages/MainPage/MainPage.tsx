import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { EpisodeModel } from 'app/models/episodes';
import { getAllEpisodes } from 'store/modules/episodes';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import s from './Main.module.scss';
import Header from 'shared/Header/Header';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MainPage: React.FC = () => {
  const [filtredEpisodes, setFiltredEpisodes] = useState<EpisodeModel[]>([]);
  const [currentTab, setCurrentTab] = React.useState(0);

  const dispatch = useAppDispatch();
  const { episodes } = useAppSelector((state) => state.episodes);

  const filterByEpisodes: any = (season: string) => {
    setFiltredEpisodes(episodes.filter((episodes) => episodes.season === season));
    console.log(filtredEpisodes);
  };
  const setInitialEpisodes: any = () => {
    setFiltredEpisodes(episodes);
    console.log(filtredEpisodes);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 140,
    color: 'darkblue',
  }));


  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);



  useEffect(() => {
    console.log(episodes);
  }, [episodes]);

  return (
    <div className={s.folder}>
      <Header />
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={currentTab}
        onChange={(_, newValue) => setCurrentTab(newValue)}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
          label='All Series'
          onClick={() => {
            setInitialEpisodes()
          }}

          {...a11yProps(6)}
        />
        <Tab
          label='Season 1'
          onClick={() => {
            filterByEpisodes("1");
          }}
          {...a11yProps(0)}
        />
        <Tab
          label='Season 2'
          onClick={() => {
            filterByEpisodes("2");
          }}
          {...a11yProps(1)}
        />
        <Tab
          label='Season 3'
          onClick={() => {
            filterByEpisodes("3");
          }}
          {...a11yProps(2)}
        />
        <Tab
          label='Season 4'
          onClick={() => {
            filterByEpisodes("4");
          }}
          {...a11yProps(4)}
        />
        <Tab
          label='Season 5'
          onClick={() => {
            filterByEpisodes("5");
          }}
          {...a11yProps(5)}
        />
      </Tabs>

      <TabPanel value={currentTab} index={0}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>

      <TabPanel value={currentTab} index={1}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={currentTab} index={5}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel value={currentTab} index={6}>
        <div className={s.episodes}>
          {
            filtredEpisodes.map((e) => (
              <NavLink key={e.episode_id} to={`/episodes/${e.episode_id}`}>
                <Item > Episode {e.episode}  Season {e.season}
                  <p>
                    {e.title}
                  </p>
                </Item>

              </NavLink>
            ))
          }
        </div>
      </TabPanel>
    </div>
  );
};

export default MainPage;
