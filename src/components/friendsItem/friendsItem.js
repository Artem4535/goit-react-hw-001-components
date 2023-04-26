import PropTypes from 'prop-types';
import css from './friendsItem.module.css'

export default function friendsItem({avatar, name, isOnline, id}) {
    return (
        <li className={css.item}>
        <span className={isOnline ? css.statusTrue : css.statusFalse}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>

    )
}

friendsItem.protoType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}
