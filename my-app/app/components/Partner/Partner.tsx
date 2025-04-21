// import Image from "next/image";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";

// export default function Partner({ post }: any) {
// 	console.log("ana: ", post);
// 	const Tag: string | null = post.properties.Tags.multi_select[0].name;
// 	const Title: string | null = post.properties.Name.title[0].plain_text;
// 	const coverImg: string =
// 		post.cover && "file" in post.cover
// 			? post.cover.file.url
// 			: "/logo/Cafge_logo.svg";

// 	return (
// 		<>
// 		<Navbar />
// 		<div className="w-[240px] h-[200px] border border-solid border-ruby rounded-2xl relative max-md:w-[200px] max-md:h-[160px] max-xs:w-[240px] max-xs:h-[200px]">
// 			<div className="relative w-[130px] h-[130px] top-1 left-[50%] translate-x-[-50%] max-md:w-[100px] max-md:h-[100px] max-xs:w-[130px] max-xs:h-[130px]">
// 				<Image
// 					unoptimized
// 					src={coverImg}
// 					fill={true}
// 					alt="Cafge logo"
// 					className=""
// 				/>
// 			</div>
// 			<div className="flex gap-3 flex-col justify-end p-2">
// 				<h3 className="text-[1.25rem]">{Title}</h3>
// 				<p className="text-[1rem]">{Tag}</p>
// 			</div>
// 		</div>
// 		<Footer />
// 		</>
// 	);
// }
