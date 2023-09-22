export type CurrentCoordinatesType = {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
};

export type CurrentGeolocationResponseType = {
  geometry: {
    type: string;
    coordinates: [];
  };
  properties: {
    address_line1: string;
    address_line2: string;
    city: string;
    country: string;
    country_code: string;
    county: string;
    datasource: {
      sourcename: string;
      attribution: string;
      license: string;
    };
    distance: number | null;
    district: string;
    formatted: string;
    housenumber: string;
    lat: number | null;
    lon: number | null;
    place_id: string;
    plus_code: string;
    postcode: string;
    rank: {
      popularity: number | null;
    };
    result_type: string;
    state: string;
    street: string;
    timezone: {
      abbreviation_DST: string;
      abbreviation_STD: string;
      name: string;
      offset_DST: string;
      offset_DST_seconds: number | null;
      offset_STD: string;
      offset_STD_seconds: number | null;
    };
  };
  type: string;
};
export type descriptionCity = {
  datasource: {
    sourcename: string;
    attribution: string;
    license: string;
    url: string;
  };
  old_name: string;
  country: string;
  country_code: string;
  city: string;
  lon: number | null;
  lat: number | null;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: {
    name: string;
    offset_STD: string;
    offset_STD_seconds: number | null;
    offset_DST: string;
    offset_DST_seconds: number | null;
  };
  plus_code: string;
  plus_code_short: string;
  result_type: string;
  rank: {
    importance: number | null;
    popularity: number | null;
    confidence: number | null;
    confidence_city_level: number | null;
    match_type: string;
  };
  place_id: string;
  bbox: {
    lon1: number | null;
    lat1: number | null;
    lon2: number | null;
    lat2: number | null;
  };
};
export type CityGeolocationResponseType = {
  results: Array<descriptionCity>;
  query: {
    text: string;
    parsed: {
      city: string;
      expected_type: string;
    };
  };
};

export type LocationStateType = {
  // currentCoordinates: CurrentCoordinatesType,
  // locationData: CurrentGeolocationResponseType,
  address_line1: string;
  address_line2: string;
  city: string;
  country: string;
  formatted: string;
  latitude: number | null;
  longitude: number | null;
  country_code: string;
  error: string;
};
