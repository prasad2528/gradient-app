import {TabItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {tabDetails, onClickDirection, isActive} = props
  const {value, displayText} = tabDetails

  const onClickColorGenerate = () => {
    onClickDirection(value)
  }

  return (
    <TabItem>
      <CustomButton isActive={isActive} onClick={onClickColorGenerate}>
        {displayText}
      </CustomButton>
    </TabItem>
  )
}
export default GradientDirectionItem
