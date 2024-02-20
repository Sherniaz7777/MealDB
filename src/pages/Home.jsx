import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

const Home = () => {
  const [meal, setMeal] = useState(null);

  async function getMeals() {
    const { data } = await axios.get(url);
    console.log(data);
    setMeal(data.meals);
  }

  useEffect(() => {
    getMeals();
  }, []);

  if (meal === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="card-meal">
      <div className="Container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          {meal.map((el) => (
            <Card sx={{ maxWidth: 305 }} key={el.idMeal}>
              <CardMedia
                component="img"
                alt="mael"
                height="250"
                image={el.strMealThumb}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.strMeal.length > 20
                    ? `${el.strMeal.slice(0, 20)}...`
                    : el.strMeal}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <NavLink to={`/detail/${el.idMeal}`}>Learn More</NavLink>
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
