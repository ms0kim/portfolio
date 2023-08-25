import Link from "next/link";

export default function Header(props:any) {

  return(
    <div className="header">
      <ul className={props.hide ? 'hide' : ''}>
        <li className='left'>
          <Link href='/'>
            About
          </Link>
        </li>
        <li className="center">
          <Link href='/'>
            Ms portfolio
          </Link>
        </li>
        <li className='right'>
          <Link href="/projects" className="btn"><i className="ri-flashlight-fill"></i>Projects</Link>
        </li>
      </ul>
    </div>
  )
}