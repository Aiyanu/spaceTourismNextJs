"use client"

const Crew = () => {
  return (
    <main className="flex justify-around items-center h-screen bg-no-repeat bg-cover">
      <style jsx>{`
        @media (min-width: 1024px) {
          main {
            background-image: url(/assets/crew/background-crew-desktop.jpg);
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          main {
            background-image: url(/assets/crew/background-crew-tablet.jpg);
          }
        }

        @media (max-width: 767px) {
          main {
            background-image: url(/assets/crew/background-crew-mobile.jpg);
          }
        }
      `}</style>
    </main>
  );
};

export default Crew;
