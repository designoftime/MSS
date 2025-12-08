export type ProjectSection = {
    type: "text" | "stats" | "gallery" | "challenge-solution"
    title?: string
    content?: string
    items?: { label: string; value: string }[]
    images?: string[]
}

export type Project = {
    slug: string
    title: string
    location: string
    category: "Residential" | "Commercial" | "Industrial"
    size: string
    heroImage: string
    excerpt: string
    date: string
    seo: {
        title: string
        description: string
        ogImage: string
    }
    sections: ProjectSection[]
}

export const projects: Project[] = [
    {
        slug: "highland-estate",
        title: "The Highland Estate",
        location: "Aspen, CO",
        category: "Residential",
        size: "45 kW System + Storage",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop",
        excerpt: "A luxury off-grid capable system designed to withstand heavy snow loads.",
        date: "2024-03-15",
        seo: {
            title: "Highland Estate Solar Project | Mega Solar Solutions",
            description: "Explore how we powered a luxury Aspen estate with a 45kW solar system and Tesla Powerwalls for complete grid independence.",
            ogImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop"
        },
        sections: [
            {
                type: "challenge-solution",
                title: "The Challenge",
                content: "The homeowner needed a reliable off-grid capable system that could withstand heavy snow loads and power a large luxury estate. The remote location meant that grid outages were frequent during winter storms."
            },
            {
                type: "challenge-solution",
                title: "The Solution",
                content: "We installed a rugged, snow-rated mounting system with 3 Tesla Powerwalls for full backup capability. The system is designed to shed snow automatically and includes a heated sub-array."
            },
            {
                type: "stats",
                items: [
                    { label: "Backup Duration", value: "7 Days" },
                    { label: "Grid Independence", value: "95%" },
                    { label: "ROI", value: "6.5 Years" }
                ]
            },
            {
                type: "gallery",
                images: [
                    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop"
                ]
            }
        ]
    },
    {
        slug: "apex-tech-campus",
        title: "Apex Tech Campus",
        location: "San Francisco, CA",
        category: "Commercial",
        size: "1.2 MW System",
        heroImage: "https://images.unsplash.com/photo-1486406140526-7989565541e6?q=80&w=2670&auto=format&fit=crop",
        excerpt: "A massive commercial installation for a leading tech campus.",
        date: "2024-01-20",
        seo: {
            title: "Apex Tech Campus Solar | Mega Solar Solutions",
            description: "A 1.2 MW solar installation for a San Francisco tech campus, offsetting 60% of energy consumption.",
            ogImage: "https://images.unsplash.com/photo-1486406140526-7989565541e6?q=80&w=2670&auto=format&fit=crop"
        },
        sections: [
            {
                type: "challenge-solution",
                title: "The Challenge",
                content: "The tech campus required a sustainable energy solution that could offset 60% of their massive energy consumption while blending with their award-winning architecture."
            },
            {
                type: "challenge-solution",
                title: "The Solution",
                content: "We engineered a custom carport canopy system combined with high-efficiency rooftop arrays using bifacial panels to capture reflected light."
            },
            {
                type: "stats",
                items: [
                    { label: "Annual Savings", value: "$450,000" },
                    { label: "Panels Installed", value: "3,400" },
                    { label: "CO2 Offset", value: "900 Tons" }
                ]
            },
            {
                type: "gallery",
                images: [
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop"
                ]
            }
        ]
    },
    {
        slug: "marina-logistics",
        title: "Marina Logistics Hub",
        location: "Long Beach, CA",
        category: "Industrial",
        size: "850 kW System",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        excerpt: "Peak-shaving solar solution for a 24/7 logistics facility.",
        date: "2023-11-10",
        seo: {
            title: "Marina Logistics Solar | Mega Solar Solutions",
            description: "An 850 kW industrial solar system designed to reduce peak demand charges.",
            ogImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
        },
        sections: [
            {
                type: "challenge-solution",
                title: "The Challenge",
                content: "A 24/7 logistics facility needed to reduce peak demand charges without disrupting operations during installation."
            },
            {
                type: "challenge-solution",
                title: "The Solution",
                content: "We executed a phased installation plan over weekends and nights. The system includes peak-shaving software integration."
            },
            {
                type: "stats",
                items: [
                    { label: "Peak Reduction", value: "40%" },
                    { label: "Annual Generation", value: "1.2 GWh" },
                    { label: "Payback Period", value: "4 Years" }
                ]
            },
            {
                type: "gallery",
                images: [
                    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1566576912902-1dcd47e3c153?q=80&w=2670&auto=format&fit=crop"
                ]
            }
        ]
    }
]
