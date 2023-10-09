import Link from "next/link";

async function createTodo(data: FormData){
    "use server"

    console.log("Hi")
}

export default function Page(){
    return <>
           <header 
                className="
                flex
                justify-between
                items-center
                mb-4
                "
                >
            <h1 className="text-2xl">New</h1>
            </header>       
            <form action={createTodo} className="flex gap-2 flex-col">
                <input type="text" name="title"
                className="
                border
                border-slate-300
                bg-transparent
                rounded
                px-2
                py-1
                outline-none
                focus-within:border-slate-100
                "
                />
                <div className="flex gap-1 justify-end">
                    <Link href=".."
                    className="
                    border
                    border-slate-300
                   text-slate-300
                    rounded
                    px-2
                    py-1
                    hover:bg-slate-700
                    outline-none
                    focus-within:border-slate-700
                    "
                    >
                        Cancel
                    </Link>
                    <button
                     type="submit"
                     className="
                     border
                     border-slate-300
                    text-slate-300
                     rounded
                     px-2
                     py-1
                     hover:bg-slate-700
                     outline-none
                     focus-within:border-slate-700
                    ">
                        Create
                    </button>
                </div>
            </form>
</>
}