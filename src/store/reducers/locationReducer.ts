import {
  CityGeolocationResponseType,
  CurrentCoordinatesType,
  CurrentGeolocationResponseType,
  LocationStateType,
} from './locationReducer.types';
import { AppThunkType } from '../store';
import { AppAPI } from '../../api/api';
import { error } from 'console';

const currentCoordinates: CurrentCoordinatesType = {
  accuracy: null,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: null,
  longitude: null,
  speed: null,
};
const cityGeolocation: CityGeolocationResponseType = {
  results: [
    {
      datasource: {
        sourcename: '',
        attribution: '',
        license: '',
        url: '',
      },
      old_name: '',
      country: '',
      country_code: '',
      city: '',
      lon: null,
      lat: null,
      formatted: '',
      address_line1: '',
      address_line2: '',
      category: '',
      timezone: {
        name: '',
        offset_STD: '',
        offset_STD_seconds: null,
        offset_DST: '',
        offset_DST_seconds: null,
      },
      plus_code: '',
      plus_code_short: '',
      result_type: '',
      rank: {
        importance: null,
        popularity: null,
        confidence: null,
        confidence_city_level: null,
        match_type: '',
      },
      place_id: '',
      bbox: {
        lon1: null,
        lat1: null,
        lon2: null,
        lat2: null,
      },
    },
  ],
  query: {
    text: '',
    parsed: {
      city: '',
      expected_type: '',
    },
  },
};
const locationData: CurrentGeolocationResponseType = {
  geometry: {
    type: '',
    coordinates: [],
  },
  properties: {
    address_line1: '',
    address_line2: '',
    city: '',
    country: '',
    country_code: '',
    county: '',
    datasource: {
      sourcename: '',
      attribution: '',
      license: '',
    },
    distance: null,
    district: '',
    formatted: '',
    housenumber: '',
    lat: null,
    lon: null,
    place_id: '',
    plus_code: '',
    postcode: '',
    rank: {
      popularity: null,
    },
    result_type: '',
    state: '',
    street: '',
    timezone: {
      abbreviation_DST: '',
      abbreviation_STD: '',
      name: '',
      offset_DST: '',
      offset_DST_seconds: null,
      offset_STD: '',
      offset_STD_seconds: null,
    },
  },
  type: '',
};

const initialState: LocationStateType = {
  //currentCoordinates,
  //locationData,
  city: '',
  country: '',
  formatted: '',
  latitude: null,
  longitude: null,
  address_line1: '',
  address_line2: '',
  country_code: '',
  error: '',
};
export const locationReducer = (state = initialState, action: LocationActionType) => {
  switch (action.type) {
    case 'LOCATION/SET-CURRENT-COORDINATES': {
      return {
        ...state,
        latitude: action.coordinates.latitude,
        longitude: action.coordinates.longitude,
      };
    }
    case 'LOCATION/SET-CURRENT-LOCATION': {
      return {
        ...state,
        city: action.response.properties.city,
        country: action.response.properties.country,
        formatted: action.response.properties.formatted,
        address_line1: action.response.properties.address_line1,
        address_line2: action.response.properties.address_line2,
        country_code: action.response.properties.country_code,
      };
    }
    case 'LOCATION/SET-CITY-LOCATION': {
      return {
        ...state,
        city: action.response.results[0].city,
        country: action.response.results[0].country,
        formatted: action.response.results[0].formatted,
        latitude: action.response.results[0].lat,
        longitude: action.response.results[0].lon,
        address_line1: action.response.results[0].address_line1,
        address_line2: action.response.results[0].address_line2,
        country_code: action.response.results[0].country_code,
      };
    }
    default:
      return state;
  }
};
export const setCurrentCoordinates = (coordinates: CurrentCoordinatesType) =>
  ({
    type: 'LOCATION/SET-CURRENT-COORDINATES',
    coordinates,
  } as const);

export const setCurrentLocation = (response: CurrentGeolocationResponseType) =>
  ({
    type: 'LOCATION/SET-CURRENT-LOCATION',
    response,
  } as const);

export const setCityLocation = (response: CityGeolocationResponseType) =>
  ({
    type: 'LOCATION/SET-CITY-LOCATION',
    response,
  } as const);

export const getLocation =
  (latitude: number, longitude: number): AppThunkType =>
  (dispatch) => {
    AppAPI.getCurrentLocation(latitude, longitude).then((resData) => {
      dispatch(setCurrentLocation(resData.features[0]));
      console.log(resData.features[0]);
    });
  };

export const getCityLocation =
  (cityName: string): AppThunkType =>
  (dispatch) => {
    AppAPI.getLocationOfCity(cityName)
      .then((resData) => {
        console.log(cityName);
        console.log(resData);
      })
      .catch((error) => console.log(error));
  };
export type LocationActionType =
  | ReturnType<typeof setCurrentCoordinates>
  | ReturnType<typeof setCurrentLocation>
  | ReturnType<typeof setCityLocation>;
