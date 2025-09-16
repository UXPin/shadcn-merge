import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton as SkeletonM } from '../ui/skeleton';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/skeleton
 * @uxpindescription Displays a loading placeholder resembling the shape of the content.
 */
const Skeleton = ({ className, ...props }) => {
  return <SkeletonM className={className} {...props} />;
};

Skeleton.propTypes = {
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default Skeleton;
