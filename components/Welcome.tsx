'use client';
import { useState } from 'react';
import { Button } from './ui/button'

const Welcome = ({ username }: { username: string }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Button className={`transition delay-0 ease-in text-black gradient-bg hover:scale-110 hover:-translate-y-1  font-semibold mt-3 ${isOpen ? 'animate-offLoading' : 'animate-onLoading'}`} onClick={() => setIsOpen(true)}>Hi Dear👋</Button>
            <section className='w-full lg:max-w-[50%] lg:mx-auto transition-height'>
                <div className={`border shadow-xl rounded-lg gradient-bg relative transition-height ${isOpen ? 'animate-onLoading expandHeight' : 'animate-offLoading collapseHeight'} `}>
                    <h1 className="text-sm font-normal text-left mt-8">Hello,<br /><span className='text-4xl font-bold'>{username ? username : 'Food Lover'}</span></h1>
                    <h2 className='my-4 text-left font-bold text-lg'>Welcome to GoFood! 🍔🍕</h2>
                    <p className='text-sm'>Your ultimate destination for delightful meals and endless cravings.</p>
                    <Button className='bg-transparent transition delay-100 ease-out hover:bg-transparent text-black text-2xl shadow-xl absolute top-4 right-4 hover:animate-dance' onClick={() => setIsOpen(false)}>X</Button>
                </div>
            </section>
        </>

    )
}

export default Welcome