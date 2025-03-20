import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as AvatarM } from '../ui/avatar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/avatar
 * @uxpindescription A circular avatar component used to display user profile pictures.
 */
const Avatar = ({ className, children, ...props }) => {
  return (
    <AvatarM className={className} {...props}>
      {children}
    </AvatarM>
  );
};

Avatar.propTypes = {
  /** The child components (AvatarImage, AvatarFallback) inside the Avatar container */
  children: PropTypes.node,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default Avatar;
