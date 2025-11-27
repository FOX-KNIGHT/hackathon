'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-custom">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                            U
                        </div>
                        <span className="font-bold text-xl hidden sm:inline-block">UniXplore</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/colleges"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Find Colleges
                        </Link>
                        <Link
                            href="/register/college"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Register College
                        </Link>
                        <Link
                            href="/register/club"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Register Club
                        </Link>
                        <div className="h-4 w-px bg-border" />
                        <Link href="/admin/college">
                            <Button variant="outline" size="sm">
                                College Admin
                            </Button>
                        </Link>
                        <Link href="/admin/club">
                            <Button variant="default" size="sm">
                                Club Admin
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-3 border-t animate-fade-in">
                        <Link
                            href="/colleges"
                            className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Find Colleges
                        </Link>
                        <Link
                            href="/register/college"
                            className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Register College
                        </Link>
                        <Link
                            href="/register/club"
                            className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Register Club
                        </Link>
                        <div className="border-t pt-3 space-y-2">
                            <Link href="/admin/college" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" size="sm" className="w-full">
                                    College Admin
                                </Button>
                            </Link>
                            <Link href="/admin/club" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="default" size="sm" className="w-full">
                                    Club Admin
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
