var Stremio = require("stremio-addons");
var magnet = require("magnet-uri");
// Enable server logging for development purposes
process.env.STREMIO_LOGGING = true; 
// Define manifest object
var manifest = { 
    // See https://github.com/Stremio/stremio-addons/blob/master/docs/api/manifest.md for full explanation
    id: "org.stremio.dbz",
    version: "1.0.0",

    name: "Dragon Ball Z",
    description: "Complete Series",
    icon: "", 
    background: "https://hdwallsource.com/img/2014/12/dragon-ball-z-10242-10608-hd-wallpapers.jpg",
    endpoint: "https://dbz-addon.herokuapp.com/",
    isFree: true,
    // Properties that determine when Stremio picks this add-on
    types: ["series"], // your add-on will be preferred for those content types
    idProperty: ["imdb_id"], // the property to use as an ID for your add-on; your add-on will be preferred for items with that property; can be an array
    // We need this for pre-4.0 Stremio, it's the obsolete equivalent of types/idProperty
    filter: { ["query.season"+"x"+"query.episode"]: { "$exists": true }, "query.type": { "$in": ["series"] } },

    // Adding a sort would add a tab in Discover and a lane in the Board for this add-on
    sorts: [ {prop: "popularities.dbz", name: "Dragon Ball Z", types: ["series"]}],
};

var stremio = new addons.Client({ 
    picker: function(addons) { 
        return addons 
    }
});
stremio.add("https://dbz-addon.herokuapp.com");

// specify a picker function to filter / sort the addons we'll use
// timeout: specify a request timeout
// respTimeout: specify response timeout
// disableHttps: use HTTP instead of HTTPS
// OR

var dataset = {
    // For p2p streams, you can provide availability property, from 0 to 3, to indicate stability of the stream; if not passed, 1 will be assumed
    "tt0214341": {
        "1x1":[
            fromMagnet("magnet:?xt=urn:btih:c0c440ebf439788633ca8c086a4280df3d2d9bb2&dn=DragonballZ001TheNewThreat.mkv&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com")
        ],
        "1x3":[
            fromMagnet("magnet:?xt=urn:btih:741B2D4FE20AF78C425816E3E457FD40D45EE4DE&dn=DragonballZ003UnlikelyAlliance.mkv&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com")
        ],

        "1x4":[
            fromMagnet("magnet:?xt=urn:btih:3CCF4F38E665123E29BC9C000A398701830753DB&dn=DragonballZ004PiccolosPlan.mkv&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com")
        ],

        "1x5":[
            fromMagnet("magnet:?xt=urn:btih:94EADC5A71688245C260602163AF2E20A100E1A1&dn=DragonballZ005GohansRage.mkv&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com")
        ],

        "1x6":[
            fromMagnet("magnet:?xt=urn:btih:8F857413020EC1DAD89FB358333E453C2ECB55E1&dn=DragonballZ006NoTimeLikeThePresent.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ006NoTimeLikeThePresent.mkv")
        ],

        "1x7":[
            fromMagnet("magnet:?xt=urn:btih:914DC5EA6AE03C56EF733AAB07D00364D8339F1B&dn=DragonballZ007Day1.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ007Day1.mkv")
        ],

        "1x8":[
            fromMagnet("magnet:?xt=urn:btih:E74B92E767EA7131B413A75F656B507A65FB14F4&dn=DragonballZ008GohanGoesBananas.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ008GohanGoesBananas.mkv")
        ],

        "1x9":[
            fromMagnet("magnet:?xt=urn:btih:BA9FB212E4A03421085FD56F653A94BC5E608F55&dn=DragonballZ009TheStrangestRobot.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ009TheStrangestRobot.mkv")
        ],

        "1x10":[
            fromMagnet("magnet:?xt=urn:btih:FBB21647DD24C9E45D4FE5EB2E01BA54C90C68F0&dn=DragonballZ010ANewFriend.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ010ANewFriend.mkv")
        ],

        "1x11":[
            fromMagnet("magnet:?xt=urn:btih:01DC4E248F4E275AD297C2C7D7784BF01C41F9D0&dn=DragonballZ011TerroronArlia.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ011TerroronArlia.mkv")
        ],

        "1x12":[
            fromMagnet("magnet:?xt=urn:btih:651ED49F380DAFF0771B0377C94C2C124A96228E&dn=DragonballZ012GlobalTraining.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ012GlobalTraining.mkv")
        ],

        "1x13":[
            fromMagnet("magnet:?xt=urn:btih:911CDC508B96BF93F1F164309BBAAEC78E3A1B4C&dn=DragonballZ013GozandMez.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ013GozandMez.mkv")
        ],

        "1x14":[
            fromMagnet("magnet:?xt=urn:btih:85AC65C9DB35F6ECE81EB00682F8C8688AEC48E7&dn=DragonballZ014PrincessSnake.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ014PrincessSnake.mkv")
        ],

        "1x15":[
            fromMagnet("magnet:?xt=urn:btih:4137C20515D5846DB56B17C48C7403264CB275DD&dn=DragonballZ015DuelingPiccolos.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ015DuelingPiccolos.mkv")
        ],

        "1x16":[
            fromMagnet("magnet:?xt=urn:btih:C4D76A635BD3F78BFAC74F7B56D9925EE2EDCEB9&dn=DragonballZ016PlightoftheChildren.mkv&tr=http%3a%2f%2fmagnetopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ016PlightoftheChildren.mkv")
        ],

        "1x17":[
            fromMagnet("magnet:?xt=urn:btih:FA7E1164E6F1992DC9865D0B769C7739BCB4B1FE&dn=DragonballZ017PendulumRoomPeril.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ017PendulumRoomPeril.mkv")
        ],

        "1x18":[
            fromMagnet("magnet:?xt=urn:btih:3B587380A169E6C8D95C654874AD7594B5B3C5DE&dn=DragonballZ018TheEndofSnakeWay.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ018TheEndofSnakeWay.mkv")
        ],

        "1x19":[
            fromMagnet("magnet:?xt=urn:btih:9559F74FB078EAF84E27DF809EA8DA75D7C713F8&dn=DragonballZ019DefyingGravity.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ019DefyingGravity.mkv")
        ],

        "1x20":[
            fromMagnet("magnet:?xt=urn:btih:FAAD50C9991444B79F2F32829DDB48EFCA319267&dn=DragonballZ020Goku27sAncestors.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ020Goku27sAncestors.mkv")
        ],

        "1x21":[
            fromMagnet("magnet:?xt=urn:btih:FC251C1F09C4BC8F2A269F18C8511A392DC9F871&dn=DragonballZ021CountingDown.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ021CountingDown.mkv")
        ],

        "1x22":[
            fromMagnet("magnet:?xt=urn:btih:60E12B6026BF527EDDC6814CB1D2FFD982A22EC5&dn=DragonballZ022TheDarkestDay.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ022TheDarkestDay.mkv")
        ],

        "1x23":[
            fromMagnet("magnet:?xt=urn:btih:1E316351E486EE888BC68F0A6FBD35E48346C3C3&dn=DragonballZ023SaibamenAttack.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ023SaibamenAttack.mkv")
        ],

        "1x24":[
            fromMagnet("magnet:?xt=urn:btih:C34530AAF5ABDB72F484DFA64648CA35EDDCEE35&dn=DragonballZ024ThePowerofNappa.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ024ThePowerofNappa.mkv")
        ],

        "1x25":[
            fromMagnet("magnet:?xt=urn:btih:C2976E43691DE79C4455292B6F548B02B02419D9&dn=DragonballZ025Sacrifice.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ025Sacrifice.mkv")
        ],

        "1x26":[
            fromMagnet("magnet:?xt=urn:btih:0BC6960A5685702D65694591D3EE7261732ABA69&dn=DragonballZ026NappasRampage.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ026NappasRampage.mkv")
        ],

        "1x27":[
            fromMagnet("magnet:?xt=urn:btih:FB00BCE7C61C91B96A06D7505BD003EFD984D30B&dn=DragonballZ027NimbusSpeed.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ027NimbusSpeed.mkv")
        ],

        "1x28":[
            fromMagnet("magnet:?xt=urn:btih:48175E84DCF863CE343C08BD447332FF72794171&dn=DragonballZ028GokusArrival.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ028GokusArrival.mkv")
        ],

        "1x29":[
            fromMagnet("magnet:?xt=urn:btih:BB55B568270804C20DE025271ED7E4492627BB31&dn=DragonballZ029LessonNumberOne.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ029LessonNumberOne.mkv")
        ],

        "1x30":[
            fromMagnet("magnet:?xt=urn:btih:E9CA3F7930EFB7A67908371789386B89DF1F88A5&dn=DragonballZ030Gokuvs.Vegeta.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ030Gokuvs.Vegeta.mkv")
        ],

        "1x31":[
            fromMagnet("magnet:?xt=urn:btih:49CBABE5653A2FA3622CE92620E072026AD200DD&dn=DragonballZ031SaiyanSizedSecret.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ031SaiyanSizedSecret.mkv")
        ],
        "1x32":[
            fromMagnet("magnet:?xt=urn:btih:24D2359BD12FEF6BD884C5AFFF1731D9432CF0FA&dn=DragonballZ032SpiritBombAway.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ032SpiritBombAway.mkv")
        ],
        "1x33":[
            fromMagnet("magnet:?xt=urn:btih:31CF74D2A74433AF7F278E707416EDDB8E49A012&dn=DragonballZ033HerointheShadows.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ033HerointheShadows.mkv")
        ],
        "1x34":[
            fromMagnet("magnet:?xt=urn:btih:B1BC516CA71634D493A15A30EBA977016E5F41C9&dn=DragonballZ034Krillin27sOffensive.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ034Krillin27sOffensive.mkv")
        ],
        "1x35":[
            fromMagnet("magnet:?xt=urn:btih:7EA937D6478117F68C47F94CD8527E58D1CB65B2&dn=DragonballZ035Mercy.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ035Mercy.mkv")
        ],
        "1x36":[
            fromMagnet("magnet:?xt=urn:btih:5E01DAAE011135BB73126B677716D268A5E5CBE2&dn=DragonballZ036PickingupthePieces.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ036PickingupthePieces.mkv")
        ],
        "1x37":[
            fromMagnet("magnet:?xt=urn:btih:2B066E6149BB3921673E62A69E7780538BB58B6D&dn=DragonballZ037PlansforDeparture.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ037PlansforDeparture.mkv")
        ],
        "1x38":[
            fromMagnet("magnet:?xt=urn:btih:2B689A90CACD1B6C316A0D39059ED2F5FA922C79&dn=DragonballZ038NursingWounds.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ038NursingWounds.mkv")
        ],
        "1x39":[
            fromMagnet("magnet:?xt=urn:btih:2F7917A5FB9666474147495EBCD62C6D3A770FD7&dn=DragonballZ039FriendsorFoes.mkv&tr=http%3a%2f%2fopen.tracker.thepiratebay.org%2fannounce&ws=https%3a%2f%2fjagpal-development.com%2fdbz%2fDragonballZ039FriendsorFoes.mkv")
        ]
    }

};

// utility function to add from magnet
function fromMagnet(uri) {
    var parsed = magnet.decode(uri);
    var infoHash = parsed.infoHash.toLowerCase();
    var tags = [];
    tags.push("SD");
    if(uri.match())
    if (uri.match(/720p/i)) tags.push("720p");
    //if (uri.match(/1080p/i)) tags.push("1080p");
    return {
        infoHash: infoHash,
        sources: (parsed.announce || []).map(function(x) { return "tracker:"+x }).concat(["dht:"+infoHash]),
        tag: tags,
        title: "SD", // show quality in the UI
    }
}

var methods = { };
var client = new Stremio.Client();
client.add("http://cinemeta.strem.io/stremioget/stremio/v1");
var addon = new Stremio.Server({
    "stream.find": function(args, callback) {
        console.log("received request from stream.find", args)
        //if(!args.query) return callback();
        var key = [args.query.season, args.query.episode].filter(function(x) { return x }).join("x");
        var key2 = [args.query.season, args.query.episode].filter(function(x) { return x })
        console.log(key2)
        console.log([dataset[args.query.imdb_id][key]]);
        callback(null, dataset[args.query.imdb_id][key]);
        // callback expects array of stream objects
    },
    "meta.find": function(args, callback) {
        console.log("received request from meta.find", args)
         var ourImdbIds = Object.keys(dataset).map(function(x) { return x });
         console.log(ourImdbIds);
        args.query = args.query || { };
        args.query.imdb_id = args.query.imdb_id || { $in: ourImdbIds };
        client.meta.find(args, function(err, res) {
        if (err) console.error(err);
            callback(err, res ? res.map(function(r) { 
                r.popularities = { dbz: 10000 }; // we sort by popularities.helloWorld, so we should have a value
                return r;
            }) : null);
        });
        // callback expects array of meta object (primary meta feed)
        // it passes "limit" and "skip" for pagination
    },
    "meta.get": function(args, callback) {
        console.log("received request from meta.get", args)
        // callback expects one meta element
    },
    "meta.search": function(args, callback) {
        console.log("received request from meta.search", args)
        // callback expects array of search results with meta objects
        // does not support pagination
    },
}, manifest);

if (require.main===module) var server = require("http").createServer(function (req, res) {
    addon.middleware(req, res, function() { res.end() }); // wire the middleware - also compatible with connect / express
}).on("listening", function()
{
    var port = server.address().port;
    console.log("Sample Stremio Addon listening on "+port);
    console.log("You can test this add-on via the web app at: http://app.strem.io/#/discover/series?addon="+encodeURIComponent('http://localhost:'+port))
}).listen(process.env.PORT || 7000);

// Export for local usage
module.exports = addon;