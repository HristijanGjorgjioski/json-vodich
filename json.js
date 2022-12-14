/*
    1. JSON e skrateno od JavaScript Object Notation
    2. JSON ima lesen i mal format za razmena na podatoci
    3. JSON ne zavisi od nikoj programiski jazik - moze
        da se koristi vo bilo koj jazik
    4. JSON e samoopisuvacki i lesen za citanje i razbiranje
    5. JSON najcesto e ispolnet so objekti vo eden array no
        ne mora da znaci deka e sekogas taka
    6. Baziran e vrz JavaScript sintaksa
    7. key&value mora da bidat vo dupli navodnici " "
    8. Zazema mnogu malce memorija
*/

// primer 1 - JSON array so 3 objects
[
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
]

// primer 2
[
    {
        "browsers": {
            "firefox": {
                "name": "Firefox",
                "pref_url": "about:config",
                "releases": {
                    "1": {
                        "release_date": "2004-11-09",
                        "status": "retired",
                        "engine": "Gecko",
                        "engine_version": "1.7"
                    }
                }
            }
        }
    }
]

// primer 3 - JSON vo JavaScript promenliva
const data = {
    name: "John",
    "age": 22,
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class": ["JavaScript", "HTML", "CSS"]
}
