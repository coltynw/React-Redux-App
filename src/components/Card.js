import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getCard } from '../actions';

const Card = props => {
  return (
    <div>
      <h1>Shiba fetcher</h1>
      <button onClick={props.getCard}>Click button for Doggo</button>
      {!props.card && !props.isFetching && <p>Dog will apear here</p>}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {/* {props.isFetching && (
        <p>{props.card}</p>
      )} */}
      
      {/* {props.card && <div>{props.card}</div> } */}
      <br/>
      {props.card && <img src={props.card} alt='dog'/>}
      {props.card && <p>{props.status}</p> }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    card: state.card,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getCard }
)(Card);
