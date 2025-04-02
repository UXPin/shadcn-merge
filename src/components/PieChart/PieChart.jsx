'use client';
import React from 'react';
import { Pie, PieChart as PieChartM } from 'recharts';
import PropTypes from 'prop-types';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable pie chart.
 */
export default function PieChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`mx-auto aspect-square ${props.className}`}
    >
      <PieChartM>
        <Pie
          data={props.data}
          dataKey={props.dataKey}
          innerRadius={props.innerRadius}
        />
        {props.enableLegend && (
          <ChartLegend
            content={<ChartLegendContent nameKey={props.LegendKey} />}
            className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
          />
        )}
        {props.enableTooltip && (
          <ChartTooltip content={<ChartTooltipContent />} />
        )}
      </PieChartM>
    </ChartContainer>
  );
}

PieChart.propTypes = {
  data: PropTypes.object,
  chartConfig: PropTypes.object.isRequired,
  innerRadius: PropTypes.number,
  LegendKey: PropTypes.string,
  dataKey: PropTypes.string,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
};
