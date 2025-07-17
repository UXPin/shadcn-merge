import * as React from 'react';
import RadarChart from '../RadarChart';

export default (
  <RadarChart
    className="bg-background text-foreground"
    uxpId='radar-chart-1'
    data={[
      { subject: 'Math', desktop: 120, mobile: 110 },
      { subject: 'Science', desktop: 98, mobile: 130 },
      { subject: 'English', desktop: 86, mobile: 105 },
      { subject: 'History', desktop: 99, mobile: 100 },
      { subject: 'Art', desktop: 85, mobile: 90 },
      { subject: 'PE', desktop: 65, mobile: 80 },
    ]}
    radars={{
      desktop: {
        label: 'Desktop',
        color: '#2563eb',
        fillOpacity: 0.3,
      },
      mobile: {
        label: 'Mobile',
        color: '#60a5fa',
        fillOpacity: 0.3,
      },
    }}
    chartConfig={{
      desktop: { label: 'Desktop', color: '#2563eb' },
      mobile: { label: 'Mobile', color: '#60a5fa' },
    }}
    enableLegend={true}
    enableTooltip={true}
    dataKey='subject'
  />
);
