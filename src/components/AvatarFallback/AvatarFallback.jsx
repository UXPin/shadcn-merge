import React from 'react';
import PropTypes from 'prop-types';
import { AvatarFallback as AvatarFallbackM } from '../ui/avatar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/avatar
 * @uxpindescription A fallback component displayed when the Avatar image fails to load.
 */
const AvatarFallback = ({ children, className, ...props }) => {
  return (
    <AvatarFallbackM className={className} {...props}>
      {children}
    </AvatarFallbackM>
  );
};

AvatarFallback.propTypes = {
  /** The fallback text or content to display when the avatar image is unavailable */
  children: PropTypes.node,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default AvatarFallback;
