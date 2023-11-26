// Style your elements here
import styled from 'styled-components/macro'

export const TabItem = styled.li`
  width: 200px;
  margin-right: 40px;
`

export const CustomButton = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  width: 150px;
  height: 40px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
