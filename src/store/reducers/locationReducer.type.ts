export type CurrentCoordinatesType = {
    accuracy: number | null,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    latitude: number | null,
    longitude: number | null,
    speed: number | null,
}

export type LocationResponseType = {
    geometry: {
        type: string,
        coordinates: []
    },
    properties: {
        address_line1: string,
        address_line2: string,
        city: string,
        country: string,
        country_code: string,
        county: string,
        datasource: {
            sourcename: string,
            attribution: string,
            license: string,
        },
        distance: number | null,
        district: string,
        formatted: string,
        housenumber: string,
        lat: number | null,
        lon: number | null,
        place_id: string,
        plus_code: string,
        postcode: string,
        rank: {
            popularity: number | null,
        },
        result_type: string,
        state: string,
        street: string,
        timezone: {
            abbreviation_DST: string,
            abbreviation_STD: string,
            name: string,
            offset_DST: string,
            offset_DST_seconds: number | null,
            offset_STD: string,
            offset_STD_seconds: number | null,
        },
    },
    type: string,
}

export type LocationStateType = {
    currentCoordinates: CurrentCoordinatesType,
    locationData: LocationResponseType,
    error: string,
}