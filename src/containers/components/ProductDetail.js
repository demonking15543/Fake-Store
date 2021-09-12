import axios from "axios";
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct, removeSelectedProduct } from "../redux/action/productActions";
import style from './productDetail.css';


const ProductDetail = () =>{
    const product = useSelector(state => state.product);
    const {
        
        image, 
        title, 
        id, 
        price, 
        category, 
        description 
    } = product;
    
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    console.log(product);


    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((errr)=>{
            console.log("error", errr);
        });
        dispatch(selectedProduct(response.data));

    };
    useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }

    
    }, [productId])
    return(
        <div class="container mt-5">
		<div class="card1" key={id}>
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={image} height="300" /></div>
						  		</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={image} /></a></li>
						  
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{title}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">{description}</p>
						<h4 class="price">current price: <span>${price}</span></h4>
						<h5 class="sizes">Category:
							<span class="size" data-toggle="tooltip" title="small">{category}</span>
							
						</h5>
						
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    )
}

export default ProductDetail;