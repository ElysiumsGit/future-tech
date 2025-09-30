import { FaArrowRight } from "react-icons/fa"; // Import your arrow icon
import IconLatestNews from "../../assets/Home/icon-latest-news.png";
import Ebooks from "../../assets/Home/Ebooks.png";

function BlogContent() {
  return (
    <section className="border-primary flex items-stretch justify-center">
        <div className="flex h-auto flex-col border-primary bg-black w-full gap-4 pl-40 py-20 pr-20 justify-center">
            <img src={IconLatestNews} alt="Ebook Icon" className="w-16" />
            <h1 className="font-semibold text-lg text-white">Ebooks</h1>
            <p className="text-gray-400">Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>

            <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 px-6 py-3 rounded-xl transition-colors duration-300">
                Download Ebooks Now <FaArrowRight className="color-primary" />
            </button>

            <div className="flex p-4 border-primary">
            <div>
                <p className="text-gray-400">Downloaded by</p>
                <h1 className="font-bold text-white">10k + Users</h1>
            </div>
            <div className="flex -space-x-4 bg-gray-800 p-2 border-primary rounded-full">
                <img className="w-14 h-14 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                <img className="w-14 h-14 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/44.jpg" alt="user2" />
                <img className="w-14 h-14 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/women/55.jpg" alt="user3" />
                <img className="w-14 h-14 rounded-full border-2 border-black" src="https://randomuser.me/api/portraits/men/66.jpg" alt="user4" />
            </div>
            </div>
        </div>

        <div className="flex flex-col gap-4 border-primary bg-black w-full pl-20 py-20 pr-40">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-white">Variety of Topics</h1>
                <p className="text-gray-400">Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
            </div>

            <div>
                <img src={Ebooks} alt="Ebooks" className="w-full" />
            </div>

            <div className="flex gap-4">
                <section className="p-6 flex flex-col gap-2 border-primary w-1/3">
                    <h1 className="text-gray-400">Total Books</h1>
                    <h1 className="font-bold text-white">Over 100 ebooks</h1>
                </section>
                <section className="p-6 flex-1 flex-col gap-2 border-primary w-1/3">
                    <h1 className="text-gray-400">Total Books</h1>
                    <h1 className="font-bold text-white">Over 100 ebooks</h1>
                </section>
               
            </div>
             <section className="p-6 flex flex-col gap-2 border-primary w-full">
                <h1 className="text-gray-400">Total Books</h1>
                <h1 className="font-bold text-white">Over 100 ebooks</h1>
            </section>
        </div>
    </section>
  );
}

export default BlogContent;
