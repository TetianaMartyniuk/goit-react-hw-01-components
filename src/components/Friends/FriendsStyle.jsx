import styled from 'styled-components';

export const FriendsStyle = styled.ul`
  padding: 15px;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 15px;
  margin-bottom: 45px;
  justify-items: center;
  text-align: center;
`;

export const FriendItemStyle = styled.li`
  padding: 5px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  .status {
    display: block;
    width: 12px;
    height: 12px;
    margin-bottom: 5px;
    margin-left: -85%;
    border-radius: 50%;
    background-color: ${p => (p.status ? 'green' : 'red')};
    font-size: larger;
  }
`;
