import {Component} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  Paragraph,
  DirectionListBtn,
  CustomInput,
  CustomLabel,
  CustomColorContainer,
  ColorBox,
  CustomGenerateBtn,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeLeftColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({toColor: event.target.value})
  }

  onGenerateButton = () => {
    const {activeGradientDirection, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  onClickDirection = directionButton => {
    this.setState({activeGradientDirection: directionButton})
  }

  render() {
    const {
      activeGradientDirection,
      gradientValue,
      fromColor,
      toColor,
    } = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <CardContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <DirectionListBtn>
            {gradientDirectionsList.map(eachTab => (
              <GradientDirectionItem
                key={eachTab.directionId}
                tabDetails={eachTab}
                onClickDirection={this.onClickDirection}
                isActive={activeGradientDirection === eachTab.value}
              />
            ))}
          </DirectionListBtn>
          <Paragraph>Pick the Colors</Paragraph>
          <CustomColorContainer>
            <ColorBox>
              <CustomLabel>{fromColor}</CustomLabel>
              <CustomInput
                type="color"
                onChange={this.onChangeLeftColor}
                value={fromColor}
              />
            </ColorBox>
            <ColorBox>
              <CustomLabel>{toColor}</CustomLabel>
              <CustomInput
                type="color"
                onChange={this.onChangeRightColor}
                value={toColor}
              />
            </ColorBox>
          </CustomColorContainer>
          <CustomGenerateBtn type="button" onClick={this.onGenerateButton}>
            Generate
          </CustomGenerateBtn>
        </CardContainer>
      </BgContainer>
    )
  }
}
export default GradientGenerator
