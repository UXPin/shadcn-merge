import React from 'react';
import PropTypes from 'prop-types';
import { TableCaption as TableCaptionM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Caption describing the contents of the table.
 */
const TableCaption = ({ children, className, ...props }) => {
  return (
    <TableCaptionM className={className} {...props}>
      {children}
    </TableCaptionM>
  );
};

TableCaption.propTypes = {
  /** The content of the TableCaption. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TableCaption;
