import SearchFormContainer from '../../src/containers/SearchFormContainer';
import TextField from '../../src/components/TextField'
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for SearchFormContainer', () => {
  let makeNewSearch,
      wrapper;

  beforeEach(() => {
    makeNewSearch = jasmine.createSpy('submit spy');
    wrapper = mount(<SearchFormContainer makeNewSearch={makeNewSearch}/>)
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ value: '' });
  });

  it('renders a TextField component', () => {
    expect(wrapper.find(TextField)).toBePresent();
  });

  it('should invoke makeNewSearch function from props when submit', () => {
    wrapper.simulate('submit');
    expect(makeNewSearch).toHaveBeenCalled();
  });

})
