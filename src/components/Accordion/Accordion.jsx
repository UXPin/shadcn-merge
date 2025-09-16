import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as AccordionM } from '../ui/accordion';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/accordion
 * @uxpindescription A container for collapsible content sections.
 */
const Accordion = ({ className, children, ...props }) => {
  return (
    <AccordionM key={props.defaultValue}  className={className} {...props}>
      {children}
    </AccordionM>
  );
};

Accordion.propTypes = {
  /** If true, changes the element to render as a child.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Determines whether a 'single' or 'multiple' items can be expanded at a time. */
  type: PropTypes.oneOf(['single', 'multiple']).isRequired,
  /** The controlled value of the expanded item(s). */
  value: PropTypes.array,
  /** The value of the item(s) expanded by default. */
  defaultValue: PropTypes.array,
  /** Callback when the expanded state of an item changes. */
  onValueChange: PropTypes.func,
  /** When type is 'single', allows closing content when clicking trigger for an open item. */
  collapsible: PropTypes.bool,
  /** When true, prevents the user from interacting with the accordion and all its items. */
  disabled: PropTypes.bool,
  /** The reading direction of the accordion. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** The orientation of the accordion. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Additional CSS classes for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Child components to render inside the AccordionRoot. */
  children: PropTypes.node,
};

export default Accordion;
