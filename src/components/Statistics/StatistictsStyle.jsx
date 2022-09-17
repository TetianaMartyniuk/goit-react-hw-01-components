import styled from 'styled-components';
import { randomColor } from './RandomColor';

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
