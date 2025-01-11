'use client';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchSection = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) params.set('query', term);
        else params.delete('query');
        replace(`${pathName}?${params.toString()}`);
    }, 300);

    return (
        <div className="w-full animate-fromUpper transition duration-500 ease-in">
            <div className="flex-between mx-auto gap-6 w-full lg:w-[60%] xl:w-[50%] mt-6">
                <label htmlFor="searchtext" ></label>
                    <Input
                        placeholder="Search food..."
                        className="shadow-xl dark:border-2 dark:border-white"
                        id='searchtext'
                        onChange={(e) => handleSearch(e.target.value)}
                        defaultValue={searchParams.get('query')?.toString()}
                        autoFocus
                    />
                
                <Button className="gradient-bg text-black hover:animate-dance">Search</Button>
            </div>
        </div>
    );
};

export default SearchSection;
