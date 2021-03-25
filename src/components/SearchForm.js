import React from 'react';

function SearchForm({ changeInput, fetchData }) {
  return (
    <form className='form-inline'>
      <input
        className='form-control mr-sm-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={changeInput}
      />
      <button className='btn btn-success my-2 my-sm-0' type='submit' onClick={fetchData}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;