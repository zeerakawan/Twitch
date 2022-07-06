import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      // .mapkeys is a lodash func which maps arrays into objects with making the second pram as a key
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "CREATE_STREAM":
      // mentioned {[] = statement} creates a key of a value out of the value in the object
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
