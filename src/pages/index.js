
import { LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Image from 'next/image';


export default function Home() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const dataYear = [
    {
      name: 'January',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'February ',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }, {
      name: 'September',
      uv: 3490,
      pv: 4500,
      amt: 2100,
    },
    {
      name: 'October',
      uv: 3590,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'November',
      uv: 3490,
      pv: 4800,
      amt: 2100,
    },
    {
      name: 'December',
      uv: 340,
      pv: 430,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="w-full items-center justify-center flex flex-col mt-6">
        <div className="flex w-[90%] items-center justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold ">Sales overview</h2>
            <p className="text-gray-700">Your current sales summary and activity</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 rounded-xl flex items-center justify-center gap-2 shadow border bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Export report
            </div>
            <div className="text-white bg-gray-800 px-4 py-2 rounded-xl flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add widget
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-[90%] mt-8">
          <ul className="rounded-xl border border-gray-300 border-2 overflow-hidden flex ">
            <li className="border border-gray-300 border-2 px-4 py-1 bg-gray-200">12 m</li>
            <li className="border border-gray-300 border-2 px-4 py-1">30 d</li>
            <li className="border border-gray-300 border-2 px-4 py-1">7 d</li>
            <li className="border border-gray-300 border-2 px-4 py-1">24 h</li>
          </ul>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 shadow border bg-gray-200 rounded-md px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              2023.8.5
            </div>
            <div className="flex items-center gap-2 shadow border bg-gray-200 rounded-md px-4 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
              Filter
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center w-full mt-8'>
          <div className='flex  w-[90%] justify-between'>
            <div>
              <div className='flex items-center gap-4'>
                <div className='bg-gray-200 shadow border p-2 rounded-xl'>
                  <div className='flex flex-col '>
                    <div className='flex tems-center justify-between'>
                      <h4 className='font-bold text-gray-500'>Revenue</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                      </svg>
                    </div>
                    <div className='flex items-center justify-between'>
                      <h5 className='font-bold  text-xl'>
                        15000 $
                      </h5>
                      <div className='flex items-center gap-1 border border-2 border-gray-800 rounded-2xl px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        120 %
                      </div>
                    </div>
                  </div>
                  <LineChart width={300} height={100} data={data} >
                    <Line type="monotone" dataKey="pv" stroke="#0d1321" strokeWidth={2} dot={false} />
                  </LineChart>
                </div>
                <div className='bg-gray-200 shadow border p-2 rounded-xl'>
                  <div className='flex flex-col '>
                    <div className='flex tems-center justify-between'>
                      <h4 className='font-bold text-gray-500'>Revenue</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                      </svg>
                    </div>
                    <div className='flex items-center justify-between'>
                      <h5 className='font-bold  text-xl'>
                        15000 $
                      </h5>
                      <div className='flex items-center gap-1 border border-2 border-gray-800 rounded-2xl px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        120 %
                      </div>
                    </div>
                  </div>
                  <LineChart width={300} height={100} data={data} >
                    <Line type="monotone" dataKey="pv" stroke="#0d1321" strokeWidth={2} dot={false} />
                  </LineChart>
                </div>
                <div className='bg-gray-200 shadow border p-2 rounded-xl'>
                  <div className='flex flex-col '>
                    <div className='flex tems-center justify-between'>
                      <h4 className='font-bold text-gray-500'>Revenue</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                      </svg>
                    </div>
                    <div className='flex items-center justify-between'>
                      <h5 className='font-bold  text-xl'>
                        15000 $
                      </h5>
                      <div className='flex items-center gap-1 border border-2 border-gray-800 rounded-2xl px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        120 %
                      </div>
                    </div>
                  </div>
                  <LineChart width={300} height={100} data={data} >
                    <Line type="monotone" dataKey="pv" stroke="#0d1321" strokeWidth={2} dot={false} />
                  </LineChart>
                </div>
              </div>

              <div className='bg-gray-200 rounded-xl shadow border mt-8'>
                <h4 className='text-xl font-bold p-6'>
                  Analytices
                </h4>
                <BarChart
                  width={900}
                  height={400}
                  data={dataYear}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="a" fill="#748cab" />
                </BarChart>
              </div>

            </div>
            <div className='bg-gray-200 shadow flex flex-col justify-between rounded-xl border p-12'>
              <h4 className='font-bold text-xl mb-2'>
                Top Selling Product
              </h4>
              <div className='flex items-center gap-4 text-gray-700'>
                <Image src={"/1.avif"} width={80} height={80} />
                Apple Monitor Pro
              </div>
              <div className='flex items-center gap-4 text-gray-700'>
                <Image src={"/1.avif"} width={80} height={80} />
                Apple Monitor Pro
              </div>
              <div className='flex items-center gap-4 text-gray-700'>
                <Image src={"/1.avif"} width={80} height={80} />
                Apple Monitor Pro
              </div>
              <div className='flex items-center gap-4 text-gray-700'>
                <Image src={"/1.avif"} width={80} height={80} />
                Apple Monitor Pro
              </div>
              <div className='flex items-center gap-4 text-gray-700'>
                <Image src={"/1.avif"} width={80} height={80} />
                Apple Monitor Pro
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
