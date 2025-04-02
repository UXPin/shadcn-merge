import React from 'react';
import PropTypes from 'prop-types';
import { ChartStyle as ChartStyleM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Injects theme-based custom styles into the chart.
 */
const ChartStyle = (props) => <ChartStyleM {...props} />;

ChartStyle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartStyle;