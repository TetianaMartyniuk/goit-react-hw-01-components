import styled from 'styled-components';

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
