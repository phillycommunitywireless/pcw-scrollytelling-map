// Basemap style -- swap in MapTiler style URL + key here when ready, e.g.:
// var MAP_STYLE = 'https://api.maptiler.com/maps/<style-id>/style.json?key=<YOUR_KEY>';
// Default is the free CARTO Dark Matter style (no key required).
// Note: the 3D building layer in index.html reads the 'carto' source from this
// style; with a MapTiler style the equivalent source is usually 'openmaptiles'
// (index.html falls back gracefully if the source is missing).
var MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

// Read by index.html, which loads this file as a plain script.
// eslint-disable-next-line no-unused-vars
var config = {
    style: MAP_STYLE,
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'light',
    chapterReturn: true,
    title: 'Philly Community Wireless',
    logo: '',
    subtitle: 'Internet for the people by the people',
    byline: '',
    mobileview: '<div id="rotate-mobile"><em>For the best viewing experience on mobile, rotate your device horizontally.</em><br><br><img src="images/device.png"></div>',
    footer: '<a href="https://phillycommunitywireless.org/about/our_story/">Philly Community Wireless</a><br>Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a><br>Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: 'Building a Community Wi-Fi Network in North Philadelphia',
            image: './images/rooftop_antenna.webp',
            description: 'Philly Community Wireless is building a community-owned wireless network in the North Philadelphia neighborhood of Norris Square.',
            location: {
                center: [-75.14770, 39.98100],
                zoom: 11.50,
                pitch: 30.00,
                bearing: 0.00
            }
        },
        {
            id: 'how-it-works',
            title: 'How does it work?',
            image: './images/mounting_antenna.webp',
            description: 'We often get questions about how the network is built. This scrollytelling map will walk you through how our wireless mesh network functions, and what happens when you access the internet on our network.',
            location: {
                center: [-75.13450, 39.98350],
                zoom: 14.50,
                pitch: 30.00,
                bearing: 10.00
            }
        },
        {
            id: 'nsnp-access-point',
            title: 'A local access point at the Norris Square Neighborhood Project Main Building',
            image: './images/nsnp.webp',
            description: 'Here you see a directional antenna mounted on the outside facade of our community partner, Norris Square Neighborhood Project. This device broadcasts Wi-Fi into Norris Square Park. If you were to log in, your device would reach the internet by connecting to it. This device is connected to a router and a radio antenna on the roof, known as a LiteBeam.',
            location: {
                center: [-75.13358, 39.98294],
                zoom: 17.50,
                pitch: 55.00,
                bearing: 40.00
            }
        },
        {
            id: 'las-parcelas',
            title: 'Las Parcelas',
            image: './images/las_parcelas.webp',
            // Short hop from the NSNP chapter at the same zoom -- a linear pan
            // reads better here than a flyTo zoom-out-and-back-in.
            mapAnimation: 'easeTo',
            description: "At the Norris Square Neighborhood Project's Las Parcelas gardens, we've installed an antenna visible in line of sight from the Gotham Tower. In this image, you can see the access point broadcasting Wi-Fi, and behind it, the radio antenna pointed to PhillyWisper's supernode at Gotham Tower.",
            location: {
                center: [-75.13587, 39.98497],
                zoom: 17.50,
                pitch: 45.00,
                bearing: -20.00
            }
        },
        {
            id: 'antenna-detail',
            alignment: 'left',
            title: 'Antenna Detail',
            image: './images/antenna_detail.webp',
            description: 'Here you can see the antenna and the source tower clearly marked.',
            mapAnimation: 'easeTo',
            location: {
                center: [-75.13560, 39.98480],
                zoom: 18.00,
                pitch: 60.00,
                bearing: -160.00
            }
        },
        {
            id: 'supernode',
            title: 'The supernode',
            image: './images/gotham.webp',
            description: 'The Gotham Tower high site southwest of Norris Square Park has a series of sector antennas broadcasting wireless radio signals in every direction. These sector antennas, point-to-multipoint radios, connect to the LiteBeams on the roofs of local residences and organizations.',
            rotateAnimation: true,
            location: {
                center: [-75.13713, 39.98152],
                zoom: 15.50,
                pitch: 55.00,
                bearing: -25.00
            }
        },
        {
            id: 'datacenter',
            title: 'The data center',
            image: './images/datacenter.webp',
            description: 'Gotham Tower also has radios connecting it to the data center at 401 N Broad, which acts as the gateway out to the cloud or internet more broadly.',
            location: {
                center: [-75.16105, 39.95982],
                zoom: 15.50,
                pitch: 50.00,
                bearing: 20.00
            }
        },
        {
            id: 'line-of-sight',
            title: 'Line of Sight',
            image: './images/los.webp',
            description: 'One problem that often arises is we cannot get Line of Sight between a residential house and Gotham tower. To address this problem, we can take advantage of the mesh capabilities of our Wi-Fi network. For example, buildings that are too close to Gotham Tower or below a taller building, cannot get direct access from the supernode to the internet.',
            location: {
                center: [-75.13620, 39.98200],
                zoom: 16.00,
                pitch: 50.00,
                bearing: -45.00
            }
        },
        {
            id: 'wireless-meshing',
            title: 'Wireless Meshing',
            image: './images/los.webp',
            // Small move from the line-of-sight chapter -- subtle pan, no arc.
            mapAnimation: 'easeTo',
            description: 'We often relay signal from a local residential hub, to another location using wireless meshing. For example, we mounted an omnidirectional antenna on the top of a residential rowhouse, with the omni wired via ethernet directly to the LiteBeam pointing at Gotham. Then from a neighboring community organization, GALAEI, we pointed a directional antenna towards the hub omni, and ran a cable inside the building to provide the organization with Wi-Fi.',
            location: {
                center: [-75.13489, 39.98369],
                zoom: 17.50,
                pitch: 45.00,
                bearing: 30.00
            }
        },
        {
            id: 'rooftop-installs',
            alignment: 'center',
            title: 'Installing Antennas on Rooftops',
            image: './images/rooftop.webp',
            description: 'We are currently looking for homeowners who would allow us to install an antenna to relay signal from Gotham Tower. If you are interested in helping us grow the network, please <a href="https://phillycommunitywireless.org/getconnected/">reach out</a> and we can work with you to figure out how we can grow a public Wi-Fi network in your neighborhood.',
            location: {
                center: [-75.13500, 39.98350],
                zoom: 13.50,
                pitch: 20.00,
                bearing: 0.00
            }
        }
    ]
};
