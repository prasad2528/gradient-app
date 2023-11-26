import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const CardContainer = styled.div`
  width: 80%;
  text-align: center;
`
export const Heading = styled.h1`
  color: #fff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 50px;
`
export const Paragraph = styled.p`
  color: ##ededed;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`
export const DirectionListBtn = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`
export const CustomLabel = styled.p`
  color: #ededed;
s`

export const CustomInput = styled.input`
  width: 100px;
  height: 60px;
  border: none;
  background-color: transparent;
  outline: none;
`
export const CustomColorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
export const ColorBox = styled.div`
  margin-right: 70px;
  display: flex;
  flex-direction: column;
`

export const CustomGenerateBtn = styled.button`
  outline: none;
  border: none;
  width: 150px;
  background-color: #00c9b7;
  height: 40px;
  border-radius: 12px;
`
