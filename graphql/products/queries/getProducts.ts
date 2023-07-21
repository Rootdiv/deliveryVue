export default `
  query getProducts($code: String, $limit: Int) {
    allProducts(code: $code, limit: $limit) {
      id,
      title,
      description,
      image,
      weight,
      price,
      code
    }
  }
`;
