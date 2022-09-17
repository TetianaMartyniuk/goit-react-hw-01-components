import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import { TransactionStyle } from './TransactionStyle';

export const TransactionHistory = ({ items }) => {
  //   console.log(items);
  return (
    <TransactionStyle className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return <TransactionItem key={item.id} item={item} />;
        })}
      </tbody>
    </TransactionStyle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
