"use client"

import { toast } from 'sonner'
import Link from 'next/link'


export default function Home() {

  return (

    <div>
      <Link href={"login"}>
        <button>Logar ai</button>
      </Link>
      <button onClick={() => toast('My first toast')} >alalalalalaalla</button>
    </div>

  );
}
