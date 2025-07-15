export default function Home() {
  return (
    <header className="container mx-auto">
      <div className="bg-[url('/assets/images/hero-img.jpg')] min-h-[480px] bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl">
        <div className="max-w-[867px] mx-auto px-4 py-8 text-white space-y-4">
          <h1 className="text-3xl md:text-6xl text-center font-bold mt-10">
            Find your favorite <br /> place here!
          </h1>
          <p className="text-[18px] text-center">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
    </header>
  );
}
