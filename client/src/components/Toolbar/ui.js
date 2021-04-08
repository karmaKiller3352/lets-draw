import styled, { css } from 'styled-components';
import Isvg from '../SVGIcon';

export const ToolbarWrapper = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  height: 35px;
  z-index: 10;
  background-color: #fff;
  justify-content: space-between;
  top: 0;
  box-shadow: 0 5px 5px -5px rgba(123, 51, 90, 0.8);
`;
export const ToolbarContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
`;

export const ToolIcon = styled(Isvg)`
  cursor: pointer;
  width: 20px;
  padding: 3px;
  height: 20px;
  margin: 0 10px;
  &:hover {
    filter: blur(1px);
  }

  ${(props) =>
    props.active &&
    css`
      border: 1px dashed;
    `}

  svg {
    fill: ${(props) => props.color || '#000'};
  }
`;

export const Input = styled.input`
  display: ${(props) => props.hidden && 'none'};
  cursor: pointer;
`;

export const LabelIcon = styled.label`
  margin: 0 10px;
`;
