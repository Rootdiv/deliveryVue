export default `
  query getBanners($limit: Int) {
    allBanners(limit: $limit) {
      id,
      image,
    }
  }
`;
