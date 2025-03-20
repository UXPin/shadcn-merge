import React from 'react';
import PropTypes from 'prop-types';
import { AvatarImage as AvatarImageM } from '../ui/avatar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/avatar
 * @uxpindescription The image component for Avatar, displaying the user profile picture.
 */
const AvatarImage = ({ src, alt, className, ...props }) => {
  return <AvatarImageM src={src} alt={alt} className={className} {...props} />;
};

AvatarImage.propTypes = {
  /** Alternative text for the avatar image */
  alt: PropTypes.string,

  /** Additional class names for styling */
  className: PropTypes.string,

  /** Image source URL
   * @uxpincontroltype image
   */
  src: PropTypes.string.isRequired,
};

export default AvatarImage;
