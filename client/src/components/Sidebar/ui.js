import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  min-width: 250px;
  margin-left: 40px;
  max-width: calc(100% - 30px);
  margin: 15px;
  flex-grow: 1;
  align-self: stretch;
  border-radius: 5px;
  max-height: calc(100vh - 30px);
  min-height: 300px;
  box-shadow: -15px -15px 2px -5px rgba(123, 51, 90, 0.5),
    -15px 15px 2px -5px rgba(60, 74, 123, 0.5), 15px -15px 2px -5px rgba(255, 0, 0, 0.5),
    15px 15px 2px -5px rgba(60, 123, 68, 0.5);
  box-sizing: border-box;
`;
