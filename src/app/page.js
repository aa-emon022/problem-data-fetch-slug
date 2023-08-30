import Image from "next/image";
import jsonData from "./lib/blogPost";
import Link from "next/link";

export default async function Home() {
  const Data = await jsonData();
  console.log(Data);
  return <>
    <div>
      {
        Data.map((items,index)=>(
          <div key={index}>
        <Link href={`/blog/${items.id}`}><p>{items.title}</p></Link>

          </div>
        ))
      }
    </div>


  </>;
}
