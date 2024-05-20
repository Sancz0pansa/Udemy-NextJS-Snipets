
import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {

  async function CreateSnippet(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      }
    })

    console.log(snippet);

    redirect('/')

  }


  return (
    <form action={CreateSnippet}>
      <div className="flex text-center justify-between border-4 border-violet-700 rounded p-2 items-center">
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <Link className="p-4 hover:bg-black hover:text-white rounded transition-all" href='/'>Back</Link>
      </div>
      
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">Title</label>
          <input id="title" type="text" name="title" className="border rounded p-2 w-full" />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">Code</label>
          <textarea id="code" name="code" className="border rounded p-2 w-full" />
        </div>
        
        <button type="submit" className="rounded p-2 bg-blue-200">Create</button>
      </div>
    </form>
  );
}
