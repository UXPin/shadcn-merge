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

// Image.propTypes = {
//   /**
//    * image src URL of the image... required
//    * @uxpincontroltype image
//    */
//   src: PropTypes.string.isRequired,
//   /**
//    * The height of the image
//    */
//   height: PropTypes.string,
//   /**
//    * The width of the image
//    */
//   width: PropTypes.string,
//   /**
//    * How the image should be resized to fit its container.
//    */

//   fit: PropTypes.oneOf([
//     'contain',
//     'cover',
//     'fill',
//     'none',
//     'scale-down',
//     'inherit',
//     'initial',
//     'revert',
//     'revert-layer',
//     'unset',
//   ]),

//   /**
//    * The number in milliseconds the image takes to fade in.
//    */
//   duration: PropTypes.number,

//   /**
//    * The easing of the fade in transition of the image.
//    */
//   easing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out']),

//   /**
//    * The direction to shift the image as it appears.
//    */
//   shift: PropTypes.oneOf(['left', 'right', 'top', 'bottom', false, null]),

//   /**
//    * The distance (with unit) of the image to shift the image as it appears.
//    */
//   distance: PropTypes.string,

//   /**
//    * The number of milliseconds the shift takes
//    */
//   shiftDuration: PropTypes.number,

//   /**
//    * Show loading icon
//    */
//   // showLoading: PropTypes.bool,

//   /**
//    * image alt tag value
//    */
//   alt: PropTypes.string,
//   /**
//    * image title tag value
//    */
//   title: PropTypes.string,

//   /**
// * CSS class for the image

// */
//   className: PropTypes.string,

//   /**
//    * the color the image transitions in from
//    */
//   onLoad: PropTypes.func,

//   // style: PropTypes.object,

//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
//    */

//   sx: PropTypes.object,
// };
