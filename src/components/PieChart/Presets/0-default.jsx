import * as React from 'react';
import PieChart from '../PieChart';

export default (
  <PieChart
    className="bg-background text-foreground"
    uxpId='pie-chart-1'
    data={[
      { browser: 'chrome', visitors: 275,  },
      { browser: 'safari', visitors: 200,  },
      { browser: 'firefox', visitors: 187,  },
      { browser: 'edge', visitors: 173 },
      { browser: 'other', visitors: 90 },
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
