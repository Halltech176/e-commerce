import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  Grid,
  Avatar,
  Typography,
  Box,
  CircularProgress,
  CardContent,
  IconButton,
  CardHeader,
} from "@mui/material";
import "./Products.css";

import { MdMoreVert } from "react-icons/md";
// import { ThemeProvider } from "styled-components";


const Products = () => {
  const products = useSelector((state) => state.products.products);

  console.log(products)
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <Grid mb ={5} sx ={{maxWidth : '300px'}} className="items" item key={id} xs={12} sm={4} md={3}>

        <Card elevation ={3}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "skyblue" }}>{title.charAt(0)}</Avatar>
            }
            action={
              <IconButton>
                <MdMoreVert />
              </IconButton>
            }
          />
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography variant="body1">{title}</Typography>
          </CardContent>
          <CardContent>${price}</CardContent>
        </Card>
      </Grid>
    );
  });


  return (
    <div>
        {
            products.length ?     <Grid container spacing={3}>
            {renderList}
          </Grid>: <Box className ='loader'>
            <CircularProgress/>
          </Box>
        }
    </div>
  );
};

export default Products;
