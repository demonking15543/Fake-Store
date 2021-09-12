import React, { useEffect }  from "react";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from "./ProductComponent";
import { setProducts } from '../redux/action/productActions'
const ProductList = () =>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error", err)
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    }, []);
    console.log("products: ",products)
    return(

        < >
        <div className="container">
            <div className="row" style={{marginTop:"5rem", marginBottom:"3rem"}}>
            <ProductComponent />

            </div>

                
        </div>
        </>

       



    )
}

export default ProductList;