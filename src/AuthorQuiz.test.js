import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure( { adapter : new Adapter() } );

describe('Author Quiz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders', () => {
    const wrapper = shallow( <AuthorQuiz /> );
    expect( wrapper.find('h1').length ).toBe(1);
  });

  it('contains title text', () => {
    const wrapper = shallow( <AuthorQuiz /> );
    expect( wrapper.contains( <h1 className="AuthorQuiz-title">Welcome to the Author Quiz</h1> ) ).toBe(true);
  });
});