

export default function Factsbar() {
    return (
        <div className="w-full py-24 flex items-center" style={{ backgroundImage: "url('/Images/cafge-frame.png')" }}>
            <div className="container w-full flex justify-around max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:gap-4 max-sm:flex max-sm:flex-col max-sm:items-center gap-2">
                <div className="flex items-center">
                    <p className="text-white flex flex-col items-center">
                        <span className="text-5xl font-bold">500+</span>
                        <span className="text-lg">Clients Served</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-white flex flex-col items-center">
                        <span className="text-5xl font-bold">30+</span>
                        <span className="text-lg">Years in Business</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-white flex flex-col items-center">
                        <span className="text-5xl font-bold">100M+</span>
                        <span className="text-lg">Dollars Managed</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-white flex flex-col items-center">
                        <span className="text-5xl font-bold">50+</span>
                        <span className="text-lg">Expert Accountants</span>
                    </p>
                </div>
            </div>
        </div>
    );
}