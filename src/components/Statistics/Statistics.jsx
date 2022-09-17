import { StatList } from './StatList';
import PropTypes from 'prop-types';
import { StatisticsStyle } from './StatistictsStyle';

export const Statistics = props => {
  //   console.log(props);
  const { title, stats } = props;
  return (
    <StatisticsStyle className="statistics">
      {title ? <h2 className="title">{title.toUpperCase()}</h2> : ''}
      <ul className="stat-list">
        {stats.map(item => {
          return (
            <StatList
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
