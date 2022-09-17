import styled from 'styled-components';

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
