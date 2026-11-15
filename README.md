# CrewTrace

CrewTrace is a crew health and habitat dashboard for a five-person space crew, built for NASA Space Apps.

## What it does

- **Dashboard:** the selected astronaut's live health score and vitals, a habitat map with crew positions, NASA cabin CO₂, temperature, humidity and radiation, exposure alerts, space weather and recommended care.
- **Astronaut profile:** a portrait, symptoms, a clickable body check, and every health value compared against its healthy range.
- **Health guide:** care, food and drink for the selected astronaut, based on their live values and symptoms.
- **CrewTrace Assistant:** answers questions about the crew, the habitat and health from the live data on the page.

## Data

- Cabin CO₂, temperature, humidity and radiation come from NASA OSDR Environmental Data Application, mission RR-9 (ISS). The page replays them one record per second.
- Space weather is a built-in set of NASA DONKI and NOAA GOES events for 4–18 September 2017, the same days as the radiation replay.
- Crew names, vitals, symptoms and positions are a labelled simulation, not real people.

Everything runs in the browser. The page needs no server, build step or API key.

## Run it locally

Download the files and open `index.html` in a browser.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `styles.css` | Styling, including light and dark themes |
| `app.js` | Data, logic and assistant |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Disclaimer

This is an educational prototype. It is not a medical device, gives no medical advice, and is not affiliated with or endorsed by NASA.
