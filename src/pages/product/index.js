import React, { useState, useEffect } from 'react';
import { authService } from '../../services';
import Cards from '../../components/cards/index';
import './style.css';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);

  const getProduct = () => {
    authService
      .getProduct()
      .then((res) => {
        console.log(res);
        setDataProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Product Page!</h1>
      <div className="product-wrapper">
        {dataProduct.map((product) => {
          return (
            <Cards key={[product.id]}>
              <h1>{product.description}</h1>
              <div className="diskon-wrapper">
                <div className="diskon-wrapper__percentage">
                  {product.display_promo_price_percentage}
                </div>
                <span className="harga-produk">
                  {product.display_normal_price}
                </span>
              </div>
              <h3 className="harga-produk-terdiskon">
                {product.display_price}
              </h3>
              <p>{product.name}</p>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
