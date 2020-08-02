import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StyledTeamsTable = styled.table`
  border-spacing: 0;
  border: 1px solid black;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;

const TeamsTable = ({ data }) => {
  const history = useHistory();
  const { headers, rows } = data;
  return (
    <StyledTeamsTable>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {rows.map(row => (
        <tr key={row.id} onClick={() => history.push(`/teams/${row.id}`)}>
          {Object.keys(row.team).map((key)=>(
            <th key={key}>{row.team[`${key}`]}</th>
          ))}
        </tr>
      ))}
      </tbody>
    </StyledTeamsTable>
  )
};

export default TeamsTable;