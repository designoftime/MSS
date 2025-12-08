export type BlogPost = {
    slug: string
    title: string
    excerpt: string
    date: string
    author: string
    category: "Technology" | "Finance" | "Commercial" | "Residential" | "Maintenance"
    content: string
    readTime: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "future-of-solar-2025",
        title: "The Future of Solar Energy: Trends for 2025",
        excerpt: "From bifacial panels to AI-driven grid management, here is what the next year holds for renewable energy.",
        date: "October 12, 2024",
        author: "Robert Fox",
        readTime: "5 min read",
        category: "Technology",
        content: `
# The Future of Solar Energy

As we approach 2025, the solar landscape is shifting rapidly. The days of simple rooftop installations are evolving into integrated smart energy ecosystems.

## Bifacial Technology
Bifacial panels, which capture sunlight from both the front and back, are becoming the standard for commercial installations. This technology can increase generation by up to 20% by capturing reflected light from the roof surface.

## Storage is King
Solar without storage is becoming less common. With grid instability on the rise, homeowners are prioritizing energy independence through battery backups like the Tesla Powerwall 3 and Enphase IQ Battery 5P.

## AI and Energy Management
The new frontier is software. Smart home hubs are now intelligently managing energy flow—selling back to the grid when prices are high and drawing from batteries when they are low, all without user intervention.
    `
    },
    {
        slug: "commercial-solar-roi",
        title: "Maximizing ROI for Commercial Solar Projects",
        excerpt: "How businesses can leverage tax incentives and MACRS depreciation to achieve payback periods under 4 years.",
        date: "September 28, 2024",
        author: "Cameron Williamson",
        readTime: "8 min read",
        category: "Finance",
        content: `
# Financial Benefits of Going Solar

For businesses, solar is more than an environmental statement—it's a financial instrument.

## The 30% ITC
The Investment Tax Credit (ITC) remains the cornerstone of solar finance, offering a dollar-for-dollar reduction in federal income tax liability equal to 30% of the project cost.

## MACRS Depreciation
Modified Accelerated Cost Recovery System (MACRS) allows businesses to write off the entire value of the solar asset over a 5-year schedule. In many cases, this can cover another 20-30% of the system cost.

## Operating Expense Reduction
By locking in a fixed cost for electricity (or eliminating it entirely), businesses insulate themselves from utility rate inflation, which has averaged 4% annually over the last decade.
    `
    },
    {
        slug: "battery-storage-guide",
        title: "Complete Guide to Home Battery Storage",
        excerpt: "LiFePO4 vs NMC? AC vs DC coupled? We break down everything you need to know about backing up your home.",
        date: "September 15, 2024",
        author: "Esther Howard",
        readTime: "6 min read",
        category: "Technology",
        content: `
# Why Add a Battery?

Power outages are becoming more frequent. A solar battery ensures your lights, fridge, and internet stay on when the grid goes down.

## Chemistry Matters
**LFP (Lithium Iron Phosphate)**: Safer, longer life cycle (6000+ cycles), but heavier. Recommended for most home applications.
**NMC (Nickel Manganese Cobalt)**: Higher energy density, lighter, but shorter lifespan.

## Sizing Your Battery
Do you want to back up the whole house or just critical loads? A typical 10-13 kWh battery can run critical loads (lights, fridge, router) for 12-24 hours depending on usage.
    `
    },
    {
        slug: "solar-aesthetics",
        title: "Designing Solar for Modern Architecture",
        excerpt: "Solar doesn't have to look like an afterthought. Explore our approach to building-integrated photovoltaics (BIPV).",
        date: "August 22, 2024",
        author: "Robert Fox",
        readTime: "4 min read",
        category: "Residential",
        content: `
# The Era of Beautiful Solar

Gone are the days of bulky blue panels on silver rails.

## All-Black Aesthetics
We exclusively use all-black modules with black backsheets and black anodized frames. When coupled with our skirt kits, the array looks like a seamless sheet of black glass.

## Hidden Conduit
Nothing ruins a facade like a silver conduit pipe running down the wall. We excel at internal conduit runs, hiding all wiring in the attic or wall cavities for a completely clean exterior.
    `
    },
    {
        slug: "nem-3-explained",
        title: "Understanding NEM 3.0 in California",
        excerpt: "Net Metering has changed. Learn how to adapt your strategy to maximize savings under the new billing rules.",
        date: "August 10, 2024",
        author: "Cameron Williamson",
        readTime: "7 min read",
        category: "Finance",
        content: `
# The Shift to Self-Consumption

NEM 3.0 slashed the value of export credits by approx 75%. This means sending power back to the grid is no longer profitable.

## The Strategy
The key is **Self-Consumption**. You want to use the solar power YOU generate. This incentivizes:
1.  West-facing panels (generating power later in the day when usage is high).
2.  Batteries (storing noon energy to use at night).
3.  Load shifting (running pool pumps and EV chargers when the sun is shining).
    `
    },
    {
        slug: "cleaning-maintenance",
        title: "Do Solar Panels Need Cleaning?",
        excerpt: "The truth about soiling losses and when you should call a professional vs waiting for rain.",
        date: "July 05, 2024",
        author: "Esther Howard",
        readTime: "3 min read",
        category: "Maintenance",
        content: `
# Soiling Losses Explained

Dust, pollen, and bird droppings can reduce system output by 5-15% depending on your location.

## Rain vs Professional Cleaning
For most residential systems, rain is sufficient to keep panels clean enough. However, in arid climates or areas with heavy pollen, an annual cleaning can pay for itself in recovered production.

## Warning
Never use commercial glass cleaners or abrasive brushes. Deionized water and a soft bristle brush are the only recommended tools to enhance longevity.
    `
    }
]

export function getBlogPost(slug: string) {
    return blogPosts.find((p) => p.slug === slug)
}
