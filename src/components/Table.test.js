import React from 'react';
import TeamsTable from './Table';
import { mount } from 'enzyme';

describe('Testing Team Table component', () => {
  const teams = [
    {
      id: 1,
      team:
        {
          name: 'a',
          founded: 2020,
          add: 'Spain',
        }},
    {
      id: 2,
      team:
        {
          name: 'b',
          founded: 2020,
          add: 'Israel',
        }}
  ];
  const data = {
    headers: ['Name', 'Founded', 'Address'],
    rows: teams
  };

  test('should render 2 rows', () => {
    const wrapper = mount(
      <TeamsTable data={data}/>
    );
    console.log(wrapper.debug());
    expect(wrapper.find('#teamTable tbody tr')).to.have.length(2);
  });

});
