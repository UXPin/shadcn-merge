import React from 'react';
import PropTypes from 'prop-types';
import { AccordionContent as AccordionContentM } from '../ui/accordion';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/accordion
 * @uxpindescription The collapsible content inside an AccordionItem.
 */
const AccordionContent = ({ className, children, ...props }) => {
  return (
    <AccordionContentM className={className} {...props}>
      {children}
    </AccordionContentM>
  );
};

AccordionContent.propTypes = {
  /** The content inside the collapsible section */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default AccordionContent;
