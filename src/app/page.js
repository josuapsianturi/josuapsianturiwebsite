import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center p-3 font-mono lg:items-center pt-[65px] bg-sky-50">
      <div className="flex flex-col max-w-3xl text-center text-gray-900 text-md md:text-2xl">

        <header className="">
          <Image src="/josua.png" width="150" height="150" className="rounded-xl mb-4 w-[130px] md:w-[150px] lg:w-[170px] mx-auto" alt="Josua Sianturi - Web Developer" loading="lazy" />
          <h1 className='text-xl md:text-3xl'>Hey I'm Josua 🪄 </h1>
        </header>

        <section className="max-w-xl px-2 mx-auto mt-8 mb-10 text-left">
          <div>
            <div>
              <span>I'm a web developer at </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.code050.nl/team" className="border-b border-green-500">Code050</a>
            </div>

            currently based in Indonesia, working on
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href="https://ifsware.dev" className="border-b border-green-500">Ifsware.dev</a>
            <span> </span>
            and a few open-source projects on
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/josuapsianturi" className="border-b border-green-500">GitHub</a>.
            <span></span>

            <div className='my-8'>
              Outside of coding, I enjoy quiet time with my dog (Floki), gardening, solving Rubik’s cubes,
              playing ping pong, and occasionally strumming my guitar. Sometimes I share bits of that on
              <span> </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" className='border-b border-green-500' alt="youTube">
                YouTube
              </a>.

            </div>

            <div className='my-8'>
              Over the past few years, I’ve walked through some difficult seasons — physically, mentally, and spiritually.
              Those experiences humbled me and reshaped how I see life, faith, and people.
            </div>

            <div className='my-8'>
              That journey gave me a heart for people who are struggling silently.
              If you're going through something difficult and need someone to talk to, I’m here.
              I don’t have all the answers, but I’ve been there — and I’d be glad to listen.
            </div>

            <div className='my-8'>
              I also run a small side project called
              <span> </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hatiuntuktuhan/" className='border-b border-green-500' alt="hatiuntuktuhan">
                Hati Untuk Tuhan
              </a>,
              a quiet space on the internet to help people reflect on God’s love and draw closer to Jesus.
              If that speaks to you, feel free to visit.
            </div>

            <div className=''>
              Fun fact..
              <div>
                💪 I like to joke that I’m the strongest man alive — though Floki might disagree. 😅
                Let’s connect on
                <span> </span>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Josuapsianturi" className='border-b border-green-500' alt="twitter">Twitter</a>
                <span></span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
