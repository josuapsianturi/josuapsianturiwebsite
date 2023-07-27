import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 font-mono h-screen flex items-center justify-center p-3">
      <div className="flex flex-col">
        <Image src="/josua.png" width="150" height="150" className="rounded-full w-[100px] md:w-[120px] lg:w-[150px] mx-auto" alt="josuapsianturi" loading="lazy" />

          <div className="text-xl md:text-3xl text-center text-white max-w-3xl">
            <div className="my-8">
              Hello, I'm Josua 👋
            </div>

            <div className="px-3 md:px-0">
              <span>I'm a </span>
              <a target="_blank" href="https://tallstack.dev/" className="border-b border-white">TALL stack </a> 
              <span>developer working at </span>
              <a target="_blank" href="https://code050.nl/nl/over-ons" className="border-b border-white">Code050</a>.
              <span> Currently bulding </span>
              <a target="_blank" href="https://github.com/josuapsianturi/velflix" className="border-b border-white">Velflix, </a>

              <a target="_blank" href="https://github.com/josuapsianturi/tac" className="border-b border-white">TAC, </a>
              and a Startup company (ifsware). Writing code brings me comfort.
            </div>

            <div className="font-semibold md:mt-5 mt-3">"Write code, save lives."</div>

            <div className="space-x-5 mt-8">
              <a target="_blank" href="https://twitter.com/Josuapsianturi" target="blank" alt="Twitter" className="border-b-2 border-cyan-500">Twitter</a>
              <a target="_blank" href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured" target="blank" alt="Youtube" className="border-b-2 border-red-500">Youtube</a>
              <a target="_blank" href="https://github.com/josuapsianturi" target="blank" alt="Github" className="border-b-2 border-gray-500">Github</a>
            </div>
          </div>
      </div>
    </main>
  )
}
