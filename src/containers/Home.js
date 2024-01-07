import DrawerAppBar from "../components/AppBar";
import BasicModal from "../components/BasicModal";
import MediaCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    axios("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
  }, []);
  
  const viewDetails = (id) => {
    axios(`https://fakestoreapi.com/products ${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  }

  console.log("products", products);
  return (
    <div style={{ padding: 20 }}>
      <DrawerAppBar />
      <BasicModal open={open} handleClose={()=>setOpen(false)}/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((v, i) => {
          return <MediaCard viewDetails={viewDetails} product={v} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Home;
