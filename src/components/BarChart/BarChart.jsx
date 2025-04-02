'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, BarChart as BarChartM, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable bar chart.
 */
export default function BarChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`min-h-[200px] w-full ${props.className}`}
    >
      <BarChartM accessibilityLayer data={props.data}>
        {props.enableGrid && <CartesianGrid vertical={false} />}
        <XAxis
          dataKey={props.dataKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {props.enableTooltip && (
          <ChartTooltip content={<ChartTooltipContent />} />
        )}
        {props.enableLegend && <ChartLegend content={<ChartLegendContent />} />}
        {Object.keys(props.columns).map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={props.columns[key].color}
            radius={4}
          />
        ))}
      </BarChartM>
    </ChartContainer>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      desktop: PropTypes.number.isRequired,
      mobile: PropTypes.number.isRequired,
    })
  ),
  columns: PropTypes.object,
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  enableGrid: PropTypes.bool,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
};
