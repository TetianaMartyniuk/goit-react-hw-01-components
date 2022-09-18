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
  box-shadow: 4px 4px 13px 0px rgba(0, 0, 0, 0.49);
  cursor: pointer;
  transition: transform 200ms;

  &:hover {
    box-shadow: 6px 6px 15px 0px rgba(66, 58, 58, 0.49);
    transform: scale(1.05);
  }

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
