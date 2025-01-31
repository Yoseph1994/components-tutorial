import Image from "next/image";
import image from "@/public/assets/email-subscribe/images/image.jpg";

export default function page() {
  return (
    <section className="min-h-screen bg-zinc-700 flex items-center justify-center text-white">
      <div className="bg-zinc-800 w-[700px] rounded-2xl px-2 py-2">
        <div className="flex items-center gap-14">
          <Image
            src={image}
            alt="Image"
            width={200}
            height={200}
            className="rounded-tl-xl rounded-bl-xl"
          />
          <div className="flex flex-col gap-4 max-w-[400px]">
            <h1 className="text-2xl">
              Get diet and fitness tips in your inbox
            </h1>
            <p className="text-sm max-w-72">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <form className="space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg p-2 px-2"
              />
              <button
                type="submit"
                className="bg-zinc-600 text-white rounded-lg p-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
