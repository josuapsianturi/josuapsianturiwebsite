import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center h-screen p-3 font-mono lg:items-center pt-[65px] bg-sky-50">
      <div className="flex flex-col max-w-3xl text-center text-gray-900 text-md md:text-2xl">

        <header className="">
          <Image src="/josua.png" width="150" height="150" className="rounded-xl mb-4 w-[130px] md:w-[150px] lg:w-[170px] mx-auto" alt="Josua Sianturi - Web Developer" loading="lazy" />
          <h1 className='text-xl md:text-3xl'>Hey I'm Josua 🪄 </h1>
        </header>

        <section className="max-w-xl px-2 mx-auto mt-8 mb-10 text-left">
          <div>
            <div>
              <span>I work as a web developer at </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.code050.nl/team" className="border-b border-green-500">Code050</a>
            </div>

            currently based in Indonesia and building
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href="https://ifsware.dev" className="border-b border-green-500">Ifsware.dev</a>
            <span> </span>
            . I have several open-source projects available on
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/josuapsianturi" className="border-b border-green-500">GitHub</a>.
            <span></span>

            <div className='my-8'>
              Outside of programming I enjoy spending time with my dog (Floki),
              gardening, playing Rubik's, Pingpong and guitar. sometimes I share it on
              <span> </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" className='border-b border-green-500' alt="youTube">
                YouTube
              </a>.
              {/* <span> </span>
              I also good at enduring pain. */}
            </div>

            <div className=''>
              Fun fact..
              <div>
                💪 I believe I'm the strongest man alive!
                Let's connect on
                <span> </span>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Josuapsianturi" className='border-b border-green-500' alt="twitter">Twitter</a>
                <span></span>

                {/* and <span></span>

                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/josuapsianturi" className='border-b border-green-500' alt="instagram">Instagram</a> */}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
