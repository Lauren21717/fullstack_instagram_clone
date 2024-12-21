import { signIn } from "@/auth";

export default function Home() {
  return (
    <div className="">
      test<br />
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <button type="submit" 
            className="border px-4 py-2 rounded-lg bg-ig-red text-white">
          Signin with Google
        </button>
      </form>
    </div>
  );
}
