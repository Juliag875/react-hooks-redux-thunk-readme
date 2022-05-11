// Action Creators
export function fetchAstronauts(astronauts) {
  return {
    type: "astronauts/astronautsLoaded",
    payload: astronauts,
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle", //loading status for fetch
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        sttatus: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      }

    default:
      return state;
  }
}
