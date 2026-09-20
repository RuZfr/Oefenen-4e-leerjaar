# Architectuur

## Principe

Code bepaalt **hoe** geoefend wordt. Data bepaalt **wat** en **hoe het heet**.

`data/curriculum.json` → vakken + categorieën + zichtbare namen

`data/modules/*.json` → inhoud per categorie

`js/engine.js` → generieke oefenlogica

`js/app.js` → algemene UI, thema, instellingen en PWA

## Stabiele IDs

Wijzig bij een leerplanwijziging bij voorkeur alleen `title`, `description`, `order` of `enabled`. Laat `id` staan zodat opgeslagen voortgang gekoppeld blijft.

## Toekomst

De volgende types kunnen later toegevoegd worden zonder de leerstructuur om te gooien: afbeeldingen, audio, koppelen, sorteren, meerstapsrekenen, leesteksten met meerdere vragen en leerkrachtrapportage.
