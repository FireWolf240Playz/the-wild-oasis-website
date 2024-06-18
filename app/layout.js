import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import NavigationEl from "./_components/NavigationEl";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxuries cabin hotel, located in the hear of the italian Dolomites, surrounded by beatiful moutains and dark forests.",
};

export default function Root({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen  items-center justify-center relativemax-1000:px-4 max-1000:py-6 max-600:text-justify  mx-auto w-full `}
      >
        <Header />

        <div className="flex-1 px-4 py-12 max-w-full ">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
