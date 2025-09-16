import React from 'react';
import PropTypes from 'prop-types';
import { TableBody as TableBodyM } from '../ui/table';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/table
 * @uxpindescription Body section of the table containing rows.
 */
const TableBody = ({ children, className, ...props }) => {
  return (
    <TableBodyM className={className} {...props}>
      {children}
    </TableBodyM>
  );
};

TableBody.propTypes = {
  /** The content of the TableBody. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TableBody;
