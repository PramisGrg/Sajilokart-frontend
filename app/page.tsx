export default function Home() {
  const value = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log(value, "This is value");

  console.log("hi my name is Pramis");

  return (
    <div>
      <h1>Hi my name is Pramis</h1>
    </div>
  );
}
