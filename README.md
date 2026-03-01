# Philly Community Wireless Story Map (MapLibre)

This repo is a MapLibre-based scrollytelling map for Philly Community Wireless.

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Build the bundle:

```bash
npm run build
```

3. Serve locally:

```bash
npm run serve
```

4. Open http://localhost:5000 (or pass a custom port: `node index.js 3000`).

## Config

Story content and map camera positions live in `config.js`.
See [CONFIG.md](CONFIG.md) for the full schema.

## Adding a new chapter

Add an object to the `chapters` array in `config.js`. Most fields have sensible defaults, so a minimal chapter only needs `id`, `title`, `image`, `description`, and `location`:

```js
{
    id: 'my-chapter',
    title: 'Chapter Title',
    image: './images/photo.jpg',
    description: 'Text describing this location.',
    location: {
        center: [-75.1350, 39.9830],
        zoom: 15.00,
        pitch: 45.00,
        bearing: 0.00
    }
}
```

### Optional chapter fields

| Field | Default | Description |
|---|---|---|
| `alignment` | `'right'` | Card position: `'left'`, `'right'`, `'center'`, or `'full'` |
| `hidden` | `false` | Trigger map movement without showing a card |
| `mapAnimation` | `'flyTo'` | `'flyTo'` for sweeping transitions, `'easeTo'` for subtle pans |
| `rotateAnimation` | `false` | Slowly rotate the map on this chapter |
| `mapInteractive` | `false` | Let the user drag/zoom the map on this chapter |
| `onChapterEnter` | `[]` | Layer opacity changes on enter (see CONFIG.md) |
| `onChapterExit` | `[]` | Layer opacity changes on exit (see CONFIG.md) |

**Tips:**
- Use [Google Maps](https://maps.google.com) or [geojson.io](https://geojson.io) to find longitude/latitude coordinates.
- `flyTo` creates a smooth, curved zoom transition -- best for larger geographic jumps. `easeTo` is a linear pan -- best for small nearby movements.

## Deployment

This repo includes a GitHub Actions workflow that deploys to GitHub Pages on push to `main`. Enable Pages in your repo settings (Settings > Pages > Source: GitHub Actions).

The site is served as static files -- no server-side build step runs in CI. If you change `build.js` or update dependencies, run `npm run build` locally and commit the updated `dist/bundle.js`.

## Notes

- The default basemap uses CARTO Dark Matter tiles (brightened via CSS filter). Other free CARTO options: `positron-gl-style` (light), `voyager-gl-style` (colored).
- 3D building extrusions are added automatically at zoom 14+.

## Credits

Built with [MapLibre GL JS](https://maplibre.org/) and [Scrollama](https://github.com/russellsamora/scrollama), adapted from the [Digital Democracy MapLibre storymap template](https://github.com/digidem/maplibre-storymap).

Special thanks to [Felipe Valdez](https://felipevaldez.com/) for his [tutorial on creating interactive map-based stories with MapLibre](https://felipevaldez.com/tutorials/tutorial4/). For a detailed, step-by-step guide on how to build your own MapLibre scrollytelling map, see his [workshop](https://felipevaldez.com/storytelling_maplibre_workshop/).
