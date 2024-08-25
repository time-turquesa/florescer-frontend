import Image from 'next/image'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex px-4 bg-[#D4BCB2] lg:bg-none items-center justify-center w-screen h-screen relative overflow-hidden lg:px-0">
      <Image
        src="/bottom.png"
        height={300}
        width={300}
        quality={100}
        alt="bottom-icon"
        className="absolute bottom-0 left-1/2 transform -translate-x-[74%] z-30 hidden lg:flex"
      />
      <section className="lg:flex items-center justify-center relative bg-[#D4BCB2] w-full h-screen hidden">
        <Image
          src="/top.png"
          height={300}
          width={300}
          quality={100}
          alt="top-icon"
          className="absolute bottom-0 -right-36 top-0 h-[800px] w-auto max-w-[500px]"
        />
        <Image
          src="/middle.png"
          height={300}
          width={300}
          sizes="100vw"
          alt="middle-icon"
          className="absolute bottom-0 left-0 h-[700px] w-auto max-w-[700px]"
          style={{
            objectFit: 'contain',
          }}
        />
        <div className="z-50">
          <Image
            src="/logo.png"
            height={0}
            width={0}
            sizes="100vw"
            alt="logo"
            className="max-w-[280px] w-auto h-[280px]"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </section>
      <Image
        src="/logo.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="logo"
        className="max-w-[280px] w-auto h-[280px] absolute top-0 mt-6 lg:hidden"
        style={{
          objectFit: 'contain',
        }}
      />
      <section className="bg-[#975AB6] rounded-2xl w-full h-[80%] md:w-[75%] min-w-[280px] mt-28 lg:mt-0 lg:w-full lg:h-full lg:rounded-none z-20">
        {children}
      </section>
    </main>
  )
}

export default Layout
