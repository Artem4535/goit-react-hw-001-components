import Profile from './profile/profile'
import user from './profile/user.json'
import StatissticList from './statistics/statics'
import statisticValue from './statistics/statistic.json'
import FriendsList from './friendsList/friendsList'
import friends from './friendsList/friends.json'
import transactions from './transactions/transactions.json'
import TransactionsTable from './transactions/transactions'
import Container from 'Container/container.styled'

export default function App() {
  return (<>
  <Container><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    /></Container> 
    <Container><StatissticList items={statisticValue} title={'Upload stats'}/></Container>
    <Container><FriendsList friends={friends}/></Container>
    <Container><TransactionsTable transions={transactions}/></Container>
  </>
  )
}
