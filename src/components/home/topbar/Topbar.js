
import Link from "next/link"

export default function Topbar() {

    return (
        <>
            <div className="w-full bg-gray-800 text-white flex flex-col items-center justify-center text-xl py-4 ">
                <div className="w-[90%] flex  items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
                        <ul className="flex gap-8 items-center">
                            <Link href={"#"}>Home</Link>
                            <Link href={"#"}>Dashboard</Link>
                            <Link href={"#"}>Project</Link>
                            <Link href={"#"}>Reporting</Link>
                            <Link href={"#"}>Users</Link>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-8">
                            <div className="bg-pink-300 rounded-md text-gray-800 px-2 text-md">
                                update
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className="w-[40px] h-[40px] bg-gray-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-800 text-white flex flex-col items-center justify-center pt-12">
                <div className="flex flex-col gap-4 w-[90%]">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <ul className="flex gap-8 text-gray-300 text-md ">
                        <Link className="p-2 " href="#"> Summary </Link>
                        <Link className="p-2 active" href="#"> Sales overview</Link>
                        <Link className="p-2 " href="#"> Product </Link>
                        <Link className="p-2 " href="#"> Email </Link>
                        <Link className="p-2 " href="#"> Biling </Link>
                        <Link className="p-2 " href="#"> Notification </Link>
                        <Link className="p-2 " href="#"> API </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
