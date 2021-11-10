import { useState } from "react";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";

export const Home = () => {
  const [newUser, setNewUser] = useState([]);
  const [showUser, setShowUser] = useState(false);

  const toggleUsers = () => {
    setShowUser(!showUser);
  };

  return (
    <div className="homeContainer">
      {showUser ? (
        <Card
          newUser={newUser}
          showUser={showUser}
          setShowUser={setShowUser}
          toggleUsers={toggleUsers}
        />
      ) : (
        <Form
          newUser={newUser}
          setNewUser={setNewUser}
          showUser={showUser}
          setShowUser={setShowUser}
          toggleUsers={toggleUsers}
        />
      )}
    </div>
  );
};
