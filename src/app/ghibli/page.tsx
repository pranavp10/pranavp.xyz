import Image from "next/image";

const Page = () => {
  return (
    <div className="d-border-b h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 p-4">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            className={`relative overflow-hidden cursor-pointer d-border p-1  hover:border-transparent! rounded-3xl transition-transform duration-500 hover:scale-200 hover:translate-1/2 hover:z-10
              ${tiltClasses[i % tiltClasses.length]}`}
          >
            <Image
              src={`/ghibli/${i + 1}.png`}
              alt="placeholder"
              width={256}
              height={384}
              className="rounded-2xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const tiltClasses = [
  "rotate-2",
  "-rotate-2",
  "rotate-6",
  "-rotate-6",
  "rotate-3",
  "-rotate-3",
];

export default Page;
