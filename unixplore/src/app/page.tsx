import Link from 'next/link';
import { SearchBar } from '@/components/search/SearchBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Heart, Trophy, Camera } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UniXplore - Discover Colleges and Clubs',
    description: 'A centralized platform for discovering colleges and their clubs. Explore technical, cultural, social, sports, and media clubs across universities.',
    openGraph: {
        title: 'UniXplore - Discover Colleges and Clubs',
        description: 'Club. Create. Collaborate. Discover colleges and their clubs.',
        type: 'website',
    },
};

const categories = [
    {
        name: 'Technical',
        slug: 'technical',
        icon: Code,
        color: 'bg-technical/10 text-technical border-technical/20',
        description: 'Coding, robotics, AI, and innovation',
    },
    {
        name: 'Cultural',
        slug: 'cultural',
        icon: Palette,
        color: 'bg-cultural/10 text-cultural border-cultural/20',
        description: 'Dance, music, art, and theatre',
    },
    {
        name: 'Social',
        slug: 'social',
        icon: Heart,
        color: 'bg-social/10 text-social border-social/20',
        description: 'Community service and social impact',
    },
    {
        name: 'Sports',
        slug: 'sports',
        icon: Trophy,
        color: 'bg-sports/10 text-sports border-sports/20',
        description: 'Athletics, fitness, and competition',
    },
    {
        name: 'Media',
        slug: 'media',
        icon: Camera,
        color: 'bg-media/10 text-media border-media/20',
        description: 'Photography, videography, and content',
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            Club. Create. Collaborate.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            Discover colleges and their clubs. Find your community, explore opportunities, and connect with like-minded students.
                        </p>
                        <div className="pt-4">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
                        <p className="text-lg text-muted-foreground">
                            Browse clubs across different categories
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <Card key={category.slug} className="card-hover">
                                    <CardContent className="p-6 text-center space-y-4">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color}`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                                            <p className="text-sm text-muted-foreground">{category.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">Are you a college or club admin?</h2>
                        <p className="text-lg text-muted-foreground">
                            Register your college or club to reach thousands of students and showcase your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register/college">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Register College
                                </Button>
                            </Link>
                            <Link href="/register/club">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Register Club
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg">Easy Discovery</h3>
                            <p className="text-muted-foreground">
                                Search colleges by ID or name and explore their clubs instantly
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg">No Login Required</h3>
                            <p className="text-muted-foreground">
                                Browse all content freely without creating an account
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg">Always Updated</h3>
                            <p className="text-muted-foreground">
                                Clubs post announcements and registrations in real-time
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
