import React, {useContext, useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactStars from "react-stars";
import './index.css';
import CartContext from "../context/cart";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function MediaCard({ product, viewDetails }) {
  const {cart, setCart} = useContext(CartContext);
  const [open, setOpen] = useState(false);

  

    
    const addToCart = () => {
      
      const cartData = JSON.parse(localStorage.getItem("cart")) || [] ;
      cartData.push({...product, qty: 1});
      localStorage.setItem("cart", JSON.stringify(cartData));
      setCart(cartData);
      setOpen(true) 
    }
  
  
return (
    <Card sx={{ width: 250, marginTop: 4, position:"relative", paddingBottom: 4 }}>
      <div>
        <img
          style={{ width: "100%", height: 240, objectFit: "contain" }}
          src={product.image}
          alt=""
        />
      </div>

      <Snackbar open={open} autoHideDuration={2000} onClose={()=>setOpen(false)}>
        <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Product added in cart
        </Alert>
      </Snackbar>
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Rs {product.price}
        </Typography>
        <Typography gutterBottom variant="span" component="div">
          {product.title.slice(0, 28)}...
        </Typography>
        <ReactStars
          edit={false}
          value={product.rating.rate}
          count={5}
          size={18}
          color2={"#ffd700"}
        />
      </CardContent>
      <CardActions className="card-btns">
        <Button onClick={addToCart} style={{backgroundColor:'#8bc34a', color:"#fff", }} size="small">ADD TO CART</Button>
        <Button onClick={()=> viewDetails(product.id)}
         className="view-detail-btn" size="small">VIEW DETAILS</Button>

      </CardActions>
    </Card>
  );
}
