import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderInput() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='text-sm px-4 py-2 bg-yellow-100 rounded-full placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:ring focus:outline-none focus:ring-yellow-500'
      />
    </form>
  );
}

export default OrderInput;
