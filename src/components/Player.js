import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding: 15px
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0px
`;

const CardBody = styled.div`
  padding: 0 20px 0 20px
`;

const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;

const Player = ({ player }) => {
  const { shirtNumber, countryOfBirth, dateOfBirth, position, nationality } = player;
  return (
    <StyledWrapper>
      <CardHeader>
        <CardHeading>{ player.name }</CardHeading>
      </CardHeader>
      <CardBody>
        <CardOptionsNote>Shirt Number: { shirtNumber }</CardOptionsNote>
        <CardOptionsNote>Date Of Birth: { moment(dateOfBirth).format('MMMM Do YYYY') }</CardOptionsNote>
        <CardOptionsNote>Position: { position }</CardOptionsNote>
        <CardOptionsNote>Country Of Birth: { countryOfBirth }</CardOptionsNote>
        <CardOptionsNote>Nationality: { nationality }</CardOptionsNote>
      </CardBody>
    </StyledWrapper>
  )
};

export default Player;