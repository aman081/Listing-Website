const sampleListings = [
    {
        title: "Desert Oasis",
        description: "Stunning modern villa in the heart of the desert featuring spacious bedrooms, a luxurious swimming pool, and breathtaking sunset views that will leave you mesmerized every evening. Perfect for those seeking tranquility.",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
        price: 27500,
        location: "Dubai",
        country: "UAE",
        category:"rooms"
    },
    {
        title: "Tropical Paradise",
        description: "Luxury beachfront property with private gardens, direct access to white sandy beaches, and world-class amenities including a private chef service and daily housekeeping for ultimate relaxation and comfort.",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        price: 42000,
        location: "Bali",
        country: "Indonesia",
        category:"rooms"
    },
    
    {
        title: "Vineyard Estate",
        description: "Historic estate surrounded by rolling vineyards offering wine tasting tours, gourmet dining experiences, and elegant accommodations with antique furnishings that transport you to a bygone era of sophistication.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        price: 49500,
        location: "Bordeaux",
        country: "France",
        category:"nature"

    },
    {
        title: "Forest Hideaway",
        description: "Eco-friendly retreat nestled in ancient forest with sustainable architecture, organic gardens, and numerous hiking trails that allow you to connect with nature while enjoying modern comforts and amenities.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        price: 18500,
        location: "Portland",
        country: "United States",
        category:"nature"
    },
    {
        title: "Urban Penthouse",
        description: "Luxury penthouse with panoramic city views featuring floor-to-ceiling windows, smart home technology, and access to exclusive rooftop amenities including an infinity pool and private lounge area.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        price: 48500,
        location: "Singapore",
        country: "Singapore",
        category:"citylife"
    },
    {
        title: "Island Paradise",
        description: "Private island resort with luxury amenities including overwater bungalows, a world-class spa, and numerous water sports activities available right at your doorstep for the ultimate tropical getaway experience.",
        image: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d",
        price: 45000,
        location: "Maldives",
        country: "Maldives",
        category:"beach"
    },
    {
        title: "Mountain Lodge",
        description: "Rustic luxury lodge with mountain views featuring a stone fireplace, hot tub on the deck, and easy access to ski slopes during winter and hiking trails in summer months for year-round enjoyment.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
        price: 32000,
        location: "Whistler",
        country: "Canada",
        category:"mountain"
    },
    {
        title: "Riverside Manor",
        description: "Historic manor with private river frontage offering elegant period features, beautifully landscaped gardens, and modern comforts carefully integrated to preserve the building's original character and charm.",
        image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
        price: 38000,
        location: "Oxford",
        country: "UK",
        category:"castle"
    },
    {
        title: "Mediterranean Villa",
        description: "Elegant villa with sea views and olive groves featuring traditional architecture, a saltwater swimming pool, and outdoor dining areas perfect for enjoying the region's famous cuisine and wines.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        price: 29500,
        location: "Tuscany",
        country: "Italy",
        category:"citylife"
    },
    {
        title: "Arctic Lodge",
        description: "Luxury glass lodge for northern lights viewing equipped with thermal insulation, heated floors, and expert guides available to help you experience the magical aurora borealis in complete comfort and style.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        price: 26500,
        location: "Rovaniemi",
        country: "Finland",
        category:"nature"
    },
    {
        title: "Safari Lodge",
        description: "Luxury lodge in private game reserve offering daily guided safaris, gourmet bush dinners, and elegant tented accommodations that bring you close to nature without sacrificing comfort or convenience.",
        image: "https://images.unsplash.com/photo-1545153996-e01b50d6ec38",
        price: 41000,
        location: "Kruger Park",
        country: "South Africa",
        category:"camping"
    },
    {
        title: "Coastal Villa",
        description: "Modern villa with private beach access featuring contemporary design, smart home features, and multiple outdoor living spaces to enjoy the sea breeze and spectacular ocean sunsets every evening.",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
        price: 47500,
        location: "Amalfi Coast",
        country: "Italy",
        category:"camping"

    },
    {
        title: "Sky Penthouse",
        description: "Ultra-luxury penthouse with helipad offering 360-degree city views, designer interiors, and exclusive access to building amenities including a private cinema, wine cellar, and fitness center with personal trainers.",
        image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e",
        price: 49500,
        location: "Monaco",
        country: "Monaco",
        category:"rooms"
    },
    {
        title: "Ranch Estate",
        description: "Working ranch with luxury main residence featuring equestrian facilities, vast open spaces, and modern comforts blended with rustic charm for those seeking an authentic country living experience.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        price: 35000,
        location: "Montana",
        country: "United States",
        category:"farm"
    },
    {
        title: "Zen Retreat",
        description: "Contemporary home with Japanese gardens featuring meditation spaces, a koi pond, and minimalist design that creates a peaceful sanctuary for relaxation and mindfulness in beautiful natural surroundings.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
        price: 28500,
        location: "Kyoto",
        country: "Japan",
        category:"farm"
    },
    {
        title: "Canal House",
        description: "Historic canal house with modern interior preserving original features like beamed ceilings while offering contemporary comforts and a prime location for exploring the city's famous waterways and culture.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
        price: 39500,
        location: "Amsterdam",
        country: "Netherlands",
        category:"rooms"
    },
    {
        title: "Beachfront Estate",
        description: "Luxury estate with private beach featuring multiple villas, a beachfront infinity pool, and tropical gardens creating the perfect setting for large family gatherings or exclusive retreats by the ocean.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        price: 49000,
        location: "Maui",
        country: "United States",
        category:"camping"
    },
    {
        title: "Wine Country Villa",
        description: "Modern villa in premium wine region offering private tastings, vineyard tours, and gourmet kitchens perfect for preparing meals with local ingredients paired with exceptional regional wines.",
        image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
        price: 37500,
        location: "Napa Valley",
        country: "United States",
        category:"citylife"
    },
    {
        title: "Cliff House",
        description: "Architectural masterpiece on coastal cliffs featuring floor-to-ceiling windows, a suspended deck, and innovative design that blends seamlessly with the dramatic natural surroundings and ocean vistas.",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
        price: 45500,
        location: "Big Sur",
        country: "United States",
        category:"castle"
    },
    {
        title: "Rainforest Retreat",
        description: "Eco-luxury home in pristine rainforest featuring sustainable materials, private nature trails, and abundant wildlife viewing opportunities while maintaining modern comforts and environmentally conscious design.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
        price: 22500,
        location: "Costa Rica",
        country: "Costa Rica",
        category:"mountain"
    },
    {
        title: "Harbor Penthouse",
        description: "Luxury penthouse with harbor views offering premium finishes, smart home technology, and private balcony spaces perfect for watching the bustling harbor activity and spectacular waterfront sunsets.",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        price: 46500,
        location: "Sydney",
        country: "Australia",
        category:"citylife"
    },
    {
        title: "Castle Estate",
        description: "Restored medieval castle with modern amenities preserving historic character while offering luxurious accommodations, grand banquet halls, and extensive grounds perfect for events or private enjoyment.",
        image: "https://images.unsplash.com/photo-1533387520709-752d83de3630",
        price: 49500,
        location: "Edinburgh",
        country: "Scotland",
        category:"nature"
    },
    {
        title: "Desert Ranch",
        description: "Luxury ranch in scenic desert landscape featuring adobe architecture, stargazing decks, and guided nature tours to experience the unique beauty and tranquility of the desert environment.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        price: 31000,
        location: "Sedona",
        country: "United States",
        category:"castle"
    },
    {
        title: "Fjord House",
        description: "Modern home with stunning fjord views featuring Scandinavian design, floor-to-ceiling windows, and private boat access for exploring the majestic waterways and dramatic coastal landscapes.",
        image: "https://images.unsplash.com/photo-1464146072230-91cabc968266",
        price: 33500,
        location: "Bergen",
        country: "Norway",
        category:"mountain"
    },
    {
        title: "Volcano View Villa",
        description: "Luxury villa overlooking active volcano featuring observation decks, geothermal heated pools, and expert guides available to explain the fascinating geology and history of the dramatic landscape.",
        image: "https://images.unsplash.com/photo-1455587734955-081b22074882",
        price: 29000,
        location: "Hawaii",
        country: "United States",
        category:"rooms"
    },
    {
        title: "Garden Mansion",
        description: "Historic mansion with extensive gardens featuring ornate fountains, walking paths through manicured hedges, and elegant reception rooms perfect for hosting events or enjoying refined living.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        price: 42500,
        location: "Versailles",
        country: "France",
        category:"citylife"
    },
    {
        title: "Lake Estate",
        description: "Premium estate with private lake offering water activities, lakeside dining pavilions, and beautifully landscaped grounds that create a serene retreat surrounded by nature and water views.",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        price: 38500,
        location: "Lake Como",
        country: "Italy",
        category:"beach"
    },
    {
        title: "Ice Hotel Suite",
        description: "Permanent luxury suite in ice hotel featuring thermal insulation, heated bathroom floors, and artistic ice sculptures that are redesigned each season by international artists and designers.",
        image: "https://images.unsplash.com/photo-1548704806-0c20f7ea6474",
        price: 19500,
        location: "Jukkasjärvi",
        country: "Sweden",
        category:"arctic"
    },
    {
        title: "Lighthouse Home",
        description: "Converted lighthouse with panoramic views featuring circular living spaces, maritime decor, and observation decks that offer 360-degree vistas of the dramatic coastline and ocean beyond.",
        image: "https://images.unsplash.com/photo-1582610116397-edb318620f90",
        price: 27500,
        location: "Maine",
        country: "United States",
        category:"farm"
    },
    {
        title: "Bamboo Villa",
        description: "Sustainable luxury villa made from bamboo featuring open-air living spaces, organic architecture, and eco-friendly systems that minimize environmental impact while maximizing comfort and style.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
        price: 23500,
        location: "Ubud",
        country: "Indonesia",
        category:"arctic"

    }
];

const updatedListings = sampleListings.map((listing, index) => {
    return {
        ...listing,
        image: {
            url: listing.image,
            filename: `UnsplashImage-${index}`
        }
    };
});




module.exports = { data: updatedListings };

