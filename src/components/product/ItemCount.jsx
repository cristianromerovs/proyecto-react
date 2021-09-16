import React, { useState } from 'react';
import './product.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumarProducto = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restarProducto = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const agregarProducto = () => {
    //onAdd(count);
    if (count > 1) {
      console.log(count + ` Productos Agregados`);
    } else {
      console.log(count + ` Producto Agregado`);
    }
  };
  return (
    <div className="add__cart">
      <div className="controls">
        <button className="btn__control" onClick={restarProducto}>
          -
        </button>
        <span className="show">{count}</span>
        <button className="btn__control" onClick={sumarProducto}>
          +
        </button>
      </div>
      <button className="btn__agregar" onClick={agregarProducto}>
        Agregar Productos
      </button>
    </div>
  );
};

export default ItemCount;