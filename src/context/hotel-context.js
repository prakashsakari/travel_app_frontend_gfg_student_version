import { createContext, useContext, useState } from "react";

const initialState = {
    hotel: {}
}

const HotelContext = createContext(initialState);

const HotelProvider = ({children}) => {

    const [hotel, setHotel] = useState({});

    return (
        <HotelContext.Provider value={{hotel, setHotel}}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel = () => useContext(HotelContext);

export { useHotel, HotelProvider };