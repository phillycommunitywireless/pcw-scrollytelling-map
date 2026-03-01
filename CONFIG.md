# Configuration Options

Note: items in bold are **required**.

## Global Settings

**`style`**: MapLibre style URL. Default is CARTO Dark Matter. Other free options: `positron-gl-style`, `voyager-gl-style`.

**`showMarkers`**: Show markers at the centerpoint of each chapter.

**`markerColor`**: Marker color (hex, RGB, or CSS color name).

**`inset`**: Show an inset mini-map.

**`theme`**: Card theme. Use `light` for light cards on a dark map.

`chapterReturn`: Show a "Back to top" link at the bottom of each chapter.

`title`: The title of the overall story. (Optional)

`logo`: Path to a logo image for the header. (Optional)

`subtitle`: A subtitle for the story. (Optional)

`byline`: Credit the author of the story. (Optional)

`mobileview`: HTML content shown on mobile devices suggesting landscape orientation. (Optional)

`footer`: Citations, credits, etc. displayed at the bottom of the story.

## Chapters

**`chapters`**: Array of objects containing story content and map controls.

### Required fields

- **`id`**: A slug-style ID (e.g., `las-parcelas`, `supernode`). Used as the HTML element ID.
- **`location`**: Camera position object:
    - **`center`**: `[longitude, latitude]`
    - **`zoom`**: Zoom level (1 = world, 18 = building)
    - **`pitch`**: Camera tilt in degrees (0 = top-down, 60 = oblique)
    - **`bearing`**: Rotation from north in degrees (0 = north up, negative = counter-clockwise)

### Common fields

- `title`: Section heading, displayed as an `h3`.
- `image`: Path to an image (place files in `images/`).
- `description`: Main story text. Renders as HTML, so links and formatting work.
- `caption`: Image caption, displayed in italics.

### Optional fields (have defaults)

- `alignment`: Card position. `'left'`, `'right'` (default), `'center'`, or `'full'`.
- `hidden`: Set `true` to trigger map movement without showing a card. Default: `false`.
- `mapAnimation`: `'flyTo'` (default) for sweeping transitions, `'easeTo'` for subtle pans.
- `rotateAnimation`: Set `true` to slowly rotate the map after the transition. Default: `false`.
- `mapInteractive`: Set `true` to let the user drag/zoom the map. Default: `false`.
- `onChapterEnter`: Layer opacity changes when the chapter becomes active. Array of objects:
    - `layer`: Layer name as assigned in the MapLibre style.
    - `opacity`: Target opacity (0 = transparent, 1 = opaque).
    - `duration`: Transition length in milliseconds (default 300).
- `onChapterExit`: Same as `onChapterEnter`, triggered when the chapter becomes inactive.

### Minimal chapter example

```js
{
    id: 'my-chapter',
    title: 'Chapter Title',
    image: './images/photo.jpg',
    description: 'What the reader should know about this location.',
    location: {
        center: [-75.1350, 39.9830],
        zoom: 15.00,
        pitch: 45.00,
        bearing: 0.00
    }
}
```

### flyTo / easeTo options

Additional [animation options](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FlyToOptions/) like `speed`, `curve`, `maxDuration` can be included in the `location` object:

```js
location: {
    center: [-75.1350, 39.9830],
    zoom: 15.00,
    pitch: 45.00,
    bearing: 0.00,
    speed: 0.2,
    curve: 1
}
```
