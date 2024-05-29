export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-section">
          <div>
            <h2>About Valorant</h2>
            <img
              className="splash-img"
              src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
              alt="valorant agents"
            />
          </div>
          <div>
            <p>
              VALORANT is a competitive tactical shooter from the first-person
              perspective. It takes place on a near-future Earth and features a
              cast of characters known as agents, each of which have their own
              unique set of abilities to create tactical opportunities. Ten
              players are divided into two teams, Attackers and Defenders, with
              the goal of winning the most rounds. In order to win a round, a
              team must eliminate the opposing team or complete their
              team-specific spike objective. First team who reaches 13 rounds,
              wins the game. The game starts in a lobby, where players have to
              lock in their Agent. The lobby lasts for 80 seconds or until
              everyone has locked in their Agent. Only one of each Agent can be
              selected on each team and players cannot see which Agent has been
              picked on the opposing team until the first Buy Phase. The Buy
              Phase occurs before each round and lasts for 30 seconds. During
              Buy Phase, most areas of the map are inaccessible and the two
              teams cannot meet each other. Therefore, Attackers cannot enter
              sites and are only limited to areas near their spawn zone, while
              the Defenders can move freely between sites, but not further than
              that. Players are also allowed to buy weapons, shields, and
              abilities during this phase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
