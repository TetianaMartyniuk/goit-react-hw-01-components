import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import items from './transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { BasicStyle } from './Styled';

export const App = () => {
  return (
    <BasicStyle>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </BasicStyle>
  );
};
