import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContent as CarouselContentM } from '../ui/carousel';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/carousel
 * @uxpindescription Container for carousel items, handles orientation and layout.
 */
const CarouselContent = ({ children, className, ...props }) => {
  return (
    <CarouselContentM className={className} {...props}>
      {children}
    </CarouselContentM>
  );
};

CarouselContent.propTypes = {
  /** Additional className for styling. */
  className: PropTypes.string,
  /** Carousel items as children. */
  children: PropTypes.node,
};

export default CarouselContent;
