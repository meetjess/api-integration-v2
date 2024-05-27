import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WeaponPage() {
  const { uuid } = useParams();
  const [weaponInfo, setWeaponInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeaponData = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/weapons/${uuid}`,
        );

        const json = await response.json();
        setWeaponInfo(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weapon data:", error);
      }
    };

    fetchWeaponData();
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
      <div className="page-container">
        <div className="weapon-page">
          <div className="weapon-basicinfo">
            <h3 className="basicinfo-name">
              Weapon Name: {weaponInfo.displayName}
            </h3>
            <img
              className="weapon-pageimg"
              src={weaponInfo.displayIcon}
              alt={weaponInfo.displayName}
            />
          </div>

          <div className="weapon-details">
            {weaponInfo.weaponStats && (
              <div className="weapon-stats">
                <h3>Weapon Information</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Stat</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fire Rate</td>
                      <td>{weaponInfo.weaponStats.fireRate}</td>
                    </tr>
                    <tr>
                      <td>Magazine Size</td>
                      <td>{weaponInfo.weaponStats.magazineSize}</td>
                    </tr>
                    <tr>
                      <td>Run Speed Multiplier</td>
                      <td>{weaponInfo.weaponStats.runSpeedMultiplier}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {weaponInfo.shopData && (
              <div className="shop-data">
                <p>
                  <span className="desc-title">Cost: </span>
                  <span>{weaponInfo.shopData.cost}</span>
                </p>

                <p>
                  <span className="desc-title">Category: </span>
                  <span>{weaponInfo.shopData.category}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <h2 className="skins-title">Available Skins</h2>
        <div className="skins-container">
          {weaponInfo.skins.map((skin) => (
            <div key={skin.uuid} className="skin-item">
              <h4>{skin.displayName}</h4>

              {skin.displayIcon && (
                <img src={skin.displayIcon} alt={skin.displayName} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
