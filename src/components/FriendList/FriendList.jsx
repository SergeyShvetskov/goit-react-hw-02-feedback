import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={css.friendlist}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
