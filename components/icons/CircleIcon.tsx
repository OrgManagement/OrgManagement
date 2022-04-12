import { FC, SVGProps } from 'react';

const CircleIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'
      fill='currentColor'
      height='1em'
      width='1em'
      {...props}
    >
      <path d='M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z'/>
    </svg>
  )
}


export default CircleIcon
