import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SearchBar.css'


function SearchBar() {
    const products = Object.values(useSelector((state)=>(state.product)))

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
        setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <div className="searchIcon">
                    {
                        filteredData.length === 0 ? (
                            <i className="fas fa-search"></i>
                        ) : (
                            <i className="fas fa-window-close" onClick={clearInput}></i>
                        )
                    }
                </div>
                <div>
                <input type="text" className="search-bar-input" placeholder='type here...' value={wordEntered} onChange={handleFilter}/>
                </div>
                
            </div>
            
            {filteredData.length !== 0 && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <NavLink className="dataItem" to={`/product/${value.id}`}>
                        <p>{value.name} </p>
                    </NavLink>
            
                    );
                })}
                </div>
            )}
            

        </div>
    )
}

export default SearchBar