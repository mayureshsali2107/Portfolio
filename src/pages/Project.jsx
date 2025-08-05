import React, { useEffect, useState } from 'react';

function Projects() {
  const [count, setCount] = useState(100);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [total, setTotal] = useState(0); // total cart price

  // Increment and show total cart price
  const countUp = () => {
    setCount(prevCount => {
      const newCount = prevCount * 2;

      const totalCartPrice = cart.reduce((sum, item) => sum + item.price, 0);
      setTotal(totalCartPrice);

      return newCount;
    });
  };

  const countDown = () => {
    setCount(prevCount => prevCount / 2);
  };

  const handleAddToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar */}
      <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-2xl font-bold">🛒 My Store</h1>
        
      

      {/* ✅ Cart Items */}
      {cart.length > 0 && (
        <div className=" border-b p-4">
          <h2 className="text-lg font-semibold mb-2">🛍 Cart ({cart.length}):{countUp}</h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.title} - ${item.price}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      </header>

      {/* ✅ Counter & Total Price */}
      <div className="p-4 flex flex-col items-center gap-2">
        <div>
          <button
            className="border px-5 py-2 m-2 bg-amber-500 hover:bg-amber-600 rounded"
            onClick={countUp}
          >
            Increment
          </button>
          <button
            className="border px-5 py-2 m-2 bg-red-400 hover:bg-red-500 rounded"
            onClick={countDown}
          >
            Decrement
          </button>
        </div>

        {total > 0 && (
          <div className="text-green-700 text-lg font-semibold">
            💰 Total Cart Price: ${total.toFixed(2)}
          </div>
        )}
      </div>

      {/* ✅ Search Bar */}
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 w-full max-w-md rounded shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ✅ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition-all">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mx-auto mb-2"
              />
              <p className="text-sm mb-2">{item.description.slice(0, 100)}...</p>
              <p className="font-bold text-green-700">${item.price}</p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className=" mt-1.5border-none px-5 py-2 bg-blue-400 hover:bg-blue-500 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;







