import {CurrentCoordinatesType, LocationResponseType, LocationStateType} from "./locationReducer.type";
import {AppThunkType} from "../store";
import {AppAPI} from "../../api/api";

const currentCoordinates: CurrentCoordinatesType = {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
}
const locationData: LocationResponseType = {
    geometry: {
        type: '',
        coordinates: []
    },
    properties: {
        address_line1: "",
        address_line2: "",
        city: "",
        country: "",
        country_code: "",
        county: "",
        datasource: {
            sourcename: '',
            attribution: '',
            license: '',
        },
        distance: null,
        district: "",
        formatted: "",
        housenumber: "",
        lat: null,
        lon: null,
        place_id: "",
        plus_code: "",
        postcode: "",
        rank: {
            popularity: null,
        },
        result_type: "",
        state: "",
        street: "",
        timezone: {
            abbreviation_DST: "",
            abbreviation_STD: "",
            name: "",
            offset_DST: "",
            offset_DST_seconds: null,
            offset_STD: "",
            offset_STD_seconds: null,
        },
    },
    type: "",
}

const initialState: LocationStateType = {
    currentCoordinates,
    locationData,
    error: '',
}
export const locationReducer = (state = initialState, action: LocationActionType) => {
    switch (action.type) {
        case 'LOCATION/SET-CURRENT-COORDINATES': {
            return {
                ...state, currentCoordinates: action.coordinates
            }
        }
        case 'LOCATION/SET-CURRENT-LOCATION': {
            return {
                ...state, locationData: action.response
            }
        }
        default:
            return state
    }
};
export const setCurrentCoordinates = (coordinates: CurrentCoordinatesType) => ({
    type: 'LOCATION/SET-CURRENT-COORDINATES',
    coordinates,
} as const);

export const setCurrentLocation = (response: LocationResponseType) => ({type: 'LOCATION/SET-CURRENT-LOCATION', response} as const)

export const getLocation = (latitude: number, longitude: number): AppThunkType => (dispatch) => {
    AppAPI.getCurrentLocation(latitude, longitude)
        .then((resData) => {
            dispatch(setCurrentLocation(resData.features[0]));
            console.log(resData.features[0])
        })
}

export type LocationActionType = ReturnType<typeof setCurrentCoordinates>
    | ReturnType<typeof setCurrentLocation>