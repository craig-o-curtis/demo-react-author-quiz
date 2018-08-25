
import React, { Component } from 'react';
import './AddAuthorForm.css';


class AddAuthorForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name : '',
      imageUrl : '',
      books : [],
      bookTemp : ''
    }

    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange( event ) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleAddBook( event ) {
    event.preventDefault();
    this.setState({
      books : this.state.books.concat([this.state.bookTemp]),
      bookTemp : ''
    })
  }

  handleSubmit( event ) {
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }

  render() {
    return (
      <div className="AddAuthorForm container">
        <h1>Add Author</h1>
        <form onSubmit={this.handleSubmit} >
          <div className="AddAuthorForm__input form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" className="form-control" value={this.state.name} onChange={this.onFieldChange} />
          </div>
          <div className="AddAuthorForm__input form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input id="imageUrl" type="text" name="imageUrl" className="form-control" value={this.state.imageUrl} onChange={this.onFieldChange} />
          </div>
          <div className="AddAuthorForm__input form-group">
            <label htmlFor="bookTemp">Books</label>
            <div className="input-group">
              <input id="bookTemp" type="text" name="bookTemp" className="form-control" value={this.state.bookTemp} onChange={this.onFieldChange} />
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="button" id="button-addon" onClick={this.handleAddBook}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            {/* List of books */}
            { this.state.books.map( (book,idx) => <span className="badge badge-secondary badge-pill mx-1" key={`book-${idx}`}>{ book }</span>) }
          </div>
          <div className="AddAuthorForm__input form-group">
            <input type="submit" className="btn btn-outline-primary" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}


export default AddAuthorForm;