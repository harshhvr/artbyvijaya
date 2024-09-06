import {} from "react";
import { Link } from "react-router-dom";
import { uploads } from "../../assets/uploads";

function HomeHero() {
  const top_images = uploads.slice(-2).toReversed();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] p-5 min-h-[calc(100vh-128px)] bg-home-hero-image bg-no-repeat bg-cover bg-center text-white">
        <div className="relative flex flex-col justify-center items-center gap-5 px-5 py-10 drop-shadow-custom-1">
          <div className="text-2xl lg:text-3xl text-center tracking-[.35em] font-caveat-brush">
            Welcome to
          </div>

          <div className="flex justify-center items-center gap-1 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-above-the-sky-script">
            <span className="font-above-the-sky-script-salt">Art&nbsp;</span>
            <span className="scale-50">by</span>
            <span>Vijaya</span>
          </div>

          <div className="text-center w-2/3">
            A captivating gallery showcasing Vijaya&apos;s exquisite sketches
            capturing the diverse beauty of art & colors.
          </div>

          <Link
            to="/explore"
            className="flex justify-center items-center gap-2 px-6 py-2 rounded bg-gray-600 hover:bg-black active:bg-black text-white"
          >
            Explore
          </Link>
        </div>

        <div className="flex justify-center items-center p-10">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {top_images.map((item, item_index) => (
              <li
                key={`topImage${item_index}`}
                className="flex justify-center items-center p-5 aspect-square frame-1"
              >
                <img
                  src={item.image_url}
                  alt={`Top Image ${item_index}`}
                  className=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
