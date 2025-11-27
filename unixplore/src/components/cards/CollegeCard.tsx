import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

interface CollegeCardProps {
    id: number;
    collegeId: string;
    name: string;
    location: string;
    clubCount?: number;
}

export function CollegeCard({ id, collegeId, name, location, clubCount }: CollegeCardProps) {
    return (
        <Card className="card-hover h-full">
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl line-clamp-2">{name}</CardTitle>
                        <CardDescription className="mt-2 flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="line-clamp-1">{location}</span>
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">College ID:</span>
                    <code className="px-2 py-1 bg-muted rounded text-xs font-mono">{collegeId}</code>
                </div>
                {clubCount !== undefined && (
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Clubs:</span>
                        <span className="font-semibold">{clubCount}</span>
                    </div>
                )}
                <Link href={`/colleges/${id}`} className="block">
                    <Button className="w-full" variant="default">
                        View College
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
