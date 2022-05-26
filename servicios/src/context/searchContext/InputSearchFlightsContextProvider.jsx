import { useState } from "react";
import {InputSearchFlightsContext} from './InputSearchFlightsContext';

function SearchFlightProvider({ value, children }) {
    const [searchValue, setSearchValue] = useState('');
    return (

        <InputSearchFlightsContext.Provider value={[searchValue, setSearchValue]}>
            {children}
        </InputSearchFlightsContext.Provider>
    )

}


export default SearchFlightProvider;