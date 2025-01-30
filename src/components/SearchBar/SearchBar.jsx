import React, {useState} from 'react'
import Style from './SearchBar.module.css'

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={Style.searchForm}>
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search for images...' className={Style.searchInput} />
      <button type='submit' className={Style.searchButton}>
        Search
      </button>
    </form>
  )
}

export default SearchBar
