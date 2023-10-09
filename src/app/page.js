import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 font-mono h-screen flex items-center justify-center p-3">
      <div className="flex flex-col text-md md:text-2xl text-center text-white max-w-3xl">
        
        <header className="mb-8">
          <Image src="/josua.png" width="150" height="150" className="rounded-xl mb-4 w-[100px] md:w-[120px] lg:w-[150px] mx-auto mb-4" alt="josuapsianturi" loading="lazy" />
          <span className='md:text-3xl'>Hello, I'm Josua 🪄 </span>
        </header>

        <section className="space-y-2 text-left">
          <div>
            <span>I'm a web developer at </span>
            <a target="_blank" href="https://code050.nl/nl/over-ons" className="border-b border-white">Code050</a>
          </div>
       
          <div> currently based in Indonesia. </div>
          <div> Outside of programming I enjoy </div>
          <div> playing with my dog 🐶 "Floki". </div>
        </section>

        <footer className="space-x-8 mt-10 flex items-center justify-center">
          <a target="_blank" href="https://twitter.com/Josuapsianturi" alt="twitter">
            <Image src="/twitter.png" width="30" height="30" alt="twitter" loading="lazy" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" alt="youtube">
            <Image src="/youtube.png" width="30" height="30" alt="twitter" loading="lazy" />  
          </a>
          <a target="_blank" href="https://github.com/josuapsianturi" alt="github" className="fill-white">
            <Image src="/github.png" width="30" height="30" alt="twitter" loading="lazy" />
          </a>
          <a target="_blank" href="https://instagram.com/josuapsianturi" alt="instagram">
            <Image src="/instagram.png" width="30" height="30" alt="twitter" loading="lazy" />
          </a>
        </footer>
      </div>
    </main>
  )
}
