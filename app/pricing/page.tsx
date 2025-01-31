function page() {
  return (
    <div className=" bg-zinc-700  text-white">
      <section className="w-[200px] border border-red-500 p-6 min-h-full">
        <h3 className="text-2xl">Basic</h3>
        <h1>100GB</h1>
        <p>$1.99/Month</p>
        <button>Purchase</button>
        <hr />
        <ul>
          <li>100 GB of storage </li>
          <li>Option to add members</li>
          <li>Extra member benefits</li>
        </ul>
      </section>
    </div>
  );
}

export default page;
