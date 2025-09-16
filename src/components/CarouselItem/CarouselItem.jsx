import React from 'react';
import PropTypes from 'prop-types';
import { CarouselItem as CarouselItemM } from '../ui/carousel';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/carousel
 * @uxpindescription Individual item in the carousel track.
 */
const CarouselItem = ({ children, className, ...props }) => {
  return (
    <CarouselItemM className={className} {...props}>
      {children}
    </CarouselItemM>
  );
};

CarouselItem.propTypes = {
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Slide content. */
  children: PropTypes.node,
};

export default CarouselItem;
