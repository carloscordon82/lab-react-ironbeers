import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BeerInfo(props) {
  const [beer, setBeer] = React.useState({});

  const { beerId } = useParams();

  React.useEffect(() => {
    console.log(props.random);
    if (props.random) {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((results) => {
          setBeer(results.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((results) => {
          setBeer(results.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  }, []);

  return (
    <div>
      <section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div class="flex flex-col w-full md:flex-row">
            <div class="flex justify-between">
              <h1 class="relative w-3/4 flex flex-col text-6xl font-extrabold text-left text-black">
                {beer.name}
                <span class="text-3xl w-3/4"> {beer.tagline}</span>
                <span class="text-2xl text-gray-500">
                  Attenuation: {beer.attenuation_level}
                </span>
              </h1>
            </div>
            <div class="relative top-0 right-20 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
              <img
                style={{ height: 250 }}
                src={beer.image_url}
                class="object-cover mt-3 mr-5 h-80 lg:h-96"
                alt=""
              />
            </div>
          </div>

          <div class="my-2 border-b border-gray-300 lg:my-12"></div>

          <h2 class="text-left text-gray-500 xl:text-xl">{beer.description}</h2>
        </div>
      </section>
    </div>
  );
}
