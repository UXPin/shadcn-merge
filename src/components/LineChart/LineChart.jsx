'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Line, LineChart as LineChartM, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable line chart.
 */
export default function LineChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`min-h-[200px] w-full ${props.className}`}
    >
      <LineChartM data={props.data}>
        {props.enableGrid && <CartesianGrid vertical={false} />}
        <XAxis
          dataKey={props.dataKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={props.xTickFormatter}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={props.yTickFormatter}
        />
        {props.enableTooltip && (
          <ChartTooltip content={<ChartTooltipContent />} />
        )}
        {props.enableLegend && <ChartLegend content={<ChartLegendContent />} />}
        {Object.keys(props.chartConfig).map((key, idx) => {
          let strokeColor = props.chartConfig[key]?.fill;
          if (!strokeColor) {
            if (idx === 0) strokeColor = 'hsl(var(--primary))';
            else if (idx === 1) strokeColor = 'hsl(var(--secondary))';
            else strokeColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
          }
          return (
            <Line
              key={key}
              type={props.chartConfig[key].type || 'monotone'}
              dataKey={key}
              stroke={strokeColor}
              strokeWidth={props.chartConfig[key].strokeWidth || 2}
              dot={props.chartConfig[key].dot || false}
              activeDot={props.chartConfig[key].activeDot || { r: 4 }}
            />
          );
        })}
      </LineChartM>
    </ChartContainer>
  );
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  enableGrid: PropTypes.bool,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
  xTickFormatter: PropTypes.func,
  yTickFormatter: PropTypes.func,
};
