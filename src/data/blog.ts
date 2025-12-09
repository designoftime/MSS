export type BlogPost = {
    slug: string
    title: string
    excerpt: string
    date: string
    readTime: string
    author: string
    category: "Technology" | "Finance" | "Residential" | "Commercial" | "Maintenance"
    heroImage: string
    content: string
    seo: {
        title: string
        description: string
        ogImage: string
    }
}

export const blogPosts: BlogPost[] = [
    {
        slug: "future-of-solar-2025",
        title: "The Future of Solar Energy: Trends for 2025",
        excerpt: "From bifacial panels to AI-driven grid management, here is what the next year holds for renewable energy.",
        date: "October 12, 2024",
        readTime: "5 min read",
        author: "Robert Fox",
        category: "Technology",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop",
        content: `
# The Future of Solar Energy

As we approach 2025, the solar landscape is shifting rapidly. The days of simple rooftop installations are evolving into integrated smart energy ecosystems.

## Bifacial Technology
Bifacial panels, which capture sunlight from both the front and back, are becoming the standard for commercial installations. This technology can increase generation by up to 20% by capturing reflected light from the roof surface.

## Storage is King
Solar without storage is becoming less common. With grid instability on the rise, homeowners are prioritizing energy independence through battery backups like the Tesla Powerwall 3 and Enphase IQ Battery 5P.

## AI and Energy Management
The new frontier is software. Smart home hubs are now intelligently managing energy flow—selling back to the grid when prices are high and drawing from batteries when they are low, all without user intervention.
    `,
        seo: {
            title: "The Future of Solar Energy 2025 | Mega Solar Solutions",
            description: "Discover the top solar energy trends for 2025, from bifacial technology to AI-driven grid management.",
            ogImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2669&auto=format&fit=crop"
        }
    },
    {
        slug: "commercial-solar-roi",
        title: "Maximizing ROI for Commercial Solar Projects",
        excerpt: "How businesses can leverage tax incentives and MACRS depreciation to achieve payback periods under 4 years.",
        date: "September 28, 2024",
        readTime: "8 min read",
        author: "Cameron Williamson",
        category: "Finance",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
        content: `
# Financial Benefits of Going Solar

For businesses, solar is more than an environmental statement—it's a financial instrument.

## The 30% ITC
The Investment Tax Credit (ITC) remains the cornerstone of solar finance, offering a dollar-for-dollar reduction in federal income tax liability equal to 30% of the project cost.

## MACRS Depreciation
Modified Accelerated Cost Recovery System (MACRS) allows businesses to write off the entire value of the solar asset over a 5-year schedule. In many cases, this can cover another 20-30% of the system cost.

## Operating Expense Reduction
By locking in a fixed cost for electricity (or eliminating it entirely), businesses insulate themselves from utility rate inflation, which has averaged 4% annually over the last decade.
    `,
        seo: {
            title: "Commercial Solar ROI Guide | Mega Solar Solutions",
            description: "Learn how to maximize ROI for commercial solar projects using tax incentives and depreciation.",
            ogImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
        }
    }
]