export type Project = {
    slug: string
    title: string
    category: "Residential" | "Commercial" | "Industrial"
    location: string
    size: string
    image: string
    challenge: string
    solution: string
    images: string[]
    stats: { label: string; value: string }[]
}

export const projects: Project[] = [
    {
        slug: "apex-tech-campus",
        title: "Apex Tech Campus",
        category: "Commercial",
        location: "San Francisco, CA",
        size: "1.2 MW System",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
        challenge: "The tech campus required a sustainable energy solution that could offset 60% of their massive energy consumption while blending with their award-winning architecture.",
        solution: "We engineered a custom carport canopy system combined with high-efficiency rooftop arrays. using bifacial panels to capture reflected light.",
        images: [
            "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2332&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop"
        ],
        stats: [
            { label: "Annual Savings", value: "$450,000" },
            { label: "Panels Installed", value: "3,400" },
            { label: "CO2 Offset", value: "900 Tons" }
        ]
    },
    {
        slug: "highland-estate",
        title: "The Highland Estate",
        category: "Residential",
        location: "Aspen, CO",
        size: "45 kW System + Storage",
        image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
        challenge: "The homeowner needed a reliable off-grid capable system that could withstand heavy snow loads and power a large luxury estate.",
        solution: "We installed a rugged, snow-rated mounting system with 3 Tesla Powerwalls for full backup capability during winter storms.",
        images: [
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1513694203232-7e96068e7236?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop"
        ],
        stats: [
            { label: "Backup Duration", value: "7 Days" },
            { label: "Grid Independence", value: "95%" },
            { label: "ROI", value: "6.5 Years" }
        ]
    },
    {
        slug: "marina-logistics",
        title: "Marina Logistics Hub",
        category: "Industrial",
        location: "Long Beach, CA",
        size: "850 kW System",
        image: "https://images.unsplash.com/photo-1628135899882-629b718991b1?q=80&w=2670&auto=format&fit=crop",
        challenge: "A 24/7 logistics facility needed to reduce peak demand charges without disrupting operations during installation.",
        solution: "We executed a phased installation plan over weekends and nights. The system includes peak-shaving software integration.",
        images: [
            "https://images.unsplash.com/photo-1628135899882-629b718991b1?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094794329-cd1196532881?q=80&w=2670&auto=format&fit=crop"
        ],
        stats: [
            { label: "Peak Reduction", value: "40%" },
            { label: "Annual Generation", value: "1.2 GWh" },
            { label: "Payback Period", value: "4 Years" }
        ]
    }
]

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug)
}
