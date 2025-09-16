import React from 'react';
import PropTypes from 'prop-types';
import { AccordionTrigger as AccordionTriggerM } from '../ui/accordion';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/accordion
 * @uxpindescription The button that controls the expansion of an AccordionItem.
 */
const AccordionTrigger = ({ className, children, ...props }) => {
  return (
    <AccordionTriggerM className={className} {...props}>
      {children}
    </AccordionTriggerM>
  );
};

AccordionTrigger.propTypes = {
  /** The trigger text or content */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   * */
  className: PropTypes.string,
};

export default AccordionTrigger;
