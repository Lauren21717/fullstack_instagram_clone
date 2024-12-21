import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="">
      test<br />
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" 
              className="border px-4 py-2 rounded-lg bg-ig-red text-white">
            Signout
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit" 
              className="border px-4 py-2 rounded-lg bg-ig-red text-white">
            Signin with Google
          </button>
        </form>
      )}
    </div>
  );
}
