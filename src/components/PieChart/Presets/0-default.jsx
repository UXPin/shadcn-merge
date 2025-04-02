import * as React from 'react';
import PieChart from '../PieChart';

export default (
  <PieChart
    uxpId='pie-chart-1'
    data={[
      { browser: 'chrome', visitors: 275, fill: '#2563eb' },
      { browser: 'safari', visitors: 200, fill: '#60a8fb' },
      { browser: 'firefox', visitors: 187, fill: '#3b86f7' },
      { browser: 'edge', visitors: 173, fill: '#90c7fe' },
      { browser: 'other', visitors: 90, fill: '#bedcfe' },
    ]}
    chartConfig={{
      visitors: {
        label: 'Visitors',
      },
      chrome: {
        label: 'Chrome',
        color: '#2563eb',
      },
      safari: {
        label: 'Safari',
        color: '#60a8fb',
      },
      firefox: {
        label: 'Firefox',
        color: '#3b86f7',
      },
      edge: {
        label: 'Edge',
        color: '#90c7fe',
      },
      other: {
        label: 'Other',
        color: '#bedcfe',
      },
    }}
    innerRadius={70}
    LegendKey='browser'
    dataKey='visitors'
    enableLegend
    enableTooltip
  />
);
