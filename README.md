```markdown
# Stremio Addon - Dragon Ball Z

## Overview

This is a Stremio addon that provides streaming links for the Dragon Ball Z series. It is built using the Stremio Addons SDK and serves streams for each episode of the series.

## Features

- Streams full episodes of Dragon Ball Z.
- Uses magnet links and direct HTTP links for streaming.
- Integrates seamlessly with Stremio.
- Caches metadata and stream availability for efficient performance.

## Installation

### Prerequisites

- Node.js (v14 or later)
- NPM (Node Package Manager)

### Clone Repository

```bash
git clone https://github.com/yourusername/dbz-stremio-addon.git
cd dbz-stremio-addon
```

### Install Dependencies

```bash
npm install
```

## Usage

### Running the Addon Locally

To start the addon on port 7000, run:

```bash
node index.js
```

If a different port is required:

```bash
PORT=8080 node index.js
```

### Testing the Addon

Once running, you can test the addon by opening:

```
http://app.strem.io/#/discover/series?addon=http://localhost:7000
```

## API Endpoints

### Manifest (`/stremio/v1`)

The `manifest.json` file defines the addon properties, including:

- Addon ID: `org.stremio.dbz`
- Name: `Dragon Ball Z`
- Description: `Complete Series`
- Supported Types: `series`
- Metadata Source: `Cinemeta`
- Streaming URLs: `https://jagpal-development.com/dbz/...`

### Streaming (`/stream.find`)

Provides the video stream URL for a requested episode.

Expects parameters:

```json
{
  "imdb_id": "tt0214341",
  "season": 1,
  "episode": 1
}
```

Response Example:

```json
[
  {
    "url": "https://jagpal-development.com/dbz/DragonballZ001TheNewThreat.mkv",
    "availability": 1,
    "name": "For Paul"
  }
]
```

### Metadata (`/meta.find`)

Fetches metadata for the Dragon Ball Z series.

### Metadata Lookup (`/meta.get`)

Looks up individual episodes or seasons.

### Search (`/meta.search`)

Allows searching for Dragon Ball Z content.

## Deployment

To deploy the addon using Heroku:

```bash
heroku create dbz-stremio-addon
git push heroku main
```

## Contribution

- Open an issue if you find bugs.
- Feel free to submit a pull request for improvements.

## License

This project is for educational purposes only. All rights to Dragon Ball Z belong to their respective owners.

---

🚀 **Enjoy Streaming Dragon Ball Z on Stremio!** 🚀
``` 
