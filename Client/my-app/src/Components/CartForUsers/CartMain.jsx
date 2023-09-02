import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import("./CartMain.css");

function CartMain() {
  const [first, setFirst] = useState([]);
  const history = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3055/get");
      console.log(response.data);
      setFirst(response.data);
    } catch (error) {
      console.log("Error on fetching data");
    }
  };

  const addToCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3055/cartcreate",
        data
      );
      console.log("add to cart response", response);
      history("/cart");
    } catch (error) {
      console.log("errorrrss", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddToCart = (item) => {
    console.log("cart item", item);
    const temp = {
      Product: item.BookName,
      Price: item.Price,
      Quantity: 1,
      Total: item.Price,
    };
    console.log("item temp", temp);
    addToCart(temp);
  };

  return (
    <div className="mains">
      {first.map((display) => (
        <Card
          key={display.id}
          style={{
            width: "20rem",
            backgroundImage: "none",
            height: "30rem",
            borderRadius: "5%",
            boxShadow: "50%",
          }}
          className="bg-success new "
        >
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
          />
          <Card.Body>
            <Card.Title>{display.BookName}</Card.Title>
            <Card.Text>{display.Author}</Card.Text>
            <Card.Text>₹ {display.Price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                AddToCart(display);
              }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CartMain;
