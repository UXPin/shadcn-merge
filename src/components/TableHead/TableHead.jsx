import React from 'react';
import PropTypes from 'prop-types';
import { TableHead as TableHeadM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Header cell in a table row.
 */
const TableHead = ({ children, className, ...props }) => {
  return (
    <TableHeadM className={className} {...props}>
      {children}
    </TableHeadM>
  );
};

TableHead.propTypes = {
  /** The content of the TableFooter. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
};

export default TableHead;
