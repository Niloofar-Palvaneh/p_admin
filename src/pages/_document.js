import { Html, Head, Main, NextScript } from 'next/document'
import Topbar from '@/components/home/topbar/Topbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div>
          <Topbar />
          <div className='w-full'>
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  )
}
