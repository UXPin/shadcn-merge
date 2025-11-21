// Image/Image.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 * @uxpindescription A simple Image component that renders an image with various configurable properties.
 * @uxpinhtmloutput
 */
const Image = (props) => {
  return (
    <img
      {...props}
      alt={props.alt}
      style={{
        'object-fit': props.fit,
        width: props.width,
        height: props.height,
        ...(props.style || {}),
      }}
    />
  );
};

Image.propTypes = {
  /** Alternative text description for the image */
  alt: PropTypes.string,

  /**
   * image src URL of the image... required
   * @uxpincontroltype image
   */
  src: PropTypes.string.isRequired,

  /**
   * The height of the image
   */
  height: PropTypes.string,
  /**
   * The width of the image
   */
  width: PropTypes.string,
  /**
   * How the image should be resized to fit its container.
   */

  fit: PropTypes.oneOf([
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]),
};

export default Image;
