export const Card = ({ newUser, showUsers, setShowUsers, toggleUsers }) => {
  return (
    <div className="homeContainer box hall">
      <h2>hall da fama</h2>
      {newUser.map((item) => {
        return (
          <div className="homeContainer box">
            <p>username: {item.username}</p>
          </div>
        );
      })}
      <button className="box" onClick={() => toggleUsers()}>
        👥
      </button>
    </div>
  );
};
