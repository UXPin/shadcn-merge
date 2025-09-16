import React from 'react';
import PropTypes from 'prop-types';
import { CollapsibleContent as CollapsibleContentM } from '../ui/collapsible';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/collapsible
 * @uxpindescription The collapsible content section that is revealed when triggered.
 */
const CollapsibleContent = ({ className, children, ...props }) => {
  return (
    <CollapsibleContentM className={className} {...props}>
      {children}
    </CollapsibleContentM>
  );
};

CollapsibleContent.propTypes = {
  /** The content inside the collapsible section */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default CollapsibleContent;
