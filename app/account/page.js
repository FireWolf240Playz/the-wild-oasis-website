import { auth } from "../_lib/auth";

export const metadata = {
  title: "Your account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];

  return (
    <div className="w-full">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7 max-800:text-left ">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
