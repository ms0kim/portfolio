import { useEffect } from 'react'
import HeadComponent from './component/Head'
import HomePage from './component/Home'
import Cursor from './component/Cursor'

export default function Home() {
  return (
    <>
      <HeadComponent/>
      <HomePage />
      <Cursor />
    </>
  )
}