import { Link } from "react-router-dom";

export default function CharacterCards({ characters }) {
  return (
    <>
      {/* Character Gallery Grid Container */}
      <div id="character-gallery-container">
        {characters.map((character) => (
          <Link key={character.uuid} to={`/characters/${character.uuid}`}>
            <div key={character.uuid} className="character-card">
              <h3 className="card-name">{character.displayName}</h3>
              <img
                className="character-galleryimg"
                src={character.displayIcon}
                alt={character.displayName}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
