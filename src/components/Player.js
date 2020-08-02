import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`;

const HeaderWrapper = styled.header`
  padding: 15px
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0px
`;

const Body = styled.div`
  padding: 0 20px 0 20px
`;

const OptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;

const Player = ({ player }) => {
  const { shirtNumber, countryOfBirth, dateOfBirth, position, nationality } = player;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>{ player.name }</Header>
      </HeaderWrapper>
      <Body>
        <OptionsNote>Shirt Number: { shirtNumber }</OptionsNote>
        <OptionsNote>Date Of Birth: { moment(dateOfBirth).format('MMMM Do YYYY') }</OptionsNote>
        <OptionsNote>Position: { position }</OptionsNote>
        <OptionsNote>Country Of Birth: { countryOfBirth }</OptionsNote>
        <OptionsNote>Nationality: { nationality }</OptionsNote>
      </Body>
    </Wrapper>
  )
};

export default Player;