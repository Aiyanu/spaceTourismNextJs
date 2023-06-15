"use client"

const Technology = () => {
  return (
    <main className="flex justify-around items-center h-screen bg-no-repeat bg-cover">
      <style jsx>{`
        @media (min-width: 1024px) {
          main {
            background-image: url(/assets/destination/background-destination-desktop.jpg);
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          main {
            background-image: url(/assets/destination/background-destination-tablet.jpg);
          }
        }

        @media (max-width: 767px) {
          main {
            background-image: url(/assets/destination/background-destination-mobile.jpg);
          }
        }
      `}</style>
    </main>
  );
};

export default Technology;
