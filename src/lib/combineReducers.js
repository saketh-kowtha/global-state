import zip from "../utils/zip";

export default function combineReducers(reducers) {
  return (state, action) => {
    const _reducers = Object.keys(reducers);
    const _state = Object.keys(reducers).map((reducer) => {
      return reducers[reducer](state[reducer], action);
    });

    return zip(_reducers, _state);
  };
}
