import React from 'react';
import PropTypes from 'prop-types';
import { TabsContent as TabsContentM } from '../ui/tabs';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tabs
 * @uxpindescription Displays the content for an active tab.
 */
const TabsContent = ({ children, className, ...props }) => {
  return (
    <TabsContentM className={className} {...props}>
      {children}
    </TabsContentM>
  );
};

TabsContent.propTypes = {
  /** Content shown when the corresponding tab is active. */
  children: PropTypes.node,
  /** Value that matches the corresponding tab trigger. */
  value: PropTypes.string,
  /** Whether this content should be force mounted. */
  forceMount: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default TabsContent;
