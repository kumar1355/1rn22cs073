
const mockProducts = [
  {
    productId: 1,
    productName: "Mock Product 1",
    price: 100,
    rating: 4.5,
    discount: "10%",
    availability: "In Stock"
  },
  {
    productId: 2,
    productName: "Mock Product 2",
    price: 200,
    rating: 4.0,
    discount: "15%",
    availability: "Out of Stock"
  },
]
 

const ApiService = {
  getProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 500); 
    });
  },

  getProduct: (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.productId === Number(productId));
        if (product) {
          resolve(product);
        } else {
          reject(new Error("Product not found"));
        }
      }, 500);
    });
  }
};

export default ApiService;
