import React from 'react';
import PropTypes from 'prop-types';
import { ChartTooltipContent as ChartTooltipContentM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Custom tooltip content component for displaying chart data.
 */
const ChartTooltipContent = (props) => <ChartTooltipContentM {...props} />;

ChartTooltipContent.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartTooltipContent;