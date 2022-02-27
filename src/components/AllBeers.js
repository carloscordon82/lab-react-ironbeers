import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AllBeers() {
  const [allBeers, setAllBeers] = useState(["Loading"]);

  React.useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((results) => {
        setAllBeers(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center m-12">
        {allBeers.map((beer) => {
          return (
            <div className="flex m-12">
              {" "}
              <Link to={`/beers/${beer._id}`}>
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ width: 300, flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {beer.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {beer.tagline}
                      </Typography>
                      <Button variant="contained">Info </Button>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 51, height: 151 }}
                    image={beer.image_url}
                    alt="Live from space album cover"
                  />
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
