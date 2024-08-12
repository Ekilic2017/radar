export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: "34.668286",
      bl_lng: "24.943013",
      tr_lat: "43.540389",
      tr_lng: "44.827639",
      limit: "300",
    },
    headers: {
      'x-rapidapi-key': '74883c6017mshfd9b34233041822p187e6fjsn140e7142916f',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    },
  };
  export const dOptions= {
    headers:{
    'x-rapidapi-key': '74883c6017mshfd9b34233041822p187e6fjsn140e7142916f',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  }
  }
