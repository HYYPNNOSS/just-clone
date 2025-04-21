import Link from "next/link";

export default function ThenaStamp(){
    return (
        <div className="container w-full text-center text-[1.25rem] pb-8">
            © 2024
             <Link href="https://thena.agency/" target="_blank"
          rel="noopener noreferrer"><span className="text-ruby"> Thena </span></Link>
              All rights reserved.
        </div>
    );
}