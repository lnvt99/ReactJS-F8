import { useState, useMemo, useRef } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName('');
    setPrice('');

    nameRef.current.focus();
  };

  //   console.log(products)
  const totalPrice = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <input ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
      <button onClick={handleSubmit}>Add</button> <br />
      Total: {totalPrice}
      <ul>
        {products.map((product, item) => (
          <div>
            <li key={item}>
              {product.name} - {product.price}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
