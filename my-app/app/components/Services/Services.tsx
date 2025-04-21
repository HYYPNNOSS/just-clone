

export default function Services() {
    return (
        <section className="w-full bg-[url('/images/Services_BG.png')] border-[1px] border-solid border-transparent" id="Services">
            <div className="container">
                <div className="w-full py-[60px]">
                    <div className="title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className="text-[3rem] text-ruby max-sm:text-2xl">Our Services</h2>
                    </div>
                    <div className="">
                        <h3 className="text-ruby text-[2.5rem] my-12 max-xs:text-[1.5rem]">Le Lorem Ipsum est simplement <br/> du faux texte employé</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 1</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 2</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 3</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 4</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 5</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>
                            <div className="Service">
                                <h4 className="text-[1.75rem] mb-4 max-xs:text-[1.5rem]">Service 6</h4>
                                <p className="text-[1.25rem] leading-normal max-xs:text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}