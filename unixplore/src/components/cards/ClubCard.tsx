import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { getCategoryColor, truncate } from '@/lib/utils';

interface ClubCardProps {
    id: number;
    name: string;
    description: string;
    categoryName: string;
    categorySlug: string;
}

export function ClubCard({ id, name, description, categoryName, categorySlug }: ClubCardProps) {
    return (
        <Card className="card-hover h-full flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg line-clamp-2 flex-1">{name}</CardTitle>
                    <Badge className={getCategoryColor(categorySlug)}>
                        {categoryName}
                    </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                    {truncate(description, 150)}
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <Link href={`/clubs/${id}`}>
                    <Button className="w-full" variant="outline">
                        View Club
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}
