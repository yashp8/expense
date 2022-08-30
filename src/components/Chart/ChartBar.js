import './ChartBar.css';

const ChartBar = (props) => {
  const { key, value, maxValue, label } = props;

  let barFilledHeight = '0%';
  let barFilledColor = '#4826b9';
  if (maxValue > 0) {
    barFilledHeight = `${Math.round((value / maxValue) * 100)}%`;

    if (Math.round((value / maxValue) * 100) > 80) barFilledColor = `#F44336`;
    if (
      Math.round((value / maxValue) * 100) > 50 &&
      Math.round((value / maxValue) * 100) < 80
    )
      barFilledColor = `#EF6C00`;
    if (Math.round((value / maxValue) * 100) < 50) barFilledColor = `#2196F3`;
    if (Math.round((value / maxValue) * 100) < 25) barFilledColor = `#2E7D32`;
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFilledHeight, background: barFilledColor }}
        />
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
