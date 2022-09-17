import PropTypes from 'prop-types';
import { StatListStyle } from 'components/Styled';

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

export const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
