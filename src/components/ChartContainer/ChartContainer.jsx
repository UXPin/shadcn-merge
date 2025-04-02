import React from 'react';
import PropTypes from 'prop-types';
import { ChartContainer as ChartContainerM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription A container for Recharts charts with theming and responsive layout.
 */
const ChartContainer = (props) => <ChartContainerM {...props} />;

ChartContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartContainer;