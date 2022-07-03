import streams from "../../apis/streams";

// setting user sign-in in store
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

// setting user sign-out in store
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

// creating stream and saving data in store and json-server through axios
export const createStream = (formValues) => {
  return async (dispatch) => {
    const response = await streams.post("/streams", formValues);

    dispatch({ type: "CREATE_STREAM", payload: response.data });
  };
};

// getting list of streams on json-server
export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");

    dispatch({ type: "FETCH_STREAMS", payload: response.data });
  };
};

// getting single stream from json-server
export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: "FETCH_STREAM", payload: response.data });
  };
};

// deleting a certain stream from json-server
export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: "DELETE_STREAM", payload: id });
  };
};

// Edit a certain stream from json-server
export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({ type: "EDIT_STREAM", payload: response.data });
  };
};
