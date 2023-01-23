import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <h2 className="taskNumber">Task #1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="taskNumber">Task #2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 className="taskNumber">Task #2 (part 2)</h2>
      <Statistics stats={data} />
      <h2 className="taskNumber">Task #3</h2>
      <FriendList friends={friends} />
      <h2 className="taskNumber">Task #4</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};
