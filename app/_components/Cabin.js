"use client";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import useWindowWidth from "@/useWindowWidth";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  const widht = useWindowWidth();

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 max-600:grid-cols-1 max-600:mb-12">
      {widht > 600 ? (
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>
      ) : null}

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%] max-600:translate-x-0 max-600:text-4xl ">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10 max-400:text-sm">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7 ">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-400:text-sm">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-400:text-sm">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg max-400:text-sm">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
