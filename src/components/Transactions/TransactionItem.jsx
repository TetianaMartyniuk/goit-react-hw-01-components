import PropTypes from 'prop-types';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  //   console.log(amount);
  return (
    <tr>
      <td className="type-of-transaction">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
