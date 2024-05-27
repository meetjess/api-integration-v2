import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeaponCards from "../Components/WeaponCards";

export default function WeaponsGallery() {
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getWeapons() {
      // 1. Make the request with fetch()
      const url = "https://valorant-api.com/v1/weapons";
      const response = await fetch(url);

      // 2. Parse the json from the response body
      const json = await response.json();

      // 3. Check out the data
      console.log(json.data);

      // Data loading complete, set loading and users
      setIsLoading(false);
      setWeapons(json.data);
    }
    // 4. Call function
    getWeapons();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJkN2I1YXExaXB4amt2b3NyOHgxeG1oaHE1ZDF4M2J4M3EzNmpvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LNCDNtqQkTBbDI2bGO/giphy.gif"
          className="loading-img"
          alt="wingman-sticker gif"
        />
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <WeaponCards weapons={weapons} />
    </>
  );
}
