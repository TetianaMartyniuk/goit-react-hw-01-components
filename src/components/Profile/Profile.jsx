import { Stats } from './Stats/Stats';
import PropTypes from 'prop-types';
import { ProfileStyle } from './ProfileStyle';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <ProfileStyle className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" width={150} />
        <p className="name">{username}</p>
        <p className="tag">&#64;{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats stats={stats} />
    </ProfileStyle>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
