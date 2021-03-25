import React from 'react';

function SearchForm({ changeInput, fetchData }) {
  return (
    <form className='form-inline w-100 my-3'>
      <input
        className='form-control-lg mr-2'
        style={{flex: '1', width: '75%'}}
        type='search'
        placeholder='Search'
        aria-label='Search'
        onChange={changeInput}
      />
      <button className='btn btn-lg btn-success my-2 my-0' type='submit' onClick={fetchData}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;