import React, { useCallback, useEffect, useState } from 'react';
import Table from './Table';
import styled from 'styled-components';
import { get } from '../services/api/axios';

const TeamPageWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TeamPageHeader = styled.div`
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 15px 0;
`;

const PageTitleImg = styled.img`
  width: 5rem;
  margin: 10px
`;

const TableWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const TEAMS_URL = 'https://api.football-data.org/v2/competitions/2001/teams';

const Teams = () => {

  const [teams, setTeams] = useState(null);

  useEffect(() => {
    get(TEAMS_URL).then(res => {
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
      ? <TeamPageWrapper>
          <>
            <TeamPageHeader>
              <PageTitleImg src="/UEFA.svg.png"/>
              UEFA Champions League
              <PageTitleImg src="/UEFA.svg.png"/>
            </TeamPageHeader>
            <TableWrapper>
              <Table data={teams} />
            </TableWrapper>
          </>
        </TeamPageWrapper>
      :  <div>Loading...</div>}
    </>
  )
};

export default React.memo(Teams);