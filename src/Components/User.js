import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Link to={`/details/${user.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default User;
