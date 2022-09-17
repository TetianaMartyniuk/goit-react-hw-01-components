import PropTypes from 'prop-types';
import { StatListStyle } from './StatistictsStyle';

export const StatList = props => {
  // console.log(props);
  const { label, percentage } = props;
  return (
    <StatListStyle className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}&#37;</span>
    </StatListStyle>
  );
};

// Пише, що props undefined АЛЕ він нормально прилітає об'єктом!!!
// StatList.propTypes = {
//   props: PropTypes.exact({
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }).isRequired,
// };

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
