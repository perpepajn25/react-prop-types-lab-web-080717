import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div>
        <h1> Name: {this.props.name} </h1>
        <p> Producer: {this.props.producer} </p>
        <p> hasWatermark: {this.props.hasWatermark} </p>
        <p> Color: {this.props.color} </p>
        <p> Weight: {this.props.weight} </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function range(start, stop, step){
  var a=[start], b=start;
  while(b<stop){b+=step;a.push(b)}
  return a;
};

const weightRange = range(80,300,1)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
};

export default Product
