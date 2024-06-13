import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5 max-400:fle ">
      <div className="flex items-center justify-">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
