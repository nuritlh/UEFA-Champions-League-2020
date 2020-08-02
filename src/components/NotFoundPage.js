import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: red;
    padding: 20px;
    `;

const BackButton = styled.button`
  display: flex;
  align-self: baseline;
  padding: 5px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 3px;
  `;

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <>
      <BackButton onClick={() => history.push('/teams')}>Back to Table</BackButton>
      <StyledDiv>Page Not Found</StyledDiv>
    </>
  )
};

export default NotFoundPage;