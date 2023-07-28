import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 font-mono h-screen flex items-center justify-center p-3">
      <div className="flex flex-col text-md md:text-2xl text-center text-white max-w-3xl">
        
        <header className="mb-8">
          <Image src="/josua.png" width="150" height="150" className="rounded-full w-[100px] md:w-[120px] lg:w-[150px] mx-auto mb-4" alt="josuapsianturi" loading="lazy" />
          <span>Hello, I'm Josua 👋 </span>
        </header>

        <section className="space-y-2">
          <div>
            <span>I'm a web artisan at </span>
            <a target="_blank" href="https://code050.nl/nl/over-ons" className="border-b border-white">Code050</a>
          </div>

          <div>
            <span>Currently bulding </span>
            <a target="_blank" href="https://ifsware.com" className="border-b border-white">Ifsware</a>.
          </div>

          <div>Write code, save lives</div>
        </section>

        <footer className="space-x-5 my-8">
          <a target="_blank" href="https://twitter.com/Josuapsianturi" alt="twitter" className="border-b-2 border-cyan-500">Twitter</a>
          <a target="_blank" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" alt="youtube" className="border-b-2 border-red-500">Youtube</a>
          <a target="_blank" href="https://github.com/josuapsianturi" alt="github" className="border-b-2 border-gray-500">Github</a>
        </footer>
      </div>
    </main>
  )
}
