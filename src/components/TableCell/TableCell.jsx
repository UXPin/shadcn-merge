import React from 'react';
import PropTypes from 'prop-types';
import { TableCell as TableCellM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Standard cell in a table row.
 */
const TableCell = ({ children, className, ...props }) => {
  return (
    <TableCellM className={className} {...props}>
      {children}
    </TableCellM>
  );
};

TableCell.propTypes = {
  /** The content of the cell */
  children: PropTypes.node,
  /** Specifies the number of columns a cell should span */
  colspan: PropTypes.number,
  /** Sets the number of rows a cell should span */
  rowspan: PropTypes.number,
  /** Additional className for styling. */
  className: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
};

export default TableCell;
