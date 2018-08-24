import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AuthorQuiz from './AuthorQuiz';

// Connect Enzyme to React Adapter 
Enzyme.configure( { adapter : new Adapter() } );

// mock state
const state = {
  turnData : {
    books : ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet'],
    author : {
      name : 'Charles Dickens',
      imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/0/02/Francis_Alexander_-_Charles_Dickens_1842.jpeg',
      imageSource : 'Wikimedia Commons',
      books : ['David Copperfield', 'A Tale of Two Cities']
    }
  },
  highlight : 'none'
};

describe('Author Quiz', () => {
  it('should pass', ()=>{
    expect(1).toBe(1)
  })
  it('renders without crashing', () => {
    const onAnswerSelected = jest.fn();
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders', () => {
    const wrapper = shallow( <AuthorQuiz {...state} onAnswerSelected={()=>{}} /> );
    expect( wrapper.find('h1').length ).toBe(1);
  });

  it('contains title text', () => {
    const wrapper = shallow( <AuthorQuiz {...state} onAnswerSelected={()=>{}} /> );
    expect( wrapper.contains( <h1 className="AuthorQuiz-title">Welcome to the Author Quiz</h1> ) ).toBe(true);
  });

  describe('When no answer has been selected', () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount( <AuthorQuiz {...state} onAnswerSelected={()=>{}}/> );
    });

    it('should have not background color', () => {
      expect( wrapper.find('div.row.turn').props().style.backgroundColor ).toBe('');
    });
  });

  describe('When the wrong answer has been selected', () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount( <AuthorQuiz {...(Object.assign({}, state, {highlight : 'incorrect'} ) )} onAnswerSelected={()=>{}} /> );
    });

    it('should have a reddish background color', () => {
      expect( wrapper.find('div.row.turn').props().style.backgroundColor ).toBe('tomato');
    });
  });

  describe('When the correct answer has been selected', () => {
    let wrapper;
    beforeAll(()=>{
      wrapper = mount( <AuthorQuiz {...(Object.assign({}, state, {highlight : 'correct'} ) )} onAnswerSelected={()=>{}} /> );
    });

    it('should have a greenish background color', () => {
      expect( wrapper.find('div.row.turn').props().style.backgroundColor ).toBe('lime');
    });
  });

  // test actual user interactions:
  describe('When user selects first answer', () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll(()=>{
      wrapper = mount( <AuthorQuiz {...(Object.assign({}, state, {highlight : 'correct'} ) )} onAnswerSelected={handleAnswerSelected}/> );
      wrapper.find('.answer').first().simulate('click');
    });

    it('onAnswerSelected should be called', () => {
      expect( handleAnswerSelected ).toHaveBeenCalled()
    });

    it('selected receive the first book', () => {
      expect( handleAnswerSelected ).toHaveBeenCalledWith( state.turnData.books[0] );
      expect( handleAnswerSelected ).toHaveBeenCalledWith( 'The Shining' );
    });

  });

});