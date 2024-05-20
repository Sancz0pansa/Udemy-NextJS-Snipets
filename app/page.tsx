import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany();

  const redered = snippets.map((snippet) => {
    return (
      <Link href={`/snippets/${snippet.id}`} className="p-2 border-2 rounded flex justify-between" key={snippet.id}>
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    )
  })

  return (
    <div>
      <div className="flex text-center justify-between border-4 border-violet-700 rounded p-2 items-center">
        <h1 className="font-bold mx-3 h-min">Snippets</h1>
        <Link className="p-4 hover:bg-black hover:text-white rounded transition-all" href='/snippets/new'>New</Link>
      </div>
      <div className="flex gap-2 flex-col mt-5">{redered}</div>
    </div>
    
  );
}
