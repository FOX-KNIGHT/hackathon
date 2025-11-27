'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Check if it's a college ID format
            if (searchQuery.match(/^CLG-\d{6}$/i)) {
                router.push(`/colleges?id=${searchQuery.toUpperCase()}`);
            } else {
                router.push(`/colleges?search=${encodeURIComponent(searchQuery)}`);
            }
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Enter College Code (CLG-XXXXXX) or Search by Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-32 h-14 text-base rounded-2xl shadow-lg border-2"
                    aria-label="Search for colleges"
                />
                <Button
                    type="submit"
                    size="lg"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl"
                >
                    Search
                </Button>
            </div>
        </form>
    );
}
