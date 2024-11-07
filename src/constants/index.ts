import { City } from "../interfaces/location.interface";

export const cities: City[] = [
    {id: "1", name: 'Yaguará', image: 'http:imagen'},
    {id: "2", name: 'Neiva',image: 'http:imagen'}
]

export const ROLES = {
    ADMIN: 'admin',
    CLIENT: 'client',
    SUPER_ADMIN: 'super-admin'
} as const