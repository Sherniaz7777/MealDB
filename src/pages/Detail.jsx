import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const urlImg = "https://www.themealdb.com/images/ingredients/";

const Detail = () => {
  const params = useParams();
  const [mealId, setMealID] = useState(null);

  async function getMealID(idMeal) {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + idMeal
    );
    console.log(data);
    setMealID(data.meals[0]);
  }

  // const ingr= mealId.map(el =>(
  //   <p>{el.idMeal}</p>
  // ))

  useEffect(() => {
    getMealID(params.tamakId);
  }, [params.tamakId]);

  if (mealId === null) {
    return <h1>Loading</h1>;
  }
  // -Small.png
  return (
    <div>
      
    <div className="Detail-ingr">
      <div className="Container">
        <div className="Name-ingrs">
          <div className="ingr-img">
            <img src={mealId.strMealThumb} alt="" />
          </div>
          <div className="ingredients">
            <div>
              <img src={`${urlImg + mealId.strIngredient1}-Small.png`} alt="" />
              <p>{mealId.strIngredient1}</p>
            </div>

            <div>
              <img src={`${urlImg + mealId.strIngredient2}-Small.png`} alt="" />
              <p>{mealId.strIngredient2}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient3}-Small.png`} alt="" />
              <p>{mealId.strIngredient3}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient4}-Small.png`} alt="" />
              <p>{mealId.strIngredient4}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient5}-Small.png`} alt="" />
              <p>{mealId.strIngredient5}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient6}-Small.png`} alt="" />
              <p>{mealId.strIngredient6}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient7}-Small.png`} alt="" />
              <p>{mealId.strIngredient7}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient8}-Small.png`} alt="" />
              <p>{mealId.strIngredient8}</p>
            </div>
            <div>
              <img src={`${urlImg + mealId.strIngredient9}-Small.png`} alt="" />
              <p>{mealId.strIngredient9}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient10}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient10}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient11}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient11}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient12}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient12}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient13}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient13}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient14}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient14}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient15}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient15}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient16}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient16}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient17}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient17}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient18}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient18}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient19}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient19}</p>
            </div>
            <div>
              <img
                src={`${urlImg + mealId.strIngredient20}-Small.png`}
                alt=""
              />
              <p>{mealId.strIngredient20}</p>
            </div>
          </div>
        </div>
        <h1>Instructions</h1>
        <p id="strInstructions">{mealId.strInstructions}</p>
        <h2>Browse More</h2>
      </div>
    </div>
    
    </div>
  );
};

export default Detail;
