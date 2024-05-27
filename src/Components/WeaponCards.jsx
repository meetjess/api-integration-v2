import { Link } from "react-router-dom";

export default function WeaponCards({ weapons }) {
  return (
    <>
      <div id="weapon-gallery-container">
        {weapons.map((weapon) => (
          <Link key={weapon.uuid} to={`/weapons/${weapon.uuid}`}>
            <div key={weapon.uuid} className="weapon-card">
              <h3 className="card-name">{weapon.displayName}</h3>
              <img
                className="weapon-galleryimg"
                src={weapon.displayIcon}
                alt={weapon.displayName}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
