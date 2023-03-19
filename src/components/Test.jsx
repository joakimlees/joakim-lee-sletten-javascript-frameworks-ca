import { API_ONLINE_SHOP_URL } from "../api/constant";
import React, { useEffect, useState } from "react";

export function Test() {
  const [products, setProducts] = useState([]);

  // The useEffect will run once when the component first mounts
  useEffect(() => {
    // Function that gets our posts
    async function getData() {
      const response = await fetch(API_ONLINE_SHOP_URL);
      const json = await response.json();
      // Setting our `posts` state to the API data we received
      setProducts(json);
    }
    getData();
  }, []);

  return (
    <article>
      {products.map(product => (
        <div>
          {console.log(product)}
          <div>
            <img src={product.imageUrl} alt={"image of " + product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <div>
              {product.tags.map(tag => (
                <div>
                  <div>{tag}</div>
                </div>
              ))}
            </div>
            <div>
              <div>{product.price}</div>
              <div>{product.discountedPrice}</div>
            </div>
            <div>
              <p>{product.description}</p>
              <div>{product.rating}</div>
              <div>
                {product.reviews.map(reviews => (
                  <div>
                    <div>{reviews.username}</div>
                    <div>{reviews.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
}
