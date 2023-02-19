import {Inter} from '@next/font/google'
import "@/app/tailwind.css"

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className={"flex flex-col items-center pt-[300px]"}>
            <h1 className={`text-center text-4xl ${inter.className}`}>NextJS Typescript Starter Template</h1>
            <button type={"button"} className={"bg-green-500 p-2 rounded-md cursor-pointer active:outline active:outline-offset-1 outline-green-500 outline-2 m-1"}>auth login</button>
        </main>
    )
}
