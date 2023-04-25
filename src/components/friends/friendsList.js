import PropTypes from 'prop-types';
import css from './friends.module.css'


export default function FriendsList({ friends }) {
  return (

    <ul className={css.friendsList}>
      {friends.map( friend =>
      <li className={css.item} key={friend.id}>
        <span className={friend.isOnline ? css.statusTrue : css.statusFalse}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>)}
    </ul>
            )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};