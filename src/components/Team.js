import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/api/axios';
import styled from 'styled-components';
import Player from './Player';

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const PageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TeamImg = styled.img`
  width: 5rem;
  margin: 10px
`;

const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MidTitle = styled.h3`
  margin: 0px;
  text-transform: uppercase;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TEAM_DETAIL_URL = 'https://api.football-data.org/v2/teams';

const Team = () => {
  let { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    get(`${TEAM_DETAIL_URL}/${id}`).then(res => {
      setTeam(res.data);
    });
  },[id]);

  return (
    <TeamWrapper>
      {team
        ? <>
          <PageHeader>
            <TeamImg src={team.crestUrl} alt="team-logo"/>
            <h1>{team.name}</h1>
            <TeamImg src={team.crestUrl} alt="team-logo"/>
          </PageHeader>
          <PageBody>
            <p>Fonded at: {team.founded}</p>
            <a href={team.website} target="blank">Official Website</a>
            <p>Address: {team.address}</p>
            <MidTitle>Squad</MidTitle>
            <PlayerWrapper>
              {team.squad.map(player => (<Player player={player} key={player.id}/>)
              )}
            </PlayerWrapper>
          </PageBody>
        </>
        : <div>Loading...</div>
      }
    </TeamWrapper>
  );
};

export default Team;