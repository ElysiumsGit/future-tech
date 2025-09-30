import React from "react";
import { FaArrowRight, FaCommentDots, FaHeart } from "react-icons/fa6";
import HeroImage from "../../assets/Home/HeroImage.png";
import IconLatestNews from "../../assets/Home/icon-latest-news.png";
import BlogSection from "../../components/Card/BlogSectionCard";
import SubContainer from "../../components/SubContainer/SubContainer";
import CategoryFilter from "../../components/Category/CategoryFilter";
import { FaShareAlt } from "react-icons/fa";
import MoreBlogsSection from "../../components/Card/MoreBlogsSection";
import BlogContent from "../../components/Card/BlogContent";
import WhitePaper from "../../assets/Home/Whitepaper.png";

const Hero = () => {

  const features = [
    {
      icon: IconLatestNews,
      title: "Latest News Updates",
      subtitle: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      icon: IconLatestNews,
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
    },
    {
      icon: IconLatestNews,
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];

  const futureTechFeatures = [
    {
      title: "Quantity",
      description: "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      description: "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      description: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      description: "Written by our team of tech experts and industry professionals.",
    },
  ];

  const researchInsightsFeatures = [
    {
      title: "Depth",
      description: "500+ research articles for in-depth understanding.",
    },
    {
      title: "Trends",
      description: "Explore emerging trends in future technology research.",
    },
    {
      title: "Graphics",
      description: "Visual aids and infographics to enhance comprehension.",
    },
    {
      title: "Contributors",
      description: "Contributions from tech researchers and academics.",
    },
  ];

  const categories = [
    "All",
    "Quantum Computing",
    "AI Ethics",
    "Space Exploration",
    "Biotechnology",
    "Renewable Energy",
  ];

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <div className="bg-black text-white poppins-regular">
      <section className="flex">
        <div className="flex flex-col">
          <section className="px-40 border-primary border border-b-0 pt-40 pb-30">
            <h3 className="text-[#666666] font-medium text-3xl">
              Your Journey to Tomorrow Begins Here
            </h3>
            <h1 className="font-semibold text-5xl lg:text-7xl leading-tight">
              Explore the Frontiers of <br /> Artificial Intelligence
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where 
            </p>
            <p className="text-[#666666] text-lg leading-relaxed">machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.</p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
            <div className="py-10 pl-21 text-center border-primary">
              <h2 className="text-3xl font-bold">
                300<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Resources available</p>
            </div>
            <div className="py-10 border-primary text-center">
              <h2 className="text-3xl font-bold">
                12k<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Total Downloads</p>
            </div>
            <div className="py-10 border-primary text-center">
              <h2 className="text-3xl font-bold">
                10k<span className="text-yellow-400">+</span>
              </h2>
              <p className="text-gray-400 mt-2">Active Users</p>
            </div>
          </section>
        </div>

        <div>
          <div className="relative">
            <img src={HeroImage} alt="Hero Visual" className="max-w-lg" />
          </div>

          <section className="flex flex-col items-start gap-4 absolute p-20 top-[500px]">
            <div className="flex -space-x-4  background-secondary p-2 border-primary rounded-full">
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
              />
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="user2"
              />
              <img
                className="w-14 h-14 rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/women/55.jpg"
                alt="user3"
              />
              <img
                className="w-14 h-14  rounded-full border-2 border-black"
                src="https://randomuser.me/api/portraits/men/66.jpg"
                alt="user4"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Explore <span className="text-yellow-400">1000+ resources</span>
              </h3>
              <p className="text-gray-400 mt-1">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
              Explore Resources <FaArrowRight className="color-primary"/>
            </button>
          </section>
        </div>

        
      </section>
        <div className="bg-black text-white w-full grid grid-cols-1 md:grid-cols-3 divide-gray-800">
        {features.map((item, index) => (
          <section
            key={index}
            className="flex justify-between items-center px-40 py-12 border-primary"
          >
            <div className="flex flex-col gap-2">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-yellow-400 rounded-full p-3 hover:bg-yellow-500 transition-colors">
                <FaArrowRight className="text-black" />
              </div>
            </div>
          </section>
        ))}
      </div>

      <SubContainer
        title="Unlock the Power of"
        subtitle="FutureTech Features"
      />

      <BlogSection
        icon={IconLatestNews}
        heading="Future Technology Blog"
        subheading="Stay informed with our blog section dedicated to future technology."
        features={futureTechFeatures}
      />

      <BlogSection 
        icon={IconLatestNews}
        heading="Research Insights Blogs"
        subheading="Dive deep into future technology concepts with our research section."
        features={researchInsightsFeatures}
      />

      <SubContainer
        title="A Knowledge Treasure Trove"
        subtitle="Explore FutureTech's In-Depth Blog Posts"
        hasButton
        buttonTitle="View All Blogs"
      />

      <CategoryFilter categories={categories} onSelect={handleCategorySelect} />

      <MoreBlogsSection
        name="John Carlo Abanes"
      />
      <MoreBlogsSection/>
      <MoreBlogsSection/>

      <SubContainer
        title="Your Gateway to In-Depth Information"
        subtitle="Unlock Valuable Knowledge with FutureTech's Resources"
        hasButton
        buttonTitle="View All Resources"
      />
      
      <BlogContent/>
      <BlogContent
        title="Whitepapers"
        avatars={[
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/men/44.jpg",
          "https://randomuser.me/api/portraits/women/55.jpg",
        ]}
        description="Dive into comprehensive reports and analyses with our collection of whitepapers. "
        buttonText="Download Whitepapers"
        downloadStat={{ label: "Accessed by", value: "50k+ professionals" }}
        rightTitle="Topics Coverage"
        rightDescription="Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%)."
        rightImage={WhitePaper}
        stats={[
          { label: "Total Papers", value: "300+" },
          { label: "Formats", value: "PDF & DOCX available" },
        ]}
        expertise="Whitepapers are authored by subject matter experts with an average of 20 years of experience."
      />

       <SubContainer
        title="What Our Readers Say"
        subtitle="Real Words from Real Readers"
        hasButton
        buttonTitle="View All Testimonials"
      />

    </div>
  );
};

export default Hero;
