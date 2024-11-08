import { City } from "../interfaces/location.interface";

export const cities: City[] = [
    { id: "1", name: "Acevedo", image: "https://example.com/acevedo.jpg", department: "Huila" },
    { id: "2", name: "Agrado", image: "https://example.com/agrado.jpg", department: "Huila" },
    { id: "3", name: "Aipe", image: "https://example.com/aipe.jpg", department: "Huila" },
    { id: "4", name: "Algeciras", image: "https://example.com/algeciras.jpg", department: "Huila" },
    { id: "5", name: "Altamira", image: "https://example.com/altamira.jpg", department: "Huila" },
    { id: "6", name: "Baraya", image: "https://example.com/baraya.jpg", department: "Huila" },
    { id: "7", name: "Campoalegre", image: "https://example.com/campoalegre.jpg", department: "Huila" },
    { id: "8", name: "Colombia", image: "https://example.com/colombia.jpg", department: "Huila" },
    { id: "9", name: "Elías", image: "https://example.com/elias.jpg", department: "Huila" },
    { id: "10", name: "Garzón", image: "https://example.com/garzon.jpg", department: "Huila" },
    { id: "11", name: "Gigante", image: "https://example.com/gigante.jpg", department: "Huila" },
    { id: "12", name: "Guadalupe", image: "https://example.com/guadalupe.jpg", department: "Huila" },
    { id: "13", name: "Hobo", image: "https://example.com/hobo.jpg", department: "Huila" },
    { id: "14", name: "Iquira", image: "https://example.com/iquira.jpg", department: "Huila" },
    { id: "15", name: "Isnos", image: "https://example.com/isnos.jpg", department: "Huila" },
    { id: "16", name: "La Argentina", image: "https://example.com/laargentina.jpg", department: "Huila" },
    { id: "17", name: "La Plata", image: "https://example.com/laplata.jpg", department: "Huila" },
    { id: "18", name: "Nátaga", image: "https://example.com/nataga.jpg", department: "Huila" },
    { id: "19", name: "Neiva", image: "https://example.com/neiva.jpg", department: "Huila" },
    { id: "20", name: "Oporapa", image: "https://example.com/oporapa.jpg", department: "Huila" },
    { id: "21", name: "Paicol", image: "https://example.com/paicol.jpg", department: "Huila" },
    { id: "22", name: "Palermo", image: "https://example.com/palermo.jpg", department: "Huila" },
    { id: "23", name: "Palestina", image: "https://example.com/palestina.jpg", department: "Huila" },
    { id: "24", name: "Pital", image: "https://example.com/pital.jpg", department: "Huila" },
    { id: "25", name: "Pitalito", image: "https://example.com/pitalito.jpg", department: "Huila" },
    { id: "26", name: "Rivera", image: "https://example.com/rivera.jpg", department: "Huila" },
    { id: "27", name: "Saladoblanco", image: "https://example.com/saladoblanco.jpg", department: "Huila" },
    { id: "28", name: "San Agustín", image: "https://example.com/sanagustin.jpg", department: "Huila" },
    { id: "29", name: "Santa María", image: "https://example.com/santamaria.jpg", department: "Huila" },
    { id: "30", name: "Suaza", image: "https://example.com/suaza.jpg", department: "Huila" },
    { id: "31", name: "Tarqui", image: "https://example.com/tarqui.jpg", department: "Huila" },
    { id: "32", name: "Tesalia", image: "https://example.com/tesalia.jpg", department: "Huila" },
    { id: "33", name: "Tello", image: "https://example.com/tello.jpg", department: "Huila" },
    { id: "34", name: "Teruel", image: "https://example.com/teruel.jpg", department: "Huila" },
    { id: "35", name: "Timaná", image: "https://example.com/timana.jpg", department: "Huila" },
    { id: "36", name: "Villavieja", image: "https://example.com/villavieja.jpg", department: "Huila" },
    { id: "37", name: "Yaguará", image: "https://example.com/yaguara.jpg", department: "Huila" }
]

export const ROLES = {
    ADMIN: 'admin',
    CLIENT: 'client',
    SUPER_ADMIN: 'super-admin'
} as const