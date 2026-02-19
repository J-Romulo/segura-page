import { Button } from "../../../../../components/ui/Button";

export function Overview() {
  return (
    <section
      className='bg-segura-white py-16'
      style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className='container mx-auto w-full max-md:max-w-full px-12'>
        <div className='w-full grid grid-cols-1 md:grid-cols-12 md:gap-y-8 gap-x-3 md:gap-x-12 items-start gap-10'>
          {/* Left — text */}
          <div className='col-span-12 md:col-span-6 flex flex-col gap-4 h-full justify-center text-deep-green'>
            <h1 className='font-display text-4xl font-medium text-deep-green'>
              The Complete Identity Security Platform
            </h1>
            <h3 className='font-display text-2xl font-medium text-deep-green'>
              Fast. Simple. Secure. Everything you need to control privileged
              access.
            </h3>
            <p className='text-xl font-normal text-deep-green'>
              Segura® stops privileged attacks before they happen — without
              slowing you down. Our all-in-one solution secures human and
              machine identities, so you stay{" "}
              <b>✔ in compliance, ✔ in control, and ✔ ahead of threats.</b>
            </p>
            <div className='flex flex-row flex-wrap gap-4 mt-3'>
              <Button href='/demo'>See It In Action ›</Button>
              <Button href='/products' variant='transparent-dark'>
                Explore Our Solutions ›
              </Button>
            </div>
          </div>

          {/* Right — video */}
          <div className='col-span-12 md:col-span-6'>
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-auto rounded-xl'>
              <source src='/videos/segura-mandala-video.mp4' type='video/mp4' />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
