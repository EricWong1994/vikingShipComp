import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

// 直接用空标签会报错 Fragment也会
// const buttonWithSize = () => (
//   <>
//     <Button > large button </Button>
//     <Button > small button </Button>
//   </>
// )

const buttonWithSize = () => (
  <div>
    <Button > large button </Button>
    <Button > small button </Button>
  </div>
)
// test
// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }
// const CenterDecorator = (storyFn: any) => <div style={styles} >{storyFn()}</div>
const buttonWithType = () => (
  <div>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </div>
)
storiesOf('Button Component', module)
  // .addDecorator(CenterDecorator) // test
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)