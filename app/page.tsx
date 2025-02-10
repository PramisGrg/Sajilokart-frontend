import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/profile"}>Profile</Link>
      <h1>Hi my name is Pramis</h1>
    </div>
  );
}
