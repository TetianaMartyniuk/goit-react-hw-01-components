import { randomColor } from './Statistics/StatList';
import styled from 'styled-components';

export const BasicStyle = styled.div`
  padding: 45px 30px;
  background-color: #cccccc;
`;

export const ProfileStyle = styled.div`
  padding-top: 15px;
  margin-bottom: 45px;
  width: 230px;
  border-radius: 4px;
  box-shadow: 4px 4px 13px 0px rgba(0, 0, 0, 0.49);
  background-color: #ffffff;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .name {
    font-size: large;
    font-weight: 600;
    margin-top: 10px;
  }

  .tag,
  .location {
    font-size: smaller;
    margin-top: 5px;
    color: #4a4949;
  }
`;

export const StatsStyle = styled.ul`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid #cccccc;

  li {
    font-size: smaller;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  li:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`;

export const StatisticsStyle = styled.section`
  margin-bottom: 45px;
  box-shadow: 4px 4px 13px 0px rgba(0, 0, 0, 0.49);
  max-width: 350px;
  text-align: center;
  background-color: #fff;

  .title {
    padding: 15px 0;
  }

  .stat-list {
    display: flex;

    /* display: grid;
    grid-template-columns: repeat(5, 1fr); */
  }
`;

export const StatListStyle = styled.li`
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${randomColor};
`;

export const FriendsStyle = styled.ul`
  padding: 15px;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 15px;
  margin-bottom: 45px;
  justify-items: center;
  text-align: center;
`;

export const FriendItemStyle = styled.li`
  .status {
    display: block;
    width: 10px;
    height: 10px;
    margin-bottom: 5px;
    margin-left: -5px;
    border-radius: 50%;
    background-color: ${p => (p.status ? 'green' : 'red')};
    font-size: larger;
  }
`;

export const TransactionStyle = styled.table`
  padding: 15px 25px;
  width: 450px;
  background-color: #f3f3f3;
  border-radius: 4px;
  box-shadow: 4px 4px 13px 0px rgba(0, 0, 0, 0.49);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  thead {
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }
  thead > tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  tbody > tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid grey;
  }

  td:not(:last-child) {
    border-right: 1px solid grey;
  }

  td {
    text-align: center;
  }
`;
