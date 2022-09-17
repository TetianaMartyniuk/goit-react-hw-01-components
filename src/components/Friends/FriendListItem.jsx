import PropTypes from 'prop-types';
import { FriendItemStyle } from 'components/Styled';

export const FriendListItem = data => {
  //   console.log(data);
  const { name, status, avatar } = data;
  return (
    <FriendItemStyle status={status} className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItemStyle>
  );
};

FriendListItem.propType = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf([true, false]).isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
