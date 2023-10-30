
import {  useEffect ,useState} from 'react';
import '../src/Products.css'

import axios from'axios'

import { useNavigate } from "react-router-dom";
const Products = () => {

    const [data, setdata] = useState([])



    const nav = useNavigate()

const productFetchHandler = async()=>{

    try {
        const response = await axios.get(
          "http://localhost:4743/products",
          
        );
        console.log("response",response.data.data)
        setdata(response.data.data)
  
       
      } catch (error) {
        console.log(" product fetch  error", error);
      }
   

}

useEffect(()=>{

productFetchHandler()
},[])


  return (
    <div className="main_contaner">

        <div className="nav_container">

            <h3>flipkart</h3>

            <input type="text" />



        </div>
        <div className="catption">

      <h2>Products</h2>
        </div>

      <div className="products_container">
       {data && data.map((item,index)=>(
        <>
        <div onClick={() => nav(`/viewproducts/${item._id}`)} key={index} className="product">
            <img src={item.images[0].url}alt="" />
             <h4> {item.productName}</h4>
             <h2>price : ₹ {item.price}</h2>


        </div>
        </>
        ))}
       
      </div>
    </div>
  );
};

export default Products;
