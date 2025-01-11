
'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { ModeToggle } from "./ModeToggler";
import { navItems } from "@/constants";
import { useCartStore } from "@/store/cartStore";
import { createUser } from "@/lib/actions/user";
import { useEffect } from "react";


const Navbar = () => {
    const { isLoaded, isSignedIn } = useUser();
    const path = usePathname();
    const { cart } = useCartStore();
    useEffect(() => {
        if (isSignedIn) {
            createUser();
        }
    }, [isSignedIn]);

    return (
        <nav className='px-6 py-4 sm:py-4 my-2 sm:my-4 sm:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto rounded-2xl border-2 shadow-xl flex-between w-full animate-fromUpper sticky top-0 z-10 dark:bg-black bg-white'>
            <Link href={'/'} className='flex-center gap-2 md:gap-4 hover:animate-dance'>
                <h1 className='text-3xl lg:text-4xl font-black'>GoFood</h1>
            </Link>
            <div className='gap-6 flex'>
                {isLoaded && isSignedIn && (
                    <div className='md:flex-center gap-2 lg:gap-4 xl:gap-6 hidden'>
                        {navItems.map(item => (
                            <div key={item.label} className={`transition ease-in-out px-3 py-2 xl:px-4 xl:py-2 rounded-xl hover:gradient-bg hover:scale-110 hover:-translate-y-1 relative ${path == item.link && 'gradient-bg font-bold'}`}>
                                {item.label == 'My Cart' && cart.length > 0 && <span className="absolute -top-1 left-0 rounded-full bg-red-500 text-white size-3 flex-center p-[11px]">{cart.length}</span>}
                                <Link href={item.link} className='hover:font-bold text-sm flex gap-1 lg:gap-2'>
                                    <Image src={item.icon} alt={item.label} className="w-6 h-6 dark:invert" />
                                    <span className="flex-center">{item.label}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                <div className="my-auto flex gap-2">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button className="gradient-bg hover:animate-dance">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar