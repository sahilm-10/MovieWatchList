import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { API_KEY } from '../config';
import ResultCard from './ResultCard';
import debounce from "lodash/debounce";

export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = useCallback(debounce((value) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${value}`)
            .then((response) => {
                if (!response.data.errors) {
                    setResults(response.data.results);
                }
            }).catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, 1000), []);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setQuery(value);
        onChange(value);
    };

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            placeholder="Search For A Movie"
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
