import React, { useState } from 'react'
import '../style/SearchBar.css'
import useDebounce from '../hooks/useDeboubce'
function SearchBar() {
    const {debounce,value} = useDebounce("",1000)
    function handleInput(e) {
        debounce(e)
    }
    return (
        <div className='searchBar'>
            <input type="text"  placeholder="Search movie by title..." onChange={handleInput} />
        </div>
    )
}

export default SearchBar
