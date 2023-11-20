import { GiDiamondTrophy } from "react-icons/gi";

const AnnouncementSection: React.FC = () => {
  return (
    <section className="announcement_section bg-white py-24">
      <div className="container">
        <div className="widget-title text-center">
          <h3 className="wow fadeInUp">What’s New</h3>
          <p>Here’s the latest buzz from Interloop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog absolute top-0 right-0 bg-orange-300 w-20 h-20 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-5xl text-green-900" />
              </div>
            </div>
            <div className="announcement_content text-white hover:bg-blue-700 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg bg-green-900">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
          {/* Card 2 and Card 3 similar structure */}
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog absolute top-0 right-0 bg-orange-300 w-20 h-20 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-5xl text-green-900" />
              </div>
            </div>
            <div className="announcement_content text-white hover:bg-blue-700 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg bg-green-900">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
          <div className="wow fadeInUp" data-wow-delay="300ms">
            <div className="relative">
              <div className="dateBlog absolute top-0 right-0 bg-orange-300 w-20 h-20 flex items-center justify-center rounded-full">
                <GiDiamondTrophy className="text-5xl text-green-900" />
              </div>
            </div>
            <div className="announcement_content text-white hover:bg-blue-700 hover:transform hover:shadow-lg hover:translate-y-[-8px] transition duration-300 ease-in-out py-12 px-4 rounded-lg bg-green-900">
              <small className="font-semibold">Accolades</small>
              <h6 className="text-2xl font-normal mb-4">Interloop recognized by NASSCOM</h6>
              <p>We are delighted to announce that Interloop has won the NASSCOM award for Technology & Excellence in Artificial Intelligence and Machine Learning at NATC Award 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
