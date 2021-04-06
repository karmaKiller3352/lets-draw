import styled from "styled-components"

export const WorkSpace = styled.div`
  min-height: calc(100vh - 80px);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  width: calc(100% - 315px);
  min-width: 900px;
  box-shadow:
  -15px -15px 2px -5px rgba(123,51,90,.5),
  -15px 15px 2px -5px rgba(60,74,123,.5),
  15px -15px 2px -5px rgba(255,0,0,.5),
  15px 15px 2px -5px rgba(60,123,68,.5);
  box-sizing: border-box;
  border-radius: 5px;
  margin: 15px;
`

export const DrowSpace = styled.canvas`
  width: 900px;
  height: 600px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`