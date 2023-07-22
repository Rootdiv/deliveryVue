export default `
  query getPromotions($limit: Int) {
    allPromotions(limit: $limit) {
      id,
      image,
      title,
      description,
      time
    }
  }
`;
