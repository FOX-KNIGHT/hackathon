import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/50 mt-auto">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                                U
                            </div>
                            <span className="font-bold text-xl">UniXplore</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Discover colleges and clubs. Club. Create. Collaborate.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/colleges" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Find Colleges
                                </Link>
                            </li>
                            <li>
                                <Link href="/#categories" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Browse Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Admins */}
                    <div>
                        <h3 className="font-semibold mb-4">For Admins</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/register/college" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Register College
                                </Link>
                            </li>
                            <li>
                                <Link href="/register/club" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Register Club
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/college" className="text-muted-foreground hover:text-foreground transition-colors">
                                    College Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/club" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Club Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Security Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} UniXplore. All rights reserved. No cookies. No tracking.</p>
                </div>
            </div>
        </footer>
    );
}
