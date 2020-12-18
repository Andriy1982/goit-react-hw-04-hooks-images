import React, { useState } from 'react';
import './Searchbar.css';

function Searchbar({ onSubmitForm }) {
  const [searchImage, setSearchImage] = useState('');

  const handleInputChange = e => {
    setSearchImage(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchImage.trim() === '') {
      alert('Enter a name for the picture');
      return;
    }
    onSubmitForm(searchImage);
    setSearchImage('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleInputChange}
          value={searchImage}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
