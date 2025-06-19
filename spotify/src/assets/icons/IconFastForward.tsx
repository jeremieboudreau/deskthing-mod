import { JSX } from 'react'
import { Icon, IconProps } from '.'

function IconFastForward(props: IconProps): JSX.Element {

  return <Icon {...props}>
  <svg width="330" height="330" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="330" height="330"> <path fill="#D9D9D9" d="M0 0h330v330H0z"/> </mask> <g mask="url(#a)"> <path d="M226.875 247.5v-165h27.5v165h-27.5Zm-151.25 0v-165l123.75 82.5-123.75 82.5Z" fill="#fff"/> </g></svg>  </Icon>
}

export default IconFastForward