import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia component="img" alt="product_image" image={product.image} />
      <CardContent>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>

          <Typography variant="h5" component="h2">
            {product.price}
          </Typography>
        </div>

        <Typography
          gutterBottom
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
