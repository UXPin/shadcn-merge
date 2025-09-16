import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsM } from '../ui/tabs';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tabs
 * @uxpindescription Root container for the tab system.
 */
const Tabs = ({ children, className, ...props }) => {
  return (
    <TabsM key={props.defaultValue} className={className} {...props}>
      {children}
    </TabsM>
  );
};

Tabs.propTypes = {
  /** The controlled value of the tab (active tab).
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** The value of the tab to show when initially rendered. */
  defaultValue: PropTypes.string,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func,
  /** The reading direction of the component. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** If true, allows keyboard focus to loop through items. */
  loop: PropTypes.bool,
  /** Tab elements as children (List, Trigger, Content). */
  children: PropTypes.node,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default Tabs;
