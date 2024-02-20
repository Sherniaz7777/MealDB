import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HomaeSearch = () => {
  const params = useParams();
  const [search, setSearch] = useState(null);

  async function getSearch() {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.valu}`
    );
    console.log(data);
    setSearch(data.meals);
  }

  useEffect(() => {
    getSearch();
  }, []);
  if (search == null) {
    return <h1>Loading</h1>
    
  }


  return (
  <div>Homaes 
    {search.map((el)=>(
      <div key={el.idMeal}>
        <h1>{el.strMeal}</h1>
      </div>
    ))}
  </div>)
  ;
};

export default HomaeSearch;
