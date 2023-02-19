import { Inter } from '@next/font/google'
import "@/app/tailwind.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={`text-center text-4xl ${inter.className}`}>NextJS Typescript Starter Template</h1>
    </main>
  )
}
