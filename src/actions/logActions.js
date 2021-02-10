import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

// export const getLogs = () => {
//   return async (dispatche) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatche({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Get logs from serves
export const getLogs = () => async (dispatche) => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatche({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatche({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatche) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatche({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatche({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatche) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatche({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatche({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Update log on server
export const updateLog = (log) => async (dispatche) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatche({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatche({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
