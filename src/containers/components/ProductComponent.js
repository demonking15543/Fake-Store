import React  from "react";

import  { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
const ProductComponent = () =>{
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title,image, price, category } = product;
        return (
            
                <div className="col-12 col-md-4 mb-4">
                <div className="card mb-3 h-100" style={{width: "540px;"}} key={id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <Link to={`/product/${id}`}>
                      <img src={image} className="img-fluid rounded-start" alt={title} />
                      </Link>
                     </div>
                    <div className="col-md-8">
                      <div className="card-body">

                        <h5 className="card-title">
                            <Link to={`/product/${id}`} className="link-secondary" style={{textDecoration:"none"}}>{title}</Link>
                             </h5>
                        <p className="card-text">$ {price}</p>
                        <p className="card-text"><small className="text-muted">{category}</small></p>
                      </div>
                    </div>
                </div>
            </div>
            

                </div>
        
            
        );
    })
return <>{renderList}</>;

    
}

export default ProductComponent;