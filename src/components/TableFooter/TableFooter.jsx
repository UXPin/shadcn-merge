import React from 'react';
import PropTypes from 'prop-types';
import { TableFooter as TableFooterM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Footer section of the table.
 */
const TableFooter = ({ children, className, ...props }) => {
  return (
    <TableFooterM className={className} {...props}>
      {children}
    </TableFooterM>
  );
};

TableFooter.propTypes = {
  /** The content of the TableFooter. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TableFooter;
