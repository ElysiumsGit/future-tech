const BlogSection = ({ icon, heading, subheading, features }) => {
  return (
    <section className="flex bg-black text-white items-center justify-between border-primary">
      <div className="flex flex-col gap-6 pl-40 pr-20">
        <img src={icon} alt="Section Icon" className="w-12 h-12" />
        <h1 className="font-bold text-4xl">{heading}</h1>
        <h3 className="text-gray-400">{subheading}</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 pr-40 py-20 pl-20 w-1/2 border-primary">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="font-semibold text-lg">{feature.title}</h2>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;