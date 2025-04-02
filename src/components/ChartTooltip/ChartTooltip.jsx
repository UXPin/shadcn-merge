import React from 'react';
import PropTypes from 'prop-types';
import { ChartTooltip as ChartTooltipM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Recharts tooltip component wrapper.
 */
const ChartTooltip = (props) => <ChartTooltipM {...props} />;

ChartTooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartTooltip;