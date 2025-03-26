import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as CarouselM } from '../ui/carousel';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/carousel
 * @uxpindescription Main wrapper for the carousel component using Embla.
 */
const Carousel = ({ children, className, ...props }) => {
  return (
    <CarouselM className={className} {...props}>
      {children}
    </CarouselM>
  );
};

Carousel.propTypes = {
  /** Carousel orientation: horizontal or vertical. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Embla carousel options. */
  opts: PropTypes.object,
  /** Embla carousel plugins. */
  plugins: PropTypes.array,
  /** Callback to expose the Embla carousel API. */
  setApi: PropTypes.func,
  /** Additional className for wrapper. */
  className: PropTypes.string,
  /** Children elements. */
  children: PropTypes.node,
};

export default Carousel;
