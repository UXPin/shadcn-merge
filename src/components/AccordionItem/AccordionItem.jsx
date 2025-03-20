import React from 'react';
import PropTypes from 'prop-types';
import { AccordionItem as AccordionItemM } from '../ui/accordion';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/accordion
 * @uxpindescription A single item inside an Accordion component.
 */
const AccordionItem = ({ value, className, children, ...props }) => {
  return (
    <AccordionItemM value={value} className={className} {...props}>
      {children}
    </AccordionItemM>
  );
};

AccordionItem.propTypes = {
  /** The unique value used to control the state of the item */
  value: PropTypes.string.isRequired,

  /** The child components (AccordionTrigger, AccordionContent) inside the AccordionItem */
  children: PropTypes.node,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default AccordionItem;
