import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import sunrise from "@/public/images/sunrise.jpg";
import { Metadata } from "next";
import HeavyComponent from "./components/HeavyComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <HeavyComponent /> */}
      {/* <Image src={sunrise} alt="Sunrise" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="React Course"
        fill
        // style={{objectFit:'cover'}}
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority  
      /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "MyHomeTitle",
};

// dynamic metadata
// export async function generateMetadata() : Promise<Metadata> {
//   const product = await fetch('...');
//   return {
//     title:product.title,
//     description: product.description,
//   }
// }
