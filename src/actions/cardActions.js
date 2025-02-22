import axios from 'axios';
// import thunk from 'redux-thunk';

export const FETCH_CARD_START = 'FETCH_CARD_START';
export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE';


// async action creator
export const getCard = () => dispatch => {
  dispatch({ type: FETCH_CARD_START });
  axios
     .get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
    // .get('https://dog.ceo/api/breeds/image/random')
    // .get('https://cat-fact.herokuapp.com')
    // console.log(action.payload)
    .then(res => {
        console.log(res.data)
      dispatch({ type: FETCH_CARD_SUCCESS, payload: res.data });
    })
    .then(res => {
        // console.log(res.data.status)
      dispatch({ type: FETCH_CARD_SUCCESS, payload: res.data.status });
    })
    .catch(err => {
      dispatch({ type: FETCH_CARD_FAILURE, payload: err.response });
    });
    // .catch(err => {
    // return res.status(500).json({ type: 'error', message: err.message });
    // });
};

// const getcard = () => {
//   return dispatch => {
//     dispatch({ type: 'FETCH_CARD_START' });
//   };
// };
