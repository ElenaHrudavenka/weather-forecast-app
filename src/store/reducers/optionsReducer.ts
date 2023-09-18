import { v4 as uuidv4 } from 'uuid';

export type UnitValueVariantsType = {
  id: string;
  shortName: string;
  fullName: string;
};

export type UnitType = {
  id: string;
  name: string;
  description: string;
  defaults: number;
  unitValueVariants: Array<UnitValueVariantsType>;
};
const initialState: Array<UnitType> = [
  {
    id: uuidv4(),
    name: 'temperature',
    description: 'Temperature units:',
    defaults: 0, //'C'
    unitValueVariants: [
      {
        id: uuidv4(),
        shortName: 'C',
        fullName: 'Celsius',
      },
      {
        id: uuidv4(),
        shortName: 'K',
        fullName: 'Kelvin',
      },
      {
        id: uuidv4(),
        shortName: 'F',
        fullName: 'Fahrenheit',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'wind_gusts',
    description: 'Wind gusts units:',
    defaults: 3, //'m/s'
    unitValueVariants: [
      {
        id: uuidv4(),
        shortName: 'bft',
        fullName: 'Beaufort',
      },
      {
        id: uuidv4(),
        shortName: 'km/h',
        fullName: 'Kilometers/hour',
      },
      {
        id: uuidv4(),
        shortName: 'kn',
        fullName: 'Knots',
      },
      {
        id: uuidv4(),
        shortName: 'm/s',
        fullName: 'Meters/second',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'pressure',
    description: 'Pressure units:',
    defaults: 1, //'Pa'
    unitValueVariants: [
      {
        id: uuidv4(),
        shortName: 'hPa',
        fullName: 'Hectopascal',
      },
      {
        id: uuidv4(),
        shortName: 'Pa',
        fullName: 'Pascal',
      },
    ],
  },
];
export type OptionActionType = any;
export const optionsReducer = (state = initialState, action: OptionActionType) => {
  switch (action.type) {
    case 'OPTION/SET-OPTION': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export const setOptions = (nameRadioGroup: string, defaults: number) =>
  ({ type: 'OPTION/SET-OPTION', nameRadioGroup, defaults } as const);
