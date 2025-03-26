import React from 'react';
import PropTypes from 'prop-types';
import { CarouselNext as CarouselNextM } from '../ui/carousel';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/carousel
 * @uxpindescription Button to navigate to the next item.
 */
const CarouselNext = ({ children, className, ...props }) => {
  return (
    <CarouselNextM className={className} {...props}>
      {children}
    </CarouselNextM>
  );
};

CarouselNext.propTypes = {
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

export default CarouselNext;
