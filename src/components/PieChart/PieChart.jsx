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
  const dataWithColors = props.data?.map((entry, idx) => {
    let fillColor = entry.fill;
    if (!fillColor) {
      if (idx === 0) fillColor = 'hsl(var(--primary))';
      else if (idx === 1) fillColor = 'hsl(var(--secondary))';
      else fillColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
    }
    return {
      ...entry,
      fill: fillColor,
    };
  });
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`mx-auto aspect-square ${props.className}`}
    >
      <PieChartM>
        <Pie
          data={dataWithColors}
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
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};
