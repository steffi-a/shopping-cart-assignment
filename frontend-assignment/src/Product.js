import './Product.css';
import React, { useEffect, useState } from "react";
import NavigationBar from "./components/navigation/navigation";
import ProductBanner from './components/productBanner/productBanner';
import Sidebar from './components/sidebar/sidebar.js';
import products from './server/products/index.get.json';
import { useParams } from "react-router-dom";
function Product(){
    const params = useParams();
    console.log('params',params);
    const [product, setProduct] = useState(products);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        console.log("hii");
        if (params?.id) {
          const filteredData = products.filter((e) => e.category === params.id);
          console.log("Filtered DAta", filteredData);
          setProduct(filteredData);
          setSelected(params.id);
        }
      }, [params]);

    const handleChangeCatogery = (id) => {
        console.log(id);
        const filteredData = products.filter((e) => e.category === id);
        setProduct(filteredData);
        setSelected(id);
        console.log('products--',filteredData);
      };
    return(
        <div>
            <NavigationBar/>
            <div class='product-banner-container'>
                <Sidebar
                selected={selected}
                setSelected={(e) => handleChangeCatogery(e)}
                />
                <div class='product-details-container'>
                    {product?.map((data)=>(
                        <ProductBanner name={data.name}
                        desc={data.description}
                        img={data.imageURL}
                        price={data.price}
                        id={data.id}
                        />
                        
                        //console.log(data)
                    ))

                    }
                    
                    
                </div>
            </div>
        
        </div>
    )
}

export default Product;