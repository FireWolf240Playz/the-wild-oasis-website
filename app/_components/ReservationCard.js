import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex border border-primary-800  max-800:flex-wrap">
      <div className="relative h-32 aspect-square  max-800:hidden">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold max-800:text-base">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm max-800:mb-3">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm  max-800:mb-3">
              upcoming
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300 max-800:text-sm ">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline ">
          <p className="text-xl font-semibold text-accent-400 max-800:text-base">
            ${totalPrice}
          </p>
          <p className="text-primary-300 max-800:hidden">&bull;</p>
          <p className="text-lg text-primary-300 max-800:text-sm whitespace-nowrap">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>
      {!isPast(startDate) ? (
        <div className="flex flex-col border-l border-primary-800 max-800:w-full max-800:flex-row max-800:items-center max-800:border-t-2">
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex gap-2 items-center uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>

            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
