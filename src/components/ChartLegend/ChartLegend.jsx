import React from 'react';
import PropTypes from 'prop-types';
import { ChartLegend as ChartLegendM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Recharts legend component wrapper.
 */
const ChartLegend = (props) => <ChartLegendM {...props} />;

ChartLegend.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartLegend;