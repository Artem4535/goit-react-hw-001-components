import PropTypes from 'prop-types';
import css from './friends.module.css'
import FriendsItem from 'components/friendsItem/friendsItem';


export default function FriendsList({ friends }) {
  return (

    <ul className={css.friendsList}>
     {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
            )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      ...FriendsItem.protoType,
      id: PropTypes.number.isRequired,
    })
  ),
};