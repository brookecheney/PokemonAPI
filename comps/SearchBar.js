import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search Pokemon"
            className="form-control mx-auto"
            style={{
              backgroundColor: 'white transparent',
              height: '1.8em',
              width: '90%',
              borderRadius: '15px',
              opacity: '0.8',
              fontSize: '1.5em'
            }}
          />
        </form>
      </div>
    );
  }
}
