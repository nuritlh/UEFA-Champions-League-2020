import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import Teams from './components/Teams';
import NotFoundPage from './components/NotFoundPage';
import App from './App';

describe('routes using memory router', () => {
  test('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ [ '/NotFoundPage' ] }>
        <App/>
      </MemoryRouter>
    );
    console.log(wrapper.debug());
    expect(wrapper.find(Teams)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  test('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ [ '/teams' ] }>
        <App/>
      </MemoryRouter>
    );
    console.log(wrapper.debug());
    expect(wrapper.find(Teams)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
