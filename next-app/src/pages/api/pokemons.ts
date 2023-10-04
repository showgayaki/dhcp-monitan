// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = [
        {
            "id": 1,
            "identifier": "bulbasaur",
            "pokemondb_identifier": "bulbasaur",
            "name": "Bulbasaur",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Grass"
            ],
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special_attack": 65,
            "special_defense": 65,
            "speed": 45,
            "total": 318
        },
        {
            "id": 2,
            "identifier": "ivysaur",
            "pokemondb_identifier": "ivysaur",
            "name": "Ivysaur",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Grass"
            ],
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "special_attack": 80,
            "special_defense": 80,
            "speed": 60,
            "total": 405
        },
        {
            "id": 3,
            "identifier": "venusaur",
            "pokemondb_identifier": "venusaur",
            "name": "Venusaur",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Grass"
            ],
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "special_attack": 100,
            "special_defense": 100,
            "speed": 80,
            "total": 525
        },
        {
            "id": 4,
            "identifier": "charmander",
            "pokemondb_identifier": "charmander",
            "name": "Charmander",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Monster",
                "Dragon"
            ],
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special_attack": 60,
            "special_defense": 50,
            "speed": 65,
            "total": 309
        },
        {
            "id": 5,
            "identifier": "charmeleon",
            "pokemondb_identifier": "charmeleon",
            "name": "Charmeleon",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Monster",
                "Dragon"
            ],
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "special_attack": 80,
            "special_defense": 65,
            "speed": 80,
            "total": 405
        },
        {
            "id": 6,
            "identifier": "charizard",
            "pokemondb_identifier": "charizard",
            "name": "Charizard",
            "types": [
                "fire",
                "flying"
            ],
            "egg_groups": [
                "Monster",
                "Dragon"
            ],
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "special_attack": 109,
            "special_defense": 85,
            "speed": 100,
            "total": 534
        },
        {
            "id": 7,
            "identifier": "squirtle",
            "pokemondb_identifier": "squirtle",
            "name": "Squirtle",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "special_attack": 50,
            "special_defense": 64,
            "speed": 43,
            "total": 314
        },
        {
            "id": 8,
            "identifier": "wartortle",
            "pokemondb_identifier": "wartortle",
            "name": "Wartortle",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "special_attack": 65,
            "special_defense": 80,
            "speed": 58,
            "total": 405
        },
        {
            "id": 9,
            "identifier": "blastoise",
            "pokemondb_identifier": "blastoise",
            "name": "Blastoise",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "special_attack": 85,
            "special_defense": 105,
            "speed": 78,
            "total": 530
        },
        {
            "id": 10,
            "identifier": "caterpie",
            "pokemondb_identifier": "caterpie",
            "name": "Caterpie",
            "types": [
                "bug"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "special_attack": 20,
            "special_defense": 20,
            "speed": 45,
            "total": 195
        },
        {
            "id": 11,
            "identifier": "metapod",
            "pokemondb_identifier": "metapod",
            "name": "Metapod",
            "types": [
                "bug"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "special_attack": 25,
            "special_defense": 25,
            "speed": 30,
            "total": 205
        },
        {
            "id": 12,
            "identifier": "butterfree",
            "pokemondb_identifier": "butterfree",
            "name": "Butterfree",
            "types": [
                "bug",
                "flying"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "special_attack": 90,
            "special_defense": 80,
            "speed": 70,
            "total": 395
        },
        {
            "id": 13,
            "identifier": "weedle",
            "pokemondb_identifier": "weedle",
            "name": "Weedle",
            "types": [
                "bug",
                "poison"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "special_attack": 20,
            "special_defense": 20,
            "speed": 50,
            "total": 195
        },
        {
            "id": 14,
            "identifier": "kakuna",
            "pokemondb_identifier": "kakuna",
            "name": "Kakuna",
            "types": [
                "bug",
                "poison"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "special_attack": 25,
            "special_defense": 25,
            "speed": 35,
            "total": 205
        },
        {
            "id": 15,
            "identifier": "beedrill",
            "pokemondb_identifier": "beedrill",
            "name": "Beedrill",
            "types": [
                "bug",
                "poison"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "special_attack": 45,
            "special_defense": 80,
            "speed": 75,
            "total": 395
        },
        {
            "id": 16,
            "identifier": "pidgey",
            "pokemondb_identifier": "pidgey",
            "name": "Pidgey",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "special_attack": 35,
            "special_defense": 35,
            "speed": 56,
            "total": 251
        },
        {
            "id": 17,
            "identifier": "pidgeotto",
            "pokemondb_identifier": "pidgeotto",
            "name": "Pidgeotto",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "special_attack": 50,
            "special_defense": 50,
            "speed": 71,
            "total": 349
        },
        {
            "id": 18,
            "identifier": "pidgeot",
            "pokemondb_identifier": "pidgeot",
            "name": "Pidgeot",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "special_attack": 70,
            "special_defense": 70,
            "speed": 101,
            "total": 479
        },
        {
            "id": 19,
            "identifier": "rattata",
            "pokemondb_identifier": "rattata",
            "name": "Rattata",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "special_attack": 25,
            "special_defense": 35,
            "speed": 72,
            "total": 253
        },
        {
            "id": 20,
            "identifier": "raticate",
            "pokemondb_identifier": "raticate",
            "name": "Raticate",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "special_attack": 50,
            "special_defense": 70,
            "speed": 97,
            "total": 413
        },
        {
            "id": 21,
            "identifier": "spearow",
            "pokemondb_identifier": "spearow",
            "name": "Spearow",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "special_attack": 31,
            "special_defense": 31,
            "speed": 70,
            "total": 262
        },
        {
            "id": 22,
            "identifier": "fearow",
            "pokemondb_identifier": "fearow",
            "name": "Fearow",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "special_attack": 61,
            "special_defense": 61,
            "speed": 100,
            "total": 442
        },
        {
            "id": 23,
            "identifier": "ekans",
            "pokemondb_identifier": "ekans",
            "name": "Ekans",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Field",
                "Dragon"
            ],
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "special_attack": 40,
            "special_defense": 54,
            "speed": 55,
            "total": 288
        },
        {
            "id": 24,
            "identifier": "arbok",
            "pokemondb_identifier": "arbok",
            "name": "Arbok",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Field",
                "Dragon"
            ],
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "special_attack": 65,
            "special_defense": 79,
            "speed": 80,
            "total": 448
        },
        {
            "id": 25,
            "identifier": "pikachu",
            "pokemondb_identifier": "pikachu",
            "name": "Pikachu",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Field",
                "Fairy"
            ],
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "special_attack": 50,
            "special_defense": 50,
            "speed": 90,
            "total": 320
        },
        {
            "id": 26,
            "identifier": "raichu",
            "pokemondb_identifier": "raichu",
            "name": "Raichu",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Field",
                "Fairy"
            ],
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "special_attack": 90,
            "special_defense": 80,
            "speed": 110,
            "total": 485
        },
        {
            "id": 27,
            "identifier": "sandshrew",
            "pokemondb_identifier": "sandshrew",
            "name": "Sandshrew",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "special_attack": 20,
            "special_defense": 30,
            "speed": 40,
            "total": 300
        },
        {
            "id": 28,
            "identifier": "sandslash",
            "pokemondb_identifier": "sandslash",
            "name": "Sandslash",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "special_attack": 45,
            "special_defense": 55,
            "speed": 65,
            "total": 450
        },
        {
            "id": 29,
            "identifier": "nidoran-f",
            "pokemondb_identifier": "nidoran-f",
            "name": "Nidoran♀",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "special_attack": 40,
            "special_defense": 40,
            "speed": 41,
            "total": 275
        },
        {
            "id": 30,
            "identifier": "nidorina",
            "pokemondb_identifier": "nidorina",
            "name": "Nidorina",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "special_attack": 55,
            "special_defense": 55,
            "speed": 56,
            "total": 365
        },
        {
            "id": 31,
            "identifier": "nidoqueen",
            "pokemondb_identifier": "nidoqueen",
            "name": "Nidoqueen",
            "types": [
                "poison",
                "ground"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "special_attack": 75,
            "special_defense": 85,
            "speed": 76,
            "total": 505
        },
        {
            "id": 32,
            "identifier": "nidoran-m",
            "pokemondb_identifier": "nidoran-m",
            "name": "Nidoran♂",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "special_attack": 40,
            "special_defense": 40,
            "speed": 50,
            "total": 273
        },
        {
            "id": 33,
            "identifier": "nidorino",
            "pokemondb_identifier": "nidorino",
            "name": "Nidorino",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "special_attack": 55,
            "special_defense": 55,
            "speed": 65,
            "total": 365
        },
        {
            "id": 34,
            "identifier": "nidoking",
            "pokemondb_identifier": "nidoking",
            "name": "Nidoking",
            "types": [
                "poison",
                "ground"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "special_attack": 85,
            "special_defense": 75,
            "speed": 85,
            "total": 505
        },
        {
            "id": 35,
            "identifier": "clefairy",
            "pokemondb_identifier": "clefairy",
            "name": "Clefairy",
            "types": [
                "fairy"
            ],
            "egg_groups": [
                "Fairy"
            ],
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "special_attack": 60,
            "special_defense": 65,
            "speed": 35,
            "total": 323
        },
        {
            "id": 36,
            "identifier": "clefable",
            "pokemondb_identifier": "clefable",
            "name": "Clefable",
            "types": [
                "fairy"
            ],
            "egg_groups": [
                "Fairy"
            ],
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "special_attack": 95,
            "special_defense": 90,
            "speed": 60,
            "total": 483
        },
        {
            "id": 37,
            "identifier": "vulpix",
            "pokemondb_identifier": "vulpix",
            "name": "Vulpix",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "special_attack": 50,
            "special_defense": 65,
            "speed": 65,
            "total": 299
        },
        {
            "id": 38,
            "identifier": "ninetales",
            "pokemondb_identifier": "ninetales",
            "name": "Ninetales",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "special_attack": 81,
            "special_defense": 100,
            "speed": 100,
            "total": 505
        },
        {
            "id": 39,
            "identifier": "jigglypuff",
            "pokemondb_identifier": "jigglypuff",
            "name": "Jigglypuff",
            "types": [
                "normal",
                "fairy"
            ],
            "egg_groups": [
                "Fairy"
            ],
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "special_attack": 45,
            "special_defense": 25,
            "speed": 20,
            "total": 270
        },
        {
            "id": 40,
            "identifier": "wigglytuff",
            "pokemondb_identifier": "wigglytuff",
            "name": "Wigglytuff",
            "types": [
                "normal",
                "fairy"
            ],
            "egg_groups": [
                "Fairy"
            ],
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "special_attack": 85,
            "special_defense": 50,
            "speed": 45,
            "total": 435
        },
        {
            "id": 41,
            "identifier": "zubat",
            "pokemondb_identifier": "zubat",
            "name": "Zubat",
            "types": [
                "poison",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "special_attack": 30,
            "special_defense": 40,
            "speed": 55,
            "total": 245
        },
        {
            "id": 42,
            "identifier": "golbat",
            "pokemondb_identifier": "golbat",
            "name": "Golbat",
            "types": [
                "poison",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "special_attack": 65,
            "special_defense": 75,
            "speed": 90,
            "total": 455
        },
        {
            "id": 43,
            "identifier": "oddish",
            "pokemondb_identifier": "oddish",
            "name": "Oddish",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "special_attack": 75,
            "special_defense": 65,
            "speed": 30,
            "total": 320
        },
        {
            "id": 44,
            "identifier": "gloom",
            "pokemondb_identifier": "gloom",
            "name": "Gloom",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "special_attack": 85,
            "special_defense": 75,
            "speed": 40,
            "total": 395
        },
        {
            "id": 45,
            "identifier": "vileplume",
            "pokemondb_identifier": "vileplume",
            "name": "Vileplume",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "special_attack": 110,
            "special_defense": 90,
            "speed": 50,
            "total": 490
        },
        {
            "id": 46,
            "identifier": "paras",
            "pokemondb_identifier": "paras",
            "name": "Paras",
            "types": [
                "bug",
                "grass"
            ],
            "egg_groups": [
                "Bug",
                "Grass"
            ],
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "special_attack": 45,
            "special_defense": 55,
            "speed": 25,
            "total": 285
        },
        {
            "id": 47,
            "identifier": "parasect",
            "pokemondb_identifier": "parasect",
            "name": "Parasect",
            "types": [
                "bug",
                "grass"
            ],
            "egg_groups": [
                "Bug",
                "Grass"
            ],
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "special_attack": 60,
            "special_defense": 80,
            "speed": 30,
            "total": 405
        },
        {
            "id": 48,
            "identifier": "venonat",
            "pokemondb_identifier": "venonat",
            "name": "Venonat",
            "types": [
                "bug",
                "poison"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "special_attack": 40,
            "special_defense": 55,
            "speed": 45,
            "total": 305
        },
        {
            "id": 49,
            "identifier": "venomoth",
            "pokemondb_identifier": "venomoth",
            "name": "Venomoth",
            "types": [
                "bug",
                "poison"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "special_attack": 90,
            "special_defense": 75,
            "speed": 90,
            "total": 450
        },
        {
            "id": 50,
            "identifier": "diglett",
            "pokemondb_identifier": "diglett",
            "name": "Diglett",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "special_attack": 35,
            "special_defense": 45,
            "speed": 95,
            "total": 265
        },
        {
            "id": 51,
            "identifier": "dugtrio",
            "pokemondb_identifier": "dugtrio",
            "name": "Dugtrio",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "special_attack": 50,
            "special_defense": 70,
            "speed": 120,
            "total": 425
        },
        {
            "id": 52,
            "identifier": "meowth",
            "pokemondb_identifier": "meowth",
            "name": "Meowth",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "special_attack": 40,
            "special_defense": 40,
            "speed": 90,
            "total": 290
        },
        {
            "id": 53,
            "identifier": "persian",
            "pokemondb_identifier": "persian",
            "name": "Persian",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "special_attack": 65,
            "special_defense": 65,
            "speed": 115,
            "total": 440
        },
        {
            "id": 54,
            "identifier": "psyduck",
            "pokemondb_identifier": "psyduck",
            "name": "Psyduck",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Field"
            ],
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "special_attack": 65,
            "special_defense": 50,
            "speed": 55,
            "total": 320
        },
        {
            "id": 55,
            "identifier": "golduck",
            "pokemondb_identifier": "golduck",
            "name": "Golduck",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Field"
            ],
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "special_attack": 95,
            "special_defense": 80,
            "speed": 85,
            "total": 500
        },
        {
            "id": 56,
            "identifier": "mankey",
            "pokemondb_identifier": "mankey",
            "name": "Mankey",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "special_attack": 35,
            "special_defense": 45,
            "speed": 70,
            "total": 305
        },
        {
            "id": 57,
            "identifier": "primeape",
            "pokemondb_identifier": "primeape",
            "name": "Primeape",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "special_attack": 60,
            "special_defense": 70,
            "speed": 95,
            "total": 455
        },
        {
            "id": 58,
            "identifier": "growlithe",
            "pokemondb_identifier": "growlithe",
            "name": "Growlithe",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "special_attack": 70,
            "special_defense": 50,
            "speed": 60,
            "total": 350
        },
        {
            "id": 59,
            "identifier": "arcanine",
            "pokemondb_identifier": "arcanine",
            "name": "Arcanine",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "special_attack": 100,
            "special_defense": 80,
            "speed": 95,
            "total": 555
        },
        {
            "id": 60,
            "identifier": "poliwag",
            "pokemondb_identifier": "poliwag",
            "name": "Poliwag",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1"
            ],
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "special_attack": 40,
            "special_defense": 40,
            "speed": 90,
            "total": 300
        },
        {
            "id": 61,
            "identifier": "poliwhirl",
            "pokemondb_identifier": "poliwhirl",
            "name": "Poliwhirl",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1"
            ],
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "special_attack": 50,
            "special_defense": 50,
            "speed": 90,
            "total": 385
        },
        {
            "id": 62,
            "identifier": "poliwrath",
            "pokemondb_identifier": "poliwrath",
            "name": "Poliwrath",
            "types": [
                "water",
                "fighting"
            ],
            "egg_groups": [
                "Water 1"
            ],
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "special_attack": 70,
            "special_defense": 90,
            "speed": 70,
            "total": 510
        },
        {
            "id": 63,
            "identifier": "abra",
            "pokemondb_identifier": "abra",
            "name": "Abra",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "special_attack": 105,
            "special_defense": 55,
            "speed": 90,
            "total": 310
        },
        {
            "id": 64,
            "identifier": "kadabra",
            "pokemondb_identifier": "kadabra",
            "name": "Kadabra",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "special_attack": 120,
            "special_defense": 70,
            "speed": 105,
            "total": 400
        },
        {
            "id": 65,
            "identifier": "alakazam",
            "pokemondb_identifier": "alakazam",
            "name": "Alakazam",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "special_attack": 135,
            "special_defense": 95,
            "speed": 120,
            "total": 500
        },
        {
            "id": 66,
            "identifier": "machop",
            "pokemondb_identifier": "machop",
            "name": "Machop",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "special_attack": 35,
            "special_defense": 35,
            "speed": 35,
            "total": 305
        },
        {
            "id": 67,
            "identifier": "machoke",
            "pokemondb_identifier": "machoke",
            "name": "Machoke",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "special_attack": 50,
            "special_defense": 60,
            "speed": 45,
            "total": 405
        },
        {
            "id": 68,
            "identifier": "machamp",
            "pokemondb_identifier": "machamp",
            "name": "Machamp",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "special_attack": 65,
            "special_defense": 85,
            "speed": 55,
            "total": 505
        },
        {
            "id": 69,
            "identifier": "bellsprout",
            "pokemondb_identifier": "bellsprout",
            "name": "Bellsprout",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "special_attack": 70,
            "special_defense": 30,
            "speed": 40,
            "total": 300
        },
        {
            "id": 70,
            "identifier": "weepinbell",
            "pokemondb_identifier": "weepinbell",
            "name": "Weepinbell",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "special_attack": 85,
            "special_defense": 45,
            "speed": 55,
            "total": 390
        },
        {
            "id": 71,
            "identifier": "victreebel",
            "pokemondb_identifier": "victreebel",
            "name": "Victreebel",
            "types": [
                "grass",
                "poison"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "special_attack": 100,
            "special_defense": 70,
            "speed": 70,
            "total": 490
        },
        {
            "id": 72,
            "identifier": "tentacool",
            "pokemondb_identifier": "tentacool",
            "name": "Tentacool",
            "types": [
                "water",
                "poison"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "special_attack": 50,
            "special_defense": 100,
            "speed": 70,
            "total": 335
        },
        {
            "id": 73,
            "identifier": "tentacruel",
            "pokemondb_identifier": "tentacruel",
            "name": "Tentacruel",
            "types": [
                "water",
                "poison"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "special_attack": 80,
            "special_defense": 120,
            "speed": 100,
            "total": 515
        },
        {
            "id": 74,
            "identifier": "geodude",
            "pokemondb_identifier": "geodude",
            "name": "Geodude",
            "types": [
                "rock",
                "ground"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "special_attack": 30,
            "special_defense": 30,
            "speed": 20,
            "total": 300
        },
        {
            "id": 75,
            "identifier": "graveler",
            "pokemondb_identifier": "graveler",
            "name": "Graveler",
            "types": [
                "rock",
                "ground"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "special_attack": 45,
            "special_defense": 45,
            "speed": 35,
            "total": 390
        },
        {
            "id": 76,
            "identifier": "golem",
            "pokemondb_identifier": "golem",
            "name": "Golem",
            "types": [
                "rock",
                "ground"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "special_attack": 55,
            "special_defense": 65,
            "speed": 45,
            "total": 495
        },
        {
            "id": 77,
            "identifier": "ponyta",
            "pokemondb_identifier": "ponyta",
            "name": "Ponyta",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "special_attack": 65,
            "special_defense": 65,
            "speed": 90,
            "total": 410
        },
        {
            "id": 78,
            "identifier": "rapidash",
            "pokemondb_identifier": "rapidash",
            "name": "Rapidash",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "special_attack": 80,
            "special_defense": 80,
            "speed": 105,
            "total": 500
        },
        {
            "id": 79,
            "identifier": "slowpoke",
            "pokemondb_identifier": "slowpoke",
            "name": "Slowpoke",
            "types": [
                "water",
                "psychic"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "special_attack": 40,
            "special_defense": 40,
            "speed": 15,
            "total": 315
        },
        {
            "id": 80,
            "identifier": "slowbro",
            "pokemondb_identifier": "slowbro",
            "name": "Slowbro",
            "types": [
                "water",
                "psychic"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "special_attack": 100,
            "special_defense": 80,
            "speed": 30,
            "total": 490
        },
        {
            "id": 81,
            "identifier": "magnemite",
            "pokemondb_identifier": "magnemite",
            "name": "Magnemite",
            "types": [
                "electric",
                "steel"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "special_attack": 95,
            "special_defense": 55,
            "speed": 45,
            "total": 325
        },
        {
            "id": 82,
            "identifier": "magneton",
            "pokemondb_identifier": "magneton",
            "name": "Magneton",
            "types": [
                "electric",
                "steel"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "special_attack": 120,
            "special_defense": 70,
            "speed": 70,
            "total": 465
        },
        {
            "id": 83,
            "identifier": "farfetchd",
            "pokemondb_identifier": "farfetchd",
            "name": "Farfetch’d",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying",
                "Field"
            ],
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "special_attack": 58,
            "special_defense": 62,
            "speed": 60,
            "total": 377
        },
        {
            "id": 84,
            "identifier": "doduo",
            "pokemondb_identifier": "doduo",
            "name": "Doduo",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "special_attack": 35,
            "special_defense": 35,
            "speed": 75,
            "total": 310
        },
        {
            "id": 85,
            "identifier": "dodrio",
            "pokemondb_identifier": "dodrio",
            "name": "Dodrio",
            "types": [
                "normal",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "special_attack": 60,
            "special_defense": 60,
            "speed": 110,
            "total": 470
        },
        {
            "id": 86,
            "identifier": "seel",
            "pokemondb_identifier": "seel",
            "name": "Seel",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Field"
            ],
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "special_attack": 45,
            "special_defense": 70,
            "speed": 45,
            "total": 325
        },
        {
            "id": 87,
            "identifier": "dewgong",
            "pokemondb_identifier": "dewgong",
            "name": "Dewgong",
            "types": [
                "water",
                "ice"
            ],
            "egg_groups": [
                "Water 1",
                "Field"
            ],
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "special_attack": 70,
            "special_defense": 95,
            "speed": 70,
            "total": 475
        },
        {
            "id": 88,
            "identifier": "grimer",
            "pokemondb_identifier": "grimer",
            "name": "Grimer",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "special_attack": 40,
            "special_defense": 50,
            "speed": 25,
            "total": 325
        },
        {
            "id": 89,
            "identifier": "muk",
            "pokemondb_identifier": "muk",
            "name": "Muk",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "special_attack": 65,
            "special_defense": 100,
            "speed": 50,
            "total": 500
        },
        {
            "id": 90,
            "identifier": "shellder",
            "pokemondb_identifier": "shellder",
            "name": "Shellder",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "special_attack": 45,
            "special_defense": 25,
            "speed": 40,
            "total": 305
        },
        {
            "id": 91,
            "identifier": "cloyster",
            "pokemondb_identifier": "cloyster",
            "name": "Cloyster",
            "types": [
                "water",
                "ice"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "special_attack": 85,
            "special_defense": 45,
            "speed": 70,
            "total": 525
        },
        {
            "id": 92,
            "identifier": "gastly",
            "pokemondb_identifier": "gastly",
            "name": "Gastly",
            "types": [
                "ghost",
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "special_attack": 100,
            "special_defense": 35,
            "speed": 80,
            "total": 310
        },
        {
            "id": 93,
            "identifier": "haunter",
            "pokemondb_identifier": "haunter",
            "name": "Haunter",
            "types": [
                "ghost",
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "special_attack": 115,
            "special_defense": 55,
            "speed": 95,
            "total": 405
        },
        {
            "id": 94,
            "identifier": "gengar",
            "pokemondb_identifier": "gengar",
            "name": "Gengar",
            "types": [
                "ghost",
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "special_attack": 130,
            "special_defense": 75,
            "speed": 110,
            "total": 500
        },
        {
            "id": 95,
            "identifier": "onix",
            "pokemondb_identifier": "onix",
            "name": "Onix",
            "types": [
                "rock",
                "ground"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "special_attack": 30,
            "special_defense": 45,
            "speed": 70,
            "total": 385
        },
        {
            "id": 96,
            "identifier": "drowzee",
            "pokemondb_identifier": "drowzee",
            "name": "Drowzee",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "special_attack": 43,
            "special_defense": 90,
            "speed": 42,
            "total": 328
        },
        {
            "id": 97,
            "identifier": "hypno",
            "pokemondb_identifier": "hypno",
            "name": "Hypno",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "special_attack": 73,
            "special_defense": 115,
            "speed": 67,
            "total": 483
        },
        {
            "id": 98,
            "identifier": "krabby",
            "pokemondb_identifier": "krabby",
            "name": "Krabby",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "special_attack": 25,
            "special_defense": 25,
            "speed": 50,
            "total": 325
        },
        {
            "id": 99,
            "identifier": "kingler",
            "pokemondb_identifier": "kingler",
            "name": "Kingler",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "special_attack": 50,
            "special_defense": 50,
            "speed": 75,
            "total": 475
        },
        {
            "id": 100,
            "identifier": "voltorb",
            "pokemondb_identifier": "voltorb",
            "name": "Voltorb",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "special_attack": 55,
            "special_defense": 55,
            "speed": 100,
            "total": 330
        },
        {
            "id": 101,
            "identifier": "electrode",
            "pokemondb_identifier": "electrode",
            "name": "Electrode",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "special_attack": 80,
            "special_defense": 80,
            "speed": 150,
            "total": 490
        },
        {
            "id": 102,
            "identifier": "exeggcute",
            "pokemondb_identifier": "exeggcute",
            "name": "Exeggcute",
            "types": [
                "grass",
                "psychic"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "special_attack": 60,
            "special_defense": 45,
            "speed": 40,
            "total": 325
        },
        {
            "id": 103,
            "identifier": "exeggutor",
            "pokemondb_identifier": "exeggutor",
            "name": "Exeggutor",
            "types": [
                "grass",
                "psychic"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "special_attack": 125,
            "special_defense": 75,
            "speed": 55,
            "total": 530
        },
        {
            "id": 104,
            "identifier": "cubone",
            "pokemondb_identifier": "cubone",
            "name": "Cubone",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Monster"
            ],
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "special_attack": 40,
            "special_defense": 50,
            "speed": 35,
            "total": 320
        },
        {
            "id": 105,
            "identifier": "marowak",
            "pokemondb_identifier": "marowak",
            "name": "Marowak",
            "types": [
                "ground"
            ],
            "egg_groups": [
                "Monster"
            ],
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "special_attack": 50,
            "special_defense": 80,
            "speed": 45,
            "total": 425
        },
        {
            "id": 106,
            "identifier": "hitmonlee",
            "pokemondb_identifier": "hitmonlee",
            "name": "Hitmonlee",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "special_attack": 35,
            "special_defense": 110,
            "speed": 87,
            "total": 455
        },
        {
            "id": 107,
            "identifier": "hitmonchan",
            "pokemondb_identifier": "hitmonchan",
            "name": "Hitmonchan",
            "types": [
                "fighting"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "special_attack": 35,
            "special_defense": 110,
            "speed": 76,
            "total": 455
        },
        {
            "id": 108,
            "identifier": "lickitung",
            "pokemondb_identifier": "lickitung",
            "name": "Lickitung",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Monster"
            ],
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "special_attack": 60,
            "special_defense": 75,
            "speed": 30,
            "total": 385
        },
        {
            "id": 109,
            "identifier": "koffing",
            "pokemondb_identifier": "koffing",
            "name": "Koffing",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "special_attack": 60,
            "special_defense": 45,
            "speed": 35,
            "total": 340
        },
        {
            "id": 110,
            "identifier": "weezing",
            "pokemondb_identifier": "weezing",
            "name": "Weezing",
            "types": [
                "poison"
            ],
            "egg_groups": [
                "Amorphous"
            ],
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "special_attack": 85,
            "special_defense": 70,
            "speed": 60,
            "total": 490
        },
        {
            "id": 111,
            "identifier": "rhyhorn",
            "pokemondb_identifier": "rhyhorn",
            "name": "Rhyhorn",
            "types": [
                "ground",
                "rock"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "special_attack": 30,
            "special_defense": 30,
            "speed": 25,
            "total": 345
        },
        {
            "id": 112,
            "identifier": "rhydon",
            "pokemondb_identifier": "rhydon",
            "name": "Rhydon",
            "types": [
                "ground",
                "rock"
            ],
            "egg_groups": [
                "Monster",
                "Field"
            ],
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "special_attack": 45,
            "special_defense": 45,
            "speed": 40,
            "total": 485
        },
        {
            "id": 113,
            "identifier": "chansey",
            "pokemondb_identifier": "chansey",
            "name": "Chansey",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Fairy"
            ],
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "special_attack": 35,
            "special_defense": 105,
            "speed": 50,
            "total": 450
        },
        {
            "id": 114,
            "identifier": "tangela",
            "pokemondb_identifier": "tangela",
            "name": "Tangela",
            "types": [
                "grass"
            ],
            "egg_groups": [
                "Grass"
            ],
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "special_attack": 100,
            "special_defense": 40,
            "speed": 60,
            "total": 435
        },
        {
            "id": 115,
            "identifier": "kangaskhan",
            "pokemondb_identifier": "kangaskhan",
            "name": "Kangaskhan",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Monster"
            ],
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "special_attack": 40,
            "special_defense": 80,
            "speed": 90,
            "total": 490
        },
        {
            "id": 116,
            "identifier": "horsea",
            "pokemondb_identifier": "horsea",
            "name": "Horsea",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Dragon"
            ],
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "special_attack": 70,
            "special_defense": 25,
            "speed": 60,
            "total": 295
        },
        {
            "id": 117,
            "identifier": "seadra",
            "pokemondb_identifier": "seadra",
            "name": "Seadra",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Dragon"
            ],
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "special_attack": 95,
            "special_defense": 45,
            "speed": 85,
            "total": 440
        },
        {
            "id": 118,
            "identifier": "goldeen",
            "pokemondb_identifier": "goldeen",
            "name": "Goldeen",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 2"
            ],
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "special_attack": 35,
            "special_defense": 50,
            "speed": 63,
            "total": 320
        },
        {
            "id": 119,
            "identifier": "seaking",
            "pokemondb_identifier": "seaking",
            "name": "Seaking",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 2"
            ],
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "special_attack": 65,
            "special_defense": 80,
            "speed": 68,
            "total": 450
        },
        {
            "id": 120,
            "identifier": "staryu",
            "pokemondb_identifier": "staryu",
            "name": "Staryu",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "special_attack": 70,
            "special_defense": 55,
            "speed": 85,
            "total": 340
        },
        {
            "id": 121,
            "identifier": "starmie",
            "pokemondb_identifier": "starmie",
            "name": "Starmie",
            "types": [
                "water",
                "psychic"
            ],
            "egg_groups": [
                "Water 3"
            ],
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "special_attack": 100,
            "special_defense": 85,
            "speed": 115,
            "total": 520
        },
        {
            "id": 122,
            "identifier": "mr-mime",
            "pokemondb_identifier": "mr-mime",
            "name": "Mr. Mime",
            "types": [
                "psychic",
                "fairy"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "special_attack": 100,
            "special_defense": 120,
            "speed": 90,
            "total": 460
        },
        {
            "id": 123,
            "identifier": "scyther",
            "pokemondb_identifier": "scyther",
            "name": "Scyther",
            "types": [
                "bug",
                "flying"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "special_attack": 55,
            "special_defense": 80,
            "speed": 105,
            "total": 500
        },
        {
            "id": 124,
            "identifier": "jynx",
            "pokemondb_identifier": "jynx",
            "name": "Jynx",
            "types": [
                "ice",
                "psychic"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "special_attack": 115,
            "special_defense": 95,
            "speed": 95,
            "total": 455
        },
        {
            "id": 125,
            "identifier": "electabuzz",
            "pokemondb_identifier": "electabuzz",
            "name": "Electabuzz",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "special_attack": 95,
            "special_defense": 85,
            "speed": 105,
            "total": 490
        },
        {
            "id": 126,
            "identifier": "magmar",
            "pokemondb_identifier": "magmar",
            "name": "Magmar",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Human-Like"
            ],
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "special_attack": 100,
            "special_defense": 85,
            "speed": 93,
            "total": 495
        },
        {
            "id": 127,
            "identifier": "pinsir",
            "pokemondb_identifier": "pinsir",
            "name": "Pinsir",
            "types": [
                "bug"
            ],
            "egg_groups": [
                "Bug"
            ],
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "special_attack": 55,
            "special_defense": 70,
            "speed": 85,
            "total": 500
        },
        {
            "id": 128,
            "identifier": "tauros",
            "pokemondb_identifier": "tauros",
            "name": "Tauros",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "special_attack": 40,
            "special_defense": 70,
            "speed": 110,
            "total": 490
        },
        {
            "id": 129,
            "identifier": "magikarp",
            "pokemondb_identifier": "magikarp",
            "name": "Magikarp",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Water 2",
                "Dragon"
            ],
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "special_attack": 15,
            "special_defense": 20,
            "speed": 80,
            "total": 200
        },
        {
            "id": 130,
            "identifier": "gyarados",
            "pokemondb_identifier": "gyarados",
            "name": "Gyarados",
            "types": [
                "water",
                "flying"
            ],
            "egg_groups": [
                "Water 2",
                "Dragon"
            ],
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "special_attack": 60,
            "special_defense": 100,
            "speed": 81,
            "total": 540
        },
        {
            "id": 131,
            "identifier": "lapras",
            "pokemondb_identifier": "lapras",
            "name": "Lapras",
            "types": [
                "water",
                "ice"
            ],
            "egg_groups": [
                "Monster",
                "Water 1"
            ],
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "special_attack": 85,
            "special_defense": 95,
            "speed": 60,
            "total": 535
        },
        {
            "id": 132,
            "identifier": "ditto",
            "pokemondb_identifier": "ditto",
            "name": "Ditto",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Ditto"
            ],
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "special_attack": 48,
            "special_defense": 48,
            "speed": 48,
            "total": 288
        },
        {
            "id": 133,
            "identifier": "eevee",
            "pokemondb_identifier": "eevee",
            "name": "Eevee",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "special_attack": 45,
            "special_defense": 65,
            "speed": 55,
            "total": 325
        },
        {
            "id": 134,
            "identifier": "vaporeon",
            "pokemondb_identifier": "vaporeon",
            "name": "Vaporeon",
            "types": [
                "water"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "special_attack": 110,
            "special_defense": 95,
            "speed": 65,
            "total": 525
        },
        {
            "id": 135,
            "identifier": "jolteon",
            "pokemondb_identifier": "jolteon",
            "name": "Jolteon",
            "types": [
                "electric"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "special_attack": 110,
            "special_defense": 95,
            "speed": 130,
            "total": 525
        },
        {
            "id": 136,
            "identifier": "flareon",
            "pokemondb_identifier": "flareon",
            "name": "Flareon",
            "types": [
                "fire"
            ],
            "egg_groups": [
                "Field"
            ],
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "special_attack": 95,
            "special_defense": 110,
            "speed": 65,
            "total": 525
        },
        {
            "id": 137,
            "identifier": "porygon",
            "pokemondb_identifier": "porygon",
            "name": "Porygon",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Mineral"
            ],
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "special_attack": 85,
            "special_defense": 75,
            "speed": 40,
            "total": 395
        },
        {
            "id": 138,
            "identifier": "omanyte",
            "pokemondb_identifier": "omanyte",
            "name": "Omanyte",
            "types": [
                "rock",
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Water 3"
            ],
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "special_attack": 90,
            "special_defense": 55,
            "speed": 35,
            "total": 355
        },
        {
            "id": 139,
            "identifier": "omastar",
            "pokemondb_identifier": "omastar",
            "name": "Omastar",
            "types": [
                "rock",
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Water 3"
            ],
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "special_attack": 115,
            "special_defense": 70,
            "speed": 55,
            "total": 495
        },
        {
            "id": 140,
            "identifier": "kabuto",
            "pokemondb_identifier": "kabuto",
            "name": "Kabuto",
            "types": [
                "rock",
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Water 3"
            ],
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "special_attack": 55,
            "special_defense": 45,
            "speed": 55,
            "total": 355
        },
        {
            "id": 141,
            "identifier": "kabutops",
            "pokemondb_identifier": "kabutops",
            "name": "Kabutops",
            "types": [
                "rock",
                "water"
            ],
            "egg_groups": [
                "Water 1",
                "Water 3"
            ],
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "special_attack": 65,
            "special_defense": 70,
            "speed": 80,
            "total": 495
        },
        {
            "id": 142,
            "identifier": "aerodactyl",
            "pokemondb_identifier": "aerodactyl",
            "name": "Aerodactyl",
            "types": [
                "rock",
                "flying"
            ],
            "egg_groups": [
                "Flying"
            ],
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "special_attack": 60,
            "special_defense": 75,
            "speed": 130,
            "total": 515
        },
        {
            "id": 143,
            "identifier": "snorlax",
            "pokemondb_identifier": "snorlax",
            "name": "Snorlax",
            "types": [
                "normal"
            ],
            "egg_groups": [
                "Monster"
            ],
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "special_attack": 65,
            "special_defense": 110,
            "speed": 30,
            "total": 540
        },
        {
            "id": 144,
            "identifier": "articuno",
            "pokemondb_identifier": "articuno",
            "name": "Articuno",
            "types": [
                "ice",
                "flying"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "special_attack": 95,
            "special_defense": 125,
            "speed": 85,
            "total": 580
        },
        {
            "id": 145,
            "identifier": "zapdos",
            "pokemondb_identifier": "zapdos",
            "name": "Zapdos",
            "types": [
                "electric",
                "flying"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "special_attack": 125,
            "special_defense": 90,
            "speed": 100,
            "total": 580
        },
        {
            "id": 146,
            "identifier": "moltres",
            "pokemondb_identifier": "moltres",
            "name": "Moltres",
            "types": [
                "fire",
                "flying"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "special_attack": 125,
            "special_defense": 85,
            "speed": 90,
            "total": 580
        },
        {
            "id": 147,
            "identifier": "dratini",
            "pokemondb_identifier": "dratini",
            "name": "Dratini",
            "types": [
                "dragon"
            ],
            "egg_groups": [
                "Water 1",
                "Dragon"
            ],
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "special_attack": 50,
            "special_defense": 50,
            "speed": 50,
            "total": 300
        },
        {
            "id": 148,
            "identifier": "dragonair",
            "pokemondb_identifier": "dragonair",
            "name": "Dragonair",
            "types": [
                "dragon"
            ],
            "egg_groups": [
                "Water 1",
                "Dragon"
            ],
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "special_attack": 70,
            "special_defense": 70,
            "speed": 70,
            "total": 420
        },
        {
            "id": 149,
            "identifier": "dragonite",
            "pokemondb_identifier": "dragonite",
            "name": "Dragonite",
            "types": [
                "dragon",
                "flying"
            ],
            "egg_groups": [
                "Water 1",
                "Dragon"
            ],
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "special_attack": 100,
            "special_defense": 100,
            "speed": 80,
            "total": 600
        },
        {
            "id": 150,
            "identifier": "mewtwo",
            "pokemondb_identifier": "mewtwo",
            "name": "Mewtwo",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "special_attack": 154,
            "special_defense": 90,
            "speed": 130,
            "total": 680
        },
        {
            "id": 151,
            "identifier": "mew",
            "pokemondb_identifier": "mew",
            "name": "Mew",
            "types": [
                "psychic"
            ],
            "egg_groups": [
                "Undiscovered"
            ],
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "special_attack": 100,
            "special_defense": 100,
            "speed": 100,
            "total": 600
        }
    ]
    res.status(200)
        .json(response)
}
