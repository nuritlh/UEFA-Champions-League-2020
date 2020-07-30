import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/api/axios';
import Player from './Player';
const TEAM_DETAIL_URL = 'https://api.football-data.org/v2/teams';

const Team = () => {

  let { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    get(`${TEAM_DETAIL_URL}/${id}`).then(res => {
      setTeam(res.data);
      console.log('res', res.data);
    });
  },[id]);

  return (
    <div>
      {team
        ? <>
          <div>
            <div>{team.name}</div>
            <img src={team.crestUrl} alt="team-logo"/>
          </div>
          <div>
            <p>Fonded at: {team.founded}</p>
            <a href={team.website} target="blank">Official Website</a>
            <p>Address {team.address}</p>
            <div>
              {team.squad.map(player => (<Player player={player} key={player.id}/>)
              )}
            </div>
          </div>

        </>
        : <div>Loading...</div>
      }
    </div>
  );
};

export default Team;