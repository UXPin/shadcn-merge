'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Bar, BarChart as BarChartM, CartesianGrid, XAxis } from 'recharts';
import {
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
        {Object.keys(props.chartConfig).map((key, idx) => {
          let fillColor = props.chartConfig[key]?.fill;
          if (!fillColor) {
            if (idx === 0) fillColor = 'hsl(var(--primary))';
            else if (idx === 1) fillColor = 'hsl(var(--secondary))';
            else fillColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
          }
          return (
            <Bar
              key={key}
              dataKey={key}
              fill={fillColor}
              radius={4}
            />
          );
        })}
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
