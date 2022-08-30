import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const { dataPoints } = props;
  const DataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...DataPointValues);
  return (
    <div className='chart'>
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
