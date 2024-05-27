import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CharacterPage() {
  const { uuid } = useParams();
  const [characterInfo, setCharacterInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${uuid}`,
        );

        const json = await response.json();
        setCharacterInfo(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchCharacterData();
  }, [uuid]);

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
      <div className="character-page-container">
        <div className="character-page">
          <div className="character-basicinfo">
            <h3 className="basicinfo-name">
              Agent Name: {characterInfo.displayName}
            </h3>
            <img
              className="character-pageimg"
              src={characterInfo.fullPortraitV2}
              alt={characterInfo.displayName}
            />
          </div>

          <div className="character-details">
            <p>
              <span className="desc-title">Description: </span>
              <span className="desc-body">{characterInfo.description}</span>
            </p>

            <p>
              <span className="desc-title">
                Role: {characterInfo.role.displayName}{" "}
              </span>
              <span className="desc-body">
                {characterInfo.role.description}
              </span>
            </p>

            <div className="character-abilities">
              <h4 className="char-title">Abilities: </h4>
              <div className="ability-container">
                {characterInfo.abilities.map((ability) => (
                  <div key={ability.slot} className="ability-details-row">
                    <div>
                      <img
                        className="ability-icon"
                        src={ability.displayIcon}
                        alt={ability.displayName}
                      />
                    </div>
                    <div className="ability-details-info">
                      <p>
                        <span className="desc-title">
                          {ability.displayName}:{" "}
                        </span>
                        <span className="desc-body">{ability.description}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
