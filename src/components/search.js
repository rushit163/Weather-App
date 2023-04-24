import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoOptions,geoUrl } from '../api/api'
const Search = ({onSearchChange}) => {
        const [search,setSearch]=useState(null)
        const handleOnchange = (searchData)=>{
            setSearch(searchData);
            onSearchChange(searchData);
        }
        const loadOptions = async (inputValue)=>{
            return fetch(
                `${geoUrl}?minPopulation=1000000&namePrefix=${inputValue}`,
                geoOptions
              )
                .then((response) => response.json())
                .then((response) => {
                  return {
                    options: response.data.map((city) => {
                      return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                      };
                    }),
                  };
                });
        }
  return (
    <div className='min-w-[70vw]'>
    <AsyncPaginate
        placeholder="Search the city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnchange}
        loadOptions={loadOptions}
    />
    </div>
  )
}

export default Search
