import { motion } from "framer-motion";
import Hero from './Hero'
import CardNews from './CardNews'
import BlogSectionCard from "../../components/Card/BlogSectionCard.jsx";
import SubContainer from "../../components/SubContainer/SubContainer.jsx";
import IconLatestNews from "../../assets/Home/icon-latest-news.png";
import CategoryFilter from "../../components/Category/CategoryFilter";
import MoreBlogsSection from "../../components/Card/MoreBlogsSection";
import BlogContent from "../../components/Card/BlogContent";
import Testimonial from './Testimonial.jsx';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  const futureTechFeatures = [
    { title: "Quantity", description: "Over 1,000 articles on emerging tech trends and breakthroughs." },
    { title: "Variety", description: "Articles cover fields like AI, robotics, biotechnology, and more." },
    { title: "Frequency", description: "Fresh content added daily to keep you up to date." },
    { title: "Authoritative", description: "Written by our team of tech experts and industry professionals." },
  ];

  const researchInsightsFeatures = [
    { title: "Depth", description: "500+ research articles for in-depth understanding." },
    { title: "Trends", description: "Explore emerging trends in future technology research." },
    { title: "Graphics", description: "Visual aids and infographics to enhance comprehension." },
    { title: "Contributors", description: "Contributions from tech researchers and academics." },
  ];

  const categories = ["All", "Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy"];

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Hero />
      </motion.div>

      {/* Card News */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CardNews />
      </motion.div>

      {/* Future Tech Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <SubContainer title="Unlock the Power of" subtitle="FutureTech Features" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <BlogSectionCard
          icon={IconLatestNews}
          heading="Future Technology Blog"
          subheading="Stay informed with our blog section dedicated to future technology."
          features={futureTechFeatures}
        />
      </motion.div>

      {/* Research Insights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <BlogSectionCard
          icon={IconLatestNews}
          heading="Research Insights Blogs"
          subheading="Dive deep into future technology concepts with our research section."
          features={researchInsightsFeatures}
        />
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <SubContainer
          title="A Knowledge Treasure Trove"
          subtitle="Explore FutureTech's In-Depth Blog Posts"
          hasButton
          buttonTitle="View All Blogs"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CategoryFilter categories={categories} onSelect={handleCategorySelect} />
      </motion.div>

      {/* More Blogs */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <MoreBlogsSection name={i === 1 ? "John Carlo Abanes" : undefined} />
        </motion.div>
      ))}

      {/* Blog Content */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <BlogContent
            avatars={[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/men/44.jpg",
              "https://randomuser.me/api/portraits/women/55.jpg",
            ]}
          />
        </motion.div>
      ))}

      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <SubContainer
          title="What Our Readers Say"
          subtitle="Real Words from Real Readers"
          hasButton
          buttonTitle="View All Testimonials"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Testimonial />
      </motion.div>
    </div>
  );
};

export default Home;
