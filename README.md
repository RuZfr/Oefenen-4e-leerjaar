# Oefenen 4e leerjaar

**v0.1.0 — General Learning Foundation**

Dit is een aparte, algemene leerapp voor het vierde leerjaar. Er zit geen Franse leerinhoud in.

## Flexibele leerstructuur

De zichtbare structuur staat in `data/curriculum.json`. Elke vak- en categorienaam heeft een stabiele interne `id`. Daardoor kun je bijvoorbeeld **Getallen en bewerkingen** later hernoemen zonder de technische koppelingen of lokale voortgang te breken.

Huidige vakken:

- Wiskunde: Getallen en bewerkingen, Meten, Meetkunde
- Nederlands: Taalbeschouwing, Lezen, Luisteren, Spelling, Woordenschat, Spreken, Schrijven
- W.O.: Mens en maatschappij, Wetenschap en techniek, Aardrijkskunde, Geschiedenis

## Modulebestanden

Elke categorie verwijst naar een bestand in `data/modules/`. Een module bevat een stabiele `id`, titel, beschrijving, sessielengte en vragen.

Ondersteunde vraagtypes in v0.1:

- `multiple-choice`
- `true-false`
- `number`
- `input`
- `open` (spreek-/schrijf-/doe-opdracht met zelfcontrole/tip)

De foundation bevat bewust maar enkele demovragen per categorie. De volgende stap is inhoudelijk vullen en de vraagtypes per vak verfijnen.

## Leerplanwijziging

Zichtbare namen kunnen in `data/curriculum.json` aangepast worden. Zolang de `id` hetzelfde blijft, blijft de technische koppeling stabiel. Onderwerpen kunnen ook toegevoegd, uitgezet (`enabled: false`) of van volgorde veranderd worden met `order`.

## Publiceren

De ZIP is GitHub-ready: `index.html` staat direct in de hoofdmap.
