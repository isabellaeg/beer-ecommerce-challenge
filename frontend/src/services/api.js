const API_BASE_URL = 'http://localhost:3001/api';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    window.alert(`Error: ${error.message}`);
    throw error;
  }
};

export const fetchStockPrice = async (sku) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stock-price/${sku}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch stock price for SKU: ${sku}`);
    }
    return await response.json();
  } catch (error) {
    window.alert(`Error: ${error.message}`);
    throw error;
  }
};
