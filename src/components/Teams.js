import React, { useCallback, useEffect, useState } from 'react';
import Table from './Table';
import styled from 'styled-components';
import { get } from '../services/api/axios';

const Styles = styled.div`
  padding: 1rem;
`;

const TEAMS_URL = 'https://api.football-data.org/v2/competitions/2001/teams';

const Teams = () => {

  const [teams, setTeams] = useState(null);

  useEffect(() => {
    get(TEAMS_URL).then(res => {
      console.log(res.data.teams);
      const dataToUse = mackDataReadyToUseTable(res.data.teams);
      setTeams(dataToUse);
    });
  },[]);

  const mackDataReadyToUseTable = useCallback((data) => {
    const teams = data.map(team => (
      {
        id: team.id,
        team:
          {
            name: team.name,
            founded: team.founded,
            add: team.address,
          }}
    ));
    return {
      headers: ['Name', 'Founded', 'Address'],
      rows: teams
    }
  },[]);

  return (
    <>
    {teams
      ? <Styles>
          <Table data={teams} />
        </Styles>
      :  <div>Loading...</div>}
    </>
  )
};

export default Teams;