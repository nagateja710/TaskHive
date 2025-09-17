import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
    await checkUser();
    return (
        <header className="w-full border-b border-blue-200 bg-white-10 backdrop-blur-md sticky top-0 z-10">
  <nav className="container mx-auto flex justify-between items-center ">
    {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-2">
        <Image 
            src="/logo_b.png"
            alt="TaskHive Logo"
            width={180}   // Bigger width
            height={60}   // Taller height
            className="h-15 w-auto object-contain"
        />
        </Link>

    {/* Right side actions */}
    <div className="flex items-center gap-4">
      {/* Create Project Button */}
      <Link href="/project/create">
        <Button 
          variant="destructive" 
          className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <PenBox size={18}/>
          <span>Create Project</span>
        </Button>
      </Link>

      {/* Auth Buttons */}
      <SignedOut>
        <SignInButton forceRedirectUrl="/onboarding">
          <Button 
            variant="outline" 
            className="px-4 py-2 rounded-xl border-gray-300 hover:bg-gray-100 transition"
          >
            Login
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserMenu />
      </SignedIn>
    </div>
  </nav>
</header>

    )
};

export default Header;



/*
<header className="container mx-auto">
            <nav className="py-4 px-4 flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={"/logo_b.png"}
                        alt="Zcrum Logo"
                        width={300}
                        height={500}
                        className="h-30 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/project/create">
                        <Button variant="destructive" className="flex items-center gap-2">
                            <PenBox size={18}/>
                            <span>Create Project</span>
                        </Button>
                    </Link>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/onboarding">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut> 

                    <SignedIn>
                        <UserMenu/>
                    </SignedIn>
                </div>
            </nav>
        </header>
*/