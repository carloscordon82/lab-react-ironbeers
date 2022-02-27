import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddBeer = () => {
  const [message, setMessage] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 1,
    contributed_by: "",
  });

  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const beerDetails = {
      name: inputs.name,
      tagline: inputs.tagline,
      description: inputs.description,
      first_brewed: inputs.first_brewed,
      brewers_tips: inputs.brewers_tips,
      attenuation_level: inputs.attenuation_level,
      contributed_by: inputs.contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerDetails)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.log("error creating new beer...", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section class="w-1/2 bg-gray-100 ">
          <div class="w-screen mx-auto">
            <div class="flex flex-col items-center">
              <div class="w-full mt-16 md:mt-0 md:w-2/5">
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <h3 class="mb-6 text-2xl font-medium text-center">
                    Add New Beer{" "}
                  </h3>
                  <label>
                    Beer name:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="name"
                      value={inputs.name}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Tagline:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="tagline"
                      value={inputs.tagline}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Description:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="description"
                      value={inputs.description}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    First brewed:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="first_brewed"
                      value={inputs.first_brewed}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Brewer's tips:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="brewers_tips"
                      value={inputs.brewers_tips}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Attenuation level:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="attenuation_level"
                      value={inputs.attenuation_level}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label>
                    Contributed by:
                    <input
                      class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      type="text"
                      name="contributed_by"
                      value={inputs.contributed_by}
                      onChange={handleInputChange}
                    />
                  </label>

                  <button
                    class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                    type="submit"
                  >
                    Add new beer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <h4>{message}</h4>
    </div>
  );
};

export default AddBeer;
