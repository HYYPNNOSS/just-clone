import Image from 'next/image';

export default function Hero() {
    return (
        <section className="w-full h-[80dvh] relative" id="Hero">
            <Image
                src="/Images/accounting-firm.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute w-full h-full top-0 left-0 hero-fg"></div>
            <div className="container">
                <div className="flex flex-col justify-center items-start h-[90dvh] w-2/5 max-2xl:w-3/5 max-md:w-5/6 max-xs:w-full space-y-6">
                    <h1 className="text-white text-[3.5rem] leading-tight max-lg:text-[3rem] max-sm:text-[2.5rem] max-xs:text-[2rem] xs:text-[1.5rem] xl:text-[3.5rem] 2xl:text-[4rem] z-10">
                        Precision Accounting <br />for Confident Decisions.
                    </h1>
                    <p className="text-2xl text-white leading-relaxed max-lg:text-xl max-sm:text-lg max-xs:text-md xs:text-sm xl:text-3xl 2xl:text-3xl z-10">
                        Expert accounting services focused on clarity, precision, and empowering your financial growth.
                    </p>
                    <div className="flex flex-col xs:flex-row gap-4 xs:gap-8 text-white pt-8 z-10 font-medium">
                        <button className="bg-ruby py-4 px-8 rounded-lg hover:bg-ruby-dark transition duration-300">Contactez-nous</button>
                        <button className="bg-transparent border border-white py-4 px-8 rounded-lg hover:bg-white hover:text-ruby transition duration-300">En Savoir Plus</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
