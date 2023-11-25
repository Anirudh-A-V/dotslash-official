import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-28', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client)

export const getPreEvents = async () => {
    const preEvents = await client.fetch(`*[_type == "preEvents"] | order(date desc)`)
    return preEvents
}

export const getCompetitions = async () => {
    const competitions = await client.fetch(`*[_type == "competitions"] | order(date desc)`)
    return competitions
}

export const getWorkshops = async () => {
    const workshops = await client.fetch(`*[_type == "workshops"] | order(date desc)`)
    return workshops
}

export const getInformals = async () => {
    const informals = await client.fetch(`*[_type == "informals"] | order(date desc)`)
    return informals
}

export const getJuniorEvents = async () => {
    const juniorEvents = await client.fetch(`*[_type == "juniorEvents"] | order(date desc)`)
    return juniorEvents
}

export const getFeaturedEvents = async () => {
    const featuredEvents = await client.fetch(`*[_type == "featuredEvents"] | order(date desc)`)
    return featuredEvents
}

export const getAllActiveEvents = async () => {
    const [preEventData, competitionData, workshopData, informalsData, dotslashJuniorData, featuredEventsData] = await Promise.all([
        client.fetch(`*[_type == "preEvents" && isOpen == true] | order(date desc)`),
        client.fetch(`*[_type == "competitions"] && isOpen == true | order(date desc)`),
        client.fetch(`*[_type == "workshops"] && isOpen == true | order(date desc)`),
        client.fetch(`*[_type == "informals"] && isOpen == true | order(date desc)`),
        client.fetch(`*[_type == "juniorEvents"] && isOpen == true | order(date desc)`),
        client.fetch(`*[_type == "featuredEvents"] && isOpen == true | order(date desc)`)
    ])
    return { preEventData, competitionData, workshopData, informalsData, dotslashJuniorData, featuredEventsData }
}

export const urlFor = (source) => builder.image(source)