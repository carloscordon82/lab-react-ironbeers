import React from "react";
import imgBeers from "../assets/beers.png";
import imgNewBeer from "../assets/new-beer.png";
import imgRandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Home() {
  return (
    <div className="flex justify-center m-12">
      <div className="flex m-12">
        {" "}
        <Link to="/all-beers">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imgBeers}
                alt="green iguana"
              />
              <CardContent>
                <Button variant="contained">All Beers </Button>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Link>
      </div>
      <div className="flex m-12">
        {" "}
        <Link to="/random-beer">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imgRandomBeer}
                alt="green iguana"
              />
              <CardContent>
                <Button variant="contained">Random Beer</Button>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Link>
      </div>
      <div className="flex m-12">
        {" "}
        <Link to="/add-beer">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imgNewBeer}
                alt="green iguana"
              />
              <CardContent>
                <Button variant="contained">Add Beer</Button>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Link>
      </div>
    </div>
  );
}
