import PropTypes from 'prop-types';
import { UserIcon, UserName, UserData, UserStatisticName, UserStatisticValue, ProfileContainer, Profiledescription, Stats, StatsItem } from './Profile.styled'
export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes }, }) {
  return  (
        <ProfileContainer className="profile">
            <Profiledescription className="description">
                <UserIcon
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
              <UserName className="name">{ username }</UserName>
              <UserData className="tag">{ tag }</UserData>
              <UserData className="location">{ location }</UserData>
            </Profiledescription>

            <Stats className="stats">
                <StatsItem>
                <UserStatisticName className="label">Followers:</UserStatisticName>
                  <UserStatisticValue className="quantity">{followers}</UserStatisticValue>
                </StatsItem>
                <StatsItem>
                    <UserStatisticName className="label">Views:</UserStatisticName>
                    <UserStatisticValue className="quantity">{views}</UserStatisticValue>
                </StatsItem>
                <StatsItem>
                    <UserStatisticName className="label">Likes:</UserStatisticName>
                    <UserStatisticValue className="quantity">{likes}</UserStatisticValue>
                </StatsItem>
            </Stats>
        </ProfileContainer>
    )
}


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};