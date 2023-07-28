import React, { useEffect, useState } from "react";
import axios from "axios";

const Collage_map = () => {
  const [imageUrl, setImageUrl] = useState("");
  const apikey = '953e3fa8a3ee3d40f59a97937198bdaf';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://google-maps-geocoding3.p.rapidapi.com/geocode",
          {
            params: {
              address: "Government Postgraduate College Timergara",
            },
            headers: {
              "X-RapidAPI-Key": "829e736ac1mshe2d668872dadea0p19eb0cjsn8719b22efefc",
              "X-RapidAPI-Host": "google-maps-geocoding3.p.rapidapi.com",
            },
          }
        );

        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;

        const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x400&markers=color:red%7Clabel:P%7C${latitude},${longitude}&key=YOUR_API_KEY`;

        setImageUrl(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Google Map" />
      ) : (
        <div>Fetching data from API...</div>
      )}
    </div>
  );
};

export default Collage_map;
