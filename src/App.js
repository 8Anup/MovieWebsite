
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState([]);
  const [filterVal, setFilterVal] = useState('');

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((result) => {
      result.json().then((resp) => {
        setData(resp.Search)

      })
    })

  }, [])
  console.log(data)

  const handleFilter = (e) => {
    if (filterVal == "") {
      return e
    } else if (e.Title.toLowerCase().includes(filterVal)) {
      return e
    }
  }
  return (
    <>
      <div>
        <input type="text" placeholder="Search For Movie Title...." name="search-box" id="search-box" defaultValue={filterVal} onChange={(e) => setFilterVal(e.currentTarget.value.toLocaleLowerCase())} />
      </div>
      {data.filter(e=> handleFilter(e)).map(res => (
        <div id='posters'>
          <div id='cards'>
            <img id='photo' src={res.Poster}></img>
            <h4 id='name'>{res.Title}</h4>
            <h6 class="type">Type: {res.Type}</h6>
            <h6 class="year">Year: {res.Year}</h6>
            <h6 class="rating">imdbID: {res.imdbID}</h6>
          </div>
        </div>))
      }
    </>
  );
}

export default App;
