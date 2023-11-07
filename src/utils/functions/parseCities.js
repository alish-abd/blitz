export default function parseCities(arr) {
  if (arr.length > 0) {
    return arr.map((city) => {
      return {
        id: city.id,
        name: city.name,
        region: city.region,
        value: city.id,
      };
    });
  } else {
    return [];
  }
}
