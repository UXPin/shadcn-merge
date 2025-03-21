import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuIndicator as NavigationMenuIndicatorM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Visual indicator for the active trigger.
 */
const NavigationMenuIndicator = ({ children, className, ...props }) => {
  return (
    <NavigationMenuIndicatorM className={className} {...props}>
      {children}
    </NavigationMenuIndicatorM>
  );
};

NavigationMenuIndicator.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default NavigationMenuIndicator;
