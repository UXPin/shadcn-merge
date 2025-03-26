import React from 'react';
import PropTypes from 'prop-types';
import { CarouselPrevious as CarouselPreviousM } from '../ui/carousel';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/carousel
 * @uxpindescription Button to navigate to the previous item.
 */
const CarouselPrevious = ({ children, className, ...props }) => {
  return (
    <CarouselPreviousM className={className} {...props}>
      {children}
    </CarouselPreviousM>
  );
};

CarouselPrevious.propTypes = {
  /** Additional className for styling. */
  className: PropTypes.string,
  /** Variant for the button. */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'destructive',
    'outline',
    'ghost',
    'link',
  ]),
  /** Slide content. */
  children: PropTypes.node,
};

export default CarouselPrevious;
