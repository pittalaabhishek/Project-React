import React from 'react';

function ProductList(props) {
    const printProductName = (product) => {
        console.log(product.name)
      }

      return (
        <div>
          <div>
            <header>
              <h1>Products list</h1>
            </header>
          </div>
          <ol>
            {props.products.map((product) => (
              <div>
                <li key={product.id}>{product.name} is {product.price}</li><button onClick={() => printProductName(product)}>Buy</button>
              </div>
            ))}
          </ol>
        </div>
      );
}
export {ProductList};