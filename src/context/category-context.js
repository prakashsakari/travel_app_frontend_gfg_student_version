import { createContext, useContext, useState } from "react";

const initialValue = "National Parks";

const CategoryContext = createContext(initialValue);

const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState(initialValue);

  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
