import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsStyle } from 'components/Styled';

export const FriendList = ({ friends }) => {
  //   console.log(friends);
  return (
    <FriendsStyle className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            status={isOnline}
          />
        );
      })}
    </FriendsStyle>
  );
};

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
