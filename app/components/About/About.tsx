import Image from "next/image";

export default function About() {
    return (
        <section className="w-full bg-gray-100 py-16" id="About">
            <div className="container flex flex-col lg:flex-row justify-between items-center my-12">
                <div className="lg:w-1/2 w-full px-6 lg:px-0 mb-12 lg:mb-0">
                    <div className="title flex items-center mb-6">
                        <div className="w-16 h-1 bg-ruby mr-4"></div>
                        <h2 className="text-4xl text-ruby font-bold max-sm:text-2xl">Why We Exist</h2>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-ruby text-3xl font-semibold mb-4 max-sm:text-xl">Le Lorem Ipsum est simplement du faux texte employé</h3>
                        <p className="text-lg text-gray-700 leading-relaxed max-sm:text-base">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500,</p>
                    </div>
                    <button className="mt-6 py-3 px-6 bg-ruby text-white text-lg font-medium rounded-lg shadow-lg hover:bg-ruby-dark transition duration-300 max-sm:text-base max-sm:py-2 max-sm:px-4">Contactez-nous</button>
                </div>
                <div className="lg:w-1/2 w-full flex justify-center">
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 md:block max-sm:w-64 max-sm:h-64 hidden">
                        <Image src="/Images/about-section.png" layout="fill" objectFit="cover" alt="About Us Image" className="" unoptimized/>
                    </div>
                </div>
            </div>
        </section>
    );
}
