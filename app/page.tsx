import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main >
      <div className='Welcome'> <div>Welcome</div> <br></br>
       To X/O Game</div>
       <Link href={'./game'}>
      <button className='StartBut'>Get Start</button>
      </Link>
    </main>
  )
}
