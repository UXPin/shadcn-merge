import React from 'react';
import PropTypes from 'prop-types';
import { ChartLegendContent as ChartLegendContentM } from '@/components/ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Custom legend content component for displaying chart labels and colors.
 */
const ChartLegendContent = (props) => <ChartLegendContentM {...props} />;

ChartLegendContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  config: PropTypes.object,
};

export default ChartLegendContent;