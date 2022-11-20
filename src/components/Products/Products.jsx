import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "shoes",
//     description: "running shoes",
//     price: "$5",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 2,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 3,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 4,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 5,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 6,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 7,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 8,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
//   {
//     id: 9,
//     name: "computer",
//     description: "Apple macbook",
//     price: "$15",
//     image: "https://m.media-amazon.com/images/I/51ZisqeSm5L._AC_SX425_.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify-content="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
