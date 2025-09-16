import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as TableRowM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Table row element.
 */
const TableRow = ({ children, className, ...props }) => {
  return (
    <TableRowM className={className} {...props}>
      {children}
    </TableRowM>
  );
};

TableRow.propTypes = {
  /** The content of the TableRow. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
};

export default TableRow;
