import React from 'react';
import PropTypes from 'prop-types';
import { TabsList as TabsListM } from '../ui/tabs';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tabs
 * @uxpindescription Container holding tab triggers.
 */
const TabsList = ({ children, className, ...props }) => {
  return (
    <TabsListM className={className} {...props}>
      {children}
    </TabsListM>
  );
};

TabsList.propTypes = {
  /** Child tab triggers. */
  children: PropTypes.node,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TabsList;
