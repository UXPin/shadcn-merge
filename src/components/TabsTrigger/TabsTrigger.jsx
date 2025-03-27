import React from 'react';
import PropTypes from 'prop-types';
import { TabsTrigger as TabsTriggerM } from '../ui/tabs';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tabs
 * @uxpindescription Interactive element that activates a tab.
 */
const TabsTrigger = ({ children, className, ...props }) => {
  return (
    <TabsTriggerM className={className} {...props}>
      {children}
    </TabsTriggerM>
  );
};

TabsTrigger.propTypes = {
  /** Tab label or content. */
  children: PropTypes.node,
  /** Tab value associated with this trigger. */
  value: PropTypes.string,
  /** Whether the tab is disabled. */
  disabled: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default TabsTrigger;
