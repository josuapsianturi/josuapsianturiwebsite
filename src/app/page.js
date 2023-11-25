import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-paper font-mono h-screen flex items-center justify-center p-3">
      <div className="flex flex-col text-md md:text-2xl text-center text-gray-900 max-w-3xl">
        
        <header className="">
          <Image src="/josua.png" width="150" height="150" className="rounded-xl mb-4 w-[130px] md:w-[150px] lg:w-[170px] mx-auto mb-4" alt="josuapsianturi" loading="lazy" />
          <span className='md:text-3xl text-xl'>Hey I'm Josua 🪄 </span>
        </header>

        <section className="mt-8 mb-10 text-left mx-auto max-w-xl mx-2">
          <div>
            <div>
              <span>I work as a web developer at </span>
              <a target="_blank" href="https://code050.nl/nl/over-ons" className="border-b border-green-500">Code050</a>
            </div>
                
            currently based in Indonesia. I have several open-source projects available on  
            <span> </span>
            <a target="_blank" href="https://github.com/josuapsianturi" className="border-b border-green-500">GitHub</a>. 
            <span></span>
          
          <div className='my-8'>
              Outside of programming I enjoy spending time with my dog (Floki), 
              gardening, playing Rubik's and guitar. sometimes I share it on
              <span> </span>
              <a target="_blank" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" className='border-b border-green-500' alt="youTube">
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
              <a target="_blank" href="https://twitter.com/Josuapsianturi" className='border-b border-green-500' alt="twitter">Twitter</a> 
              <span></span> and <span></span>

              <a target="_blank" href="https://instagram.com/josuapsianturi" className='border-b border-green-500' alt="instagram">Instagram</a>
              </div>
          </div>
          </div>
        </section>

      </div>
    </main>
  )
}
