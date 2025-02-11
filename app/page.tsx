import Link from "next/link";

export default async function Home() {
  try {
    const res = await fetch("http://localhost:3000/product");

    // if (!res.ok) {
    //   throw new Error("Failed to fetch products");
    // }

    const products = await res.json();
    console.log(products);

    return (
      <div>
        <Link href="/profile">Profile</Link>
        <h1>Hi, my name is Pramis</h1>
        {products.data.length > 0 ? (
          products.data.map((product: { id: string; name: string }) => (
            <h1 key={product.id}>{product.name}</h1>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div>
        <h1>Hi, my name is Pramis</h1>
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }
}
