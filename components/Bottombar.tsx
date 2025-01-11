
'use client'
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navItems } from "@/constants";
import { useCartStore } from "@/store/cartStore";

const Bottombar = () => {
    const { isLoaded, isSignedIn } = useUser();
    const { cart } = useCartStore();
    const path = usePathname();
    return (
        <>
            {isLoaded && isSignedIn && (
                <section className='px-6 py-2 rounded-t-2xl shadow-xl w-full fixed bottom-0 md:hidden animate-fromBelow bg-white dark:text-white dark:bg-black border-t-2 '>
                    <div className='flex-around'>
                        {navItems.map(item => (
                            <div key={item.label} className={`px-3 py-2 rounded-xl font-bold hover:gradient-bg ${path == item.link && 'gradient-bg'} relative`}>
                                {item.label == 'My Cart' && cart.length >0 &&  <span className="absolute -top-1 left-0 rounded-full bg-red-500 text-white size-3 flex-center p-[11px]">{cart.length}</span>}
                                <Link href={item.link} className='text-sm flex-center gap-1 hover:animate-dance'>
                                    <Image src={item.icon} alt={item.label} className="w-8 h-8 dark:invert" />
                                    <span className="sm:flex-center hidden">{item.label}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Bottombar