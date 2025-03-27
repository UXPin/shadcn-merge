import React from 'react';
import PropTypes from 'prop-types';
import { TableHeader as TableHeaderM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Header section of the table.
 */
const TableHeader = ({ children, className, ...props }) => {
  return (
    <TableHeaderM className={className} {...props}>
      {children}
    </TableHeaderM>
  );
};

TableHeader.propTypes = {
  /** The content of the TableHeader. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default TableHeader;
