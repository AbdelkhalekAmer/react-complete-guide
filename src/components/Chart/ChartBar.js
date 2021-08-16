import './ChartBar.css';

const ChartBar = props => {
    let barFillingHeight = 0;

    if (props.max) barFillingHeight = Math.round((props.value / props.max) * 100);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: `${barFillingHeight}%` }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;