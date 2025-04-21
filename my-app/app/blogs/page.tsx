import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import Blog_list from "../components/Blog_list/Blog_list";
import Hero from "../components/blog-hero/Hero";

export default async function Blog() {
	


	return (
		<div className="">
			<Navbar />
			<Hero />
			<Blog_list />
			<Footer />
		</div>
	);
}
