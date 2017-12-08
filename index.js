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
    endpoint: "https://dbz-addon.herokuapp.com",
    isFree: true,
    // Properties that determine when Stremio picks this add-on
    types: ["series"], // your add-on will be preferred for those content types
    idProperty: ["imdb_id"], // the property to use as an ID for your add-on; your add-on will be preferred for items with that property; can be an array
    // We need this for pre-4.0 Stremio, it's the obsolete equivalent of types/idProperty
    filter: { ["query.season"+"x"+"query.episode"]: { "$exists": true }, "query.type": { "$in": ["series"] } },

    // Adding a sort would add a tab in Discover and a lane in the Board for this add-on
    sorts: [ {prop: "popularities.dbz", name: "Dragon Ball Z", types: ["series"]}],
};


var dataset = {
    // For p2p streams, you can provide availability property, from 0 to 3, to indicate stability of the stream; if not passed, 1 will be assumed
    "tt0214341": {
        "1x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ001TheNewThreat.mkv", availability:1}
        ],

        "1x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ002Reunions.mkv", availability:1}
        ],

        "1x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ003UnlikelyAlliance.mkv", availability:1}
        ],

        "1x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ004PiccolosPlan.mkv", availability:1}
        ],

        "1x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ005GohansRage.mkv", availability:1}
        ],

        "1x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ006NoTimeLikeThePresent.mkv", availability:1}
        ],

        "1x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ007Day1.mkv", availability:1}
        ],

        "1x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ008GohanGoesBananas.mkv", availability:1}
        ],

        "1x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ009TheStrangestRobot.mkv", availability:1}
        ],

        "1x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ010ANewFriend.mkv", availability:1}
        ],

        "1x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ011TerroronArlia.mkv", availability:1}
        ],

        "1x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ012GlobalTraining.mkv", availability:1}
        ],

        "1x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ013GozandMez.mkv", availability:1}
        ],

        "1x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ014PrincessSnake.mkv", availability:1}
        ],

        "1x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ015DuelingPiccolos.mkv", availability:1}
        ],

        "1x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ016PlightoftheChildren.mkv", availability:1}
        ],

        "1x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ017PendulumRoomPeril.mkv", availability:1}
        ],

        "1x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ018TheEndofSnakeWay.mkv", availability:1}
        ],

        "1x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ019DefyingGravity.mkv", availability:1}
        ],

        "1x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ020Goku27sAncestors.mkv", availability:1}
        ],

        "1x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ021CountingDown.mkv", availability:1}
        ],

        "1x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ022TheDarkestDay.mkv", availability:1}
        ],

        "1x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ023SaibamenAttack.mkv", availability:1}
        ],

        "1x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ024ThePowerofNappa.mkv", availability:1}
        ],

        "1x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ025Sacrifice.mkv", availability:1}
        ],

        "1x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ026NappasRampage.mkv", availability:1}
        ],

        "1x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ027NimbusSpeed.mkv", availability:1}
        ],

        "1x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ028GokusArrival.mkv", availability:1}
        ],

        "1x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ029LessonNumberOne.mkv", availability:1}
        ],

        "1x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ030Gokuvs.Vegeta.mkv", availability:1}
        ],

        "1x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ031SaiyanSizedSecret.mkv", availability:1}
        ],

        "1x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ032SpiritBombAway.mkv", availability:1}
        ],

        "1x33":[
            {url: "https://jagpal-development.com/dbz/DragonballZ033HerointheShadows.mkv", availability:1}
        ],

        "1x34":[
            {url: "https://jagpal-development.com/dbz/DragonballZ034Krillin27sOffensive.mkv", availability:1}
        ],

        "1x35":[
            {url: "https://jagpal-development.com/dbz/DragonballZ035Mercy.mkv", availability:1}
        ],

        "1x36":[
            {url: "https://jagpal-development.com/dbz/DragonballZ036PickingupthePieces.mkv", availability:1}
        ],

        "1x37":[
            {url: "https://jagpal-development.com/dbz/DragonballZ037PlansforDeparture.mkv", availability:1}
        ],

        "1x38":[
            {url: "https://jagpal-development.com/dbz/DragonballZ038NursingWounds.mkv", availability:1}
        ],

        "1x39":[
            {url: "https://jagpal-development.com/dbz/DragonballZ039FriendsorFoes.mkv", availability:1}
        ],

        "2x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ040HeldCaptive.mkv", availability:1}
        ],

        "2x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ041FriendsorFoes.mkv", availability:1}
        ],

        "2x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ042TheSearchContinues.mkv", availability:1}
        ],

        "2x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ043AFriendlySurprise.mkv", availability:1}
        ],

        "2x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ044BroodofEvil.mkv", availability:1}
        ],

        "2x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ045FriezaStrikes.mkv", availability:1}
        ],

        "2x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ046DefyingOrders.mkv", availability:1}
        ],

        "2x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ047NameksDefense.mkv", availability:1}
        ],

        "2x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ048TheHunted.mkv", availability:1}
        ],

        "2x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ049ThePrinceFightsBack.mkv", availability:1}
        ],

        "2x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ050UnexpectedProblem.mkv", availability:1}
        ],

        "2x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ051VegetahasaBall.mkv", availability:1}
        ],

        "2x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ052ThePastandFuture.mkv", availability:1}
        ],

        "2x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ053ZarbonsSurprise.mkv", availability:1}
        ],

        "2x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ054GurusGift.mkv", availability:1}
        ],

        "2x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ055PiccolovsEveryone.mkv", availability:1}
        ],

        "2x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ056ZarbonsMission.mkv", availability:1}
        ],

        "2x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ057GohantheHunted.mkv", availability:1}
        ],

        "2x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ058UnknownEnemies.mkv", availability:1}
        ],

        "2x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ059DestinationGuru.mkv", availability:1}
        ],

        "2x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ060BulmasBigDay.mkv", availability:1}
        ],

        "2x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ061HiddenPower.mkv", availability:1}
        ],

        "2x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ062NewAllyNewProblem.mkv", availability:1}
        ],

        "2x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ063GuldosMindBinds.mkv", availability:1}
        ],

        "2x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ064RecoomeUnleashed.mkv", availability:1}
        ],

        "2x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ065LettheBattleBegin.mkv", availability:1}
        ],

        "2x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ066GokusNewPower.mkv", availability:1}
        ],

        "2x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ067ALegendRevealed.mkv", availability:1}
        ],

        "2x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ068GinyuAssault.mkv", availability:1}
        ],

        "2x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ069IncredibleForce.mkv", availability:1}
        ],

        "2x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ070FriezaApproaches.mkv", availability:1}
        ],

        "2x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ071GokuisGinyuGinyuisGoku.mkv", availability:1}
        ],

        "2x33":[
            {url: "https://jagpal-development.com/dbz/DragonballZ072CallingtheEternalDragon.mkv", availability:1}
        ],

        "2x34":[
            {url: "https://jagpal-development.com/dbz/DragonballZ073GohanDefeatYourDad.mkv", availability:1}
        ],

        "2x35":[
            {url: "https://jagpal-development.com/dbz/DragonballZ074CaptainGinyu...TheFrog.mkv", availability:1}
        ],
        "3x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ075PasswordisPorunga.mkv", availability:1}
        ],

        "3x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ076PiccolosReturn.mkv", availability:1}
        ],

        "3x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ077TheFusion.mkv", availability:1}
        ],

        "3x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ078FightingPowerOneMillion.mkv", availability:1}
        ],

        "3x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ079GohanAttacks.mkv", availability:1}
        ],

        "3x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ080PiccoloTheSuperNamek.mkv", availability:1}
        ],

        "3x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ081DejaVu.mkv", availability:1}
        ],

        "3x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ082FriezasSecondTransformation.mkv", availability:1}
        ],

        "3x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ083AnotherTransformation.mkv", availability:1}
        ],

        "3x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ084DendesDemise.mkv", availability:1}
        ],

        "3x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ085TheRenewedGoku.mkv", availability:1}
        ],

        "3x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ086TheEndofVegeta.mkv", availability:1}
        ],

        "3x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ087TheUltimateBattle.mkv", availability:1}
        ],

        "3x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ088ClashofTheSuperPowers.mkv", availability:1}
        ],

        "3x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ089FriezasBoast.mkv", availability:1}
        ],

        "3x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ090BoldandFearless.mkv", availability:1}
        ],

        "3x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ091EmbodimentofFire.mkv", availability:1}
        ],

        "3x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ092TrumpCard.mkv", availability:1}
        ],

        "3x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ093KeepTheChanceAlive.mkv", availability:1}
        ],

        "3x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ094PowerofTheSpirit.mkv", availability:1}
        ],

        "3x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ095TransformedatLast.mkv", availability:1}
        ],

        "3x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ096ExplosionofAnger.mkv", availability:1}
        ],

        "3x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ097NameksDestruction.mkv", availability:1}
        ],

        "3x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ098AFinalAttack.mkv", availability:1}
        ],

        "3x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ099ApproachingDestruction.mkv", availability:1}
        ],

        "3x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ100GohanReturns.mkv", availability:1}
        ],

        "3x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ101TheLastWish.mkv", availability:1}
        ],

        "3x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ102DuelOnAVanishingPlanet.mkv", availability:1}
        ],

        "3x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ103PathosofFrieza.mkv", availability:1}
        ],

        "3x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ104FriezaDefeated.mkv", availability:1}
        ],

        "3x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ105MightyBlastofRage.mkv", availability:1}
        ],

        "3x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ106NameksExplosion...GokusEnd.mkv", availability:1}
        ],

        "3x33":[
            {url: "https://jagpal-development.com/dbz/DragonballZ107GokusAlive.mkv", availability:1}
        ],

        "4x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ108TheHeavensTremble.mkv", availability:1}
        ],

        "4x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ109BlackFogOfTerror.mkv", availability:1}
        ],

        "4x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ110BattleinKami'sLookout.mkv", availability:1}
        ],

        "4x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ111FightWithPiccolo.mkv", availability:1}
        ],

        "4x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ112CallForRestoration.mkv", availability:1}
        ],

        "4x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ113SuicidalCourse.mkv", availability:1}
        ],

        "4x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ114ExtremeMeasures.mkv", availability:1}
        ],

        "4x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ115TheWorldAwakens.mkv", availability:1}
        ],

        "4x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ116BriefChanceForVictory.mkv", availability:1}
        ],

        "4x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ117Krillin'sProposal.mkv", availability:1}
        ],

        "4x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ118Frieza'sCounterattack.mkv", availability:1}
        ],

        "4x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ119TheMysteriousYouth.mkv", availability:1}
        ],

        "4x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ120AnotherSuperSaiyan.mkv", availability:1}
        ],

        "4x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ121WelcomeBackGoku.mkv", availability:1}
        ],

        "4x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ122MysteryRevealed.mkv", availability:1}
        ],

        "4x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ123GokusSpecialTechnique.mkv", availability:1}
        ],

        "4x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ124ZWarriorsPrepare.mkv", availability:1}
        ],

        "4x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ125GokusOrdeal.mkv", availability:1}
        ],

        "4x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ126TheAndroidsAppear.mkv", availability:1}
        ],

        "4x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ127AHandyTrick.mkv", availability:1}
        ],

        "4x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ128DoubleTroubleForGoku.mkv", availability:1}
        ],

        "4x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ129UpgradetoSuperSaiyan.mkv", availability:1}
        ],

        "4x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ130TheSecretofDr.Gero.mkv", availability:1}
        ],

        "4x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ131MoreAndroids.mkv", availability:1}
        ],

        "4x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ132FollowDr.Gero.mkv", availability:1}
        ],

        "4x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ133NightmareComesTrue.mkv", availability:1}
        ],

        "4x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ134Goku'sAssassin.mkv", availability:1}
        ],

        "4x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ135DeadlyBeauty.mkv", availability:1}
        ],

        "4x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ136NoMatchForTheAndroids.mkv", availability:1}
        ],

        "4x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ137LastDitchEffort.mkv", availability:1}
        ],

        "4x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ138ClosingIn.mkv", availability:1}
        ],

        "4x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ139UnwelcomeDiscovery.mkv", availability:1}
        ],
        "5x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ140SeizedWithFear.mkv", availability:1}
        ],

        "5x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ141TheReunion.mkv", availability:1}
        ],

        "5x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ142BorrowedPowers.mkv", availability:1}
        ],

        "5x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ143HisNameisCell.mkv", availability:1}
        ],

        "5x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ144Piccolo'sFolly.mkv", availability:1}
        ],

        "5x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ145LaboratoryBasement.mkv", availability:1}
        ],

        "5x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ146OurHeroAwakes.mkv", availability:1}
        ],

        "5x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ147TimeChamber.mkv", availability:1}
        ],

        "5x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ148TheMonsterisComing.mkv", availability:1}
        ],

        "5x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ149He'sHere.mkv", availability:1}
        ],

        "5x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ150UpToPiccolo.mkv", availability:1}
        ],

        "5x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ151SilentWarrior.mkv", availability:1}
        ],

        "5x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ152SayGoodbye17.mkv", availability:1}
        ],

        "5x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ153Sacrifice.mkv", availability:1}
        ],

        "5x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ154SaiyansEmerge.mkv", availability:1}
        ],

        "5x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ155SuperVegeta.mkv", availability:1}
        ],

        "5x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ156BowToThePrince.mkv", availability:1}
        ],

        "5x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ157HourofTemptation.mkv", availability:1}
        ],

        "5x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ158Krillin'sDecision.mkv", availability:1}
        ],

        "5x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ159TheLastDefense.mkv", availability:1}
        ],

        "5x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ160CellisComplete.mkv", availability:1}
        ],

        "5x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ161VegetaMustPay.mkv", availability:1}
        ],

        "5x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ162TrunksAscends.mkv", availability:1}
        ],

        "5x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ163SavingThrow.mkv", availability:1}
        ],

        "5x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ164GhostsFromTomorrow.mkv", availability:1}
        ],

        "5x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ165TheCellGames.mkv", availability:1}
        ],

        "6x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ166WhatIsTheTournament.mkv", availability:1}
        ],

        "6x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ167TheDoomsdayBroadcast.mkv", availability:1}
        ],

        "6x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ168MeetMeInTheRing.mkv", availability:1}
        ],

        "6x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ169NoWorriesHere.mkv", availability:1}
        ],

        "6x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ170AGirlNamedLime.mkv", availability:1}
        ],

        "6x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ171MemoriesOfGohan.mkv", availability:1}
        ],

        "6x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ172ANewGaurdian.mkv", availability:1}
        ],

        "6x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ173Dende'sDragon.mkv", availability:1}
        ],

        "6x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ174ThePuzzleOfGeneralTao.mkv", availability:1}
        ],

        "6x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ175TheGamesBegin.mkv", availability:1}
        ],

        "6x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ176LosersFightFirst.mkv", availability:1}
        ],

        "6x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ177Gokuvs.Cell.mkv", availability:1}
        ],

        "6x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ178Cell'sBagOfTricks.mkv", availability:1}
        ],

        "6x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ179NoMoreRules.mkv", availability:1}
        ],

        "6x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ180TheFightIsOver.mkv", availability:1}
        ],

        "6x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ181FaithInABoy.mkv", availability:1}
        ],

        "6x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ182Gohan'sPlea.mkv", availability:1}
        ],

        "6x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ183AndroidExplosion.mkv", availability:1}
        ],

        "6x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ184CellJuniorsAttack!.mkv", availability:1}
        ],

        "6x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ185Awakening.mkv", availability:1}
        ],

        "6x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ186TheUnstoppableGohan.mkv", availability:1}
        ],

        "6x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ187Cell'sBreakDown.mkv", availability:1}
        ],

        "6x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ188AHero'sFarewell.mkv", availability:1}
        ],

        "6x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ189CellReturns!.mkv", availability:1}
        ],

        "6x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ190TheHorrorWon'tEnd.mkv", availability:1}
        ],

        "6x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ191SaveTheWorld.mkv", availability:1}
        ],

        "6x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ192Goku'sDecision.mkv", availability:1}
        ],

        "6x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ193OneMoreWish.mkv", availability:1}
        ],

        "6x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ194FreeTheFuture.mkv", availability:1}
        ],

        "7x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ195WarriorsOfTheDead.mkv", availability:1}
        ],

        "7x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ196TournamentBegins.mkv", availability:1}
        ],

        "7x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ197WaterFight.mkv", availability:1}
        ],

        "7x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ198FinalRound.mkv", availability:1}
        ],

        "7x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ199GokuVS.Pikkon.mkv", availability:1}
        ],

        "7x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ200GohanGoesToHighSchool.mkv", availability:1}
        ],

        "7x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ201IAmSaiyaman!.mkv", availability:1}
        ],

        "7x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ202Gohan'sFirstDate.mkv", availability:1}
        ],

        "7x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ203RescueVidel.mkv", availability:1}
        ],

        "7x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ204Blackmail.mkv", availability:1}
        ],

        "7x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ205I'llFightToo.mkv", availability:1}
        ],

        "7x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ206TheNewestSuperSaiyan.mkv", availability:1}
        ],

        "7x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ207TakeFlight,Videl.mkv", availability:1}
        ],

        "7x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ208GatherForTheTournament.mkv", availability:1}
        ],

        "7x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ209CameraShy.mkv", availability:1}
        ],

        "7x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ210TheWorldTournament.mkv", availability:1}
        ],

        "7x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ211TrunksVS.Goten.mkv", availability:1}
        ],

        "7x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ212BestOfTheBoys.mkv", availability:1}
        ],

        "7x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ213BigTrouble,LittleTrunks.mkv", availability:1}
        ],

        "7x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ214WhoWillFightWho.mkv", availability:1}
        ],

        "7x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ215ForfeitOfPiccolo.mkv", availability:1}
        ],

        "7x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ216ADarkAndSecretPower.mkv", availability:1}
        ],

        "7x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ217VidelIsCrushed.mkv", availability:1}
        ],

        "7x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ218IdentitiesRevealed.mkv", availability:1}
        ],

        "7x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ219EnergyDrain.mkv", availability:1}
        ],

        "8x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ220TheWizard'sCurse.mkv", availability:1}
        ],

        "8x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ221KingOfTheDemons.mkv", availability:1}
        ],

        "8x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ222VegetaAttacks.mkv", availability:1}
        ],

        "8x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ223NextUp,Goku.mkv", availability:1}
        ],

        "8x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ224BattleSupreme.mkv", availability:1}
        ],

        "8x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ225EighteenUnmasks.mkv", availability:1}
        ],

        "8x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ226PayToWin.mkv", availability:1}
        ],

        "8x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ227HeartOfAVillain.mkv", availability:1}
        ],

        "8x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ228TheDarkPrinceReturns.mkv", availability:1}
        ],

        "8x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ229Vegeta'sPride.mkv", availability:1}
        ],

        "8x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ230TheLongAwaitedFight.mkv", availability:1}
        ],

        "8x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ231MagicBallOfBuu.mkv", availability:1}
        ],

        "8x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ232BuuIsHatched.mkv", availability:1}
        ],

        "8x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ233TheLossesBegin.mkv", availability:1}
        ],

        "8x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ234TheTerrorOfMr.Buu.mkv", availability:1}
        ],

        "8x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ235MealTime.mkv", availability:1}
        ],

        "8x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ236TheWarrior'sDecision.mkv", availability:1}
        ],

        "8x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ237FinalAtonement.mkv", availability:1}
        ],

        "8x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ238EvilLivesOn.mkv", availability:1}
        ],

        "8x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ239FindTheDragonballs.mkv", availability:1}
        ],

        "8x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ240Revival.mkv", availability:1}
        ],

        "8x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ241GlobalAnnouncement.mkv", availability:1}
        ],

        "8x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ242LearnToFuse.mkv", availability:1}
        ],

        "8x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ243TheZSword.mkv", availability:1}
        ],

        "8x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ244RaceToCapsuleCorp..mkv", availability:1}
        ],

        "8x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ245SuperSaiyan3!.mkv", availability:1}
        ],

        "8x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ246Buu'sMutiny.mkv", availability:1}
        ],

        "8x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ247TheFusionDance.mkv", availability:1}
        ],

        "8x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ248Goku'sTimeIsUp.mkv", availability:1}
        ],

        "8x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ249ReturnToOtherWorld.mkv", availability:1}
        ],

        "8x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ250OutFromTheBrokenSword.mkv", availability:1}
        ],

        "8x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ251GotenksIsBorn.mkv", availability:1}
        ],

        "8x33":[
            {url: "https://jagpal-development.com/dbz/DragonballZ252UnlikelyFriendship.mkv", availability:1}
        ],

        "8x34":[
            {url: "https://jagpal-development.com/dbz/DragonballZ253IKillNoMore.mkv", availability:1}
        ],

        "9x1":[
            {url: "https://jagpal-development.com/dbz/DragonballZ254TheEvilOfMen.mkv", availability:1}
        ],

        "9x2":[
            {url: "https://jagpal-development.com/dbz/DragonballZ255BuuAgainstBuu.mkv", availability:1}
        ],

        "9x3":[
            {url: "https://jagpal-development.com/dbz/DragonballZ256EmptyPlanet.mkv", availability:1}
        ],

        "9x4":[
            {url: "https://jagpal-development.com/dbz/DragonballZ257TimeStruggle.mkv", availability:1}
        ],

        "9x5":[
            {url: "https://jagpal-development.com/dbz/DragonballZ258SuperMovesOfGotenks.mkv", availability:1}
        ],

        "9x6":[
            {url: "https://jagpal-development.com/dbz/DragonballZ259TrappedInForever.mkv", availability:1}
        ],

        "9x7":[
            {url: "https://jagpal-development.com/dbz/DragonballZ260FeedingFrenzy.mkv", availability:1}
        ],

        "9x8":[
            {url: "https://jagpal-development.com/dbz/DragonballZ261GotenksisAwesome!.mkv", availability:1}
        ],

        "9x9":[
            {url: "https://jagpal-development.com/dbz/DragonballZ262UnluckyBreak.mkv", availability:1}
        ],

        "9x10":[
            {url: "https://jagpal-development.com/dbz/DragonballZ263AWholeNewGohan.mkv", availability:1}
        ],

        "9x11":[
            {url: "https://jagpal-development.com/dbz/DragonballZ264SearchForSurvivors.mkv", availability:1}
        ],

        "9x12":[
            {url: "https://jagpal-development.com/dbz/DragonballZ265MajinBuuTransforms.mkv", availability:1}
        ],

        "9x13":[
            {url: "https://jagpal-development.com/dbz/DragonballZ266TheOldKai'sWeapon.mkv", availability:1}
        ],

        "9x14":[
            {url: "https://jagpal-development.com/dbz/DragonballZ267ReadyToFuse.mkv", availability:1}
        ],

        "9x15":[
            {url: "https://jagpal-development.com/dbz/DragonballZ268UnionOfRivals.mkv", availability:1}
        ],

        "9x16":[
            {url: "https://jagpal-development.com/dbz/DragonballZ269MeetVegito.mkv", availability:1}
        ],

        "9x17":[
            {url: "https://jagpal-development.com/dbz/DragonballZ270RipInTheUniverse.mkv", availability:1}
        ],

        "9x18":[
            {url: "https://jagpal-development.com/dbz/DragonballZ271Vegito...Downsized.mkv", availability:1}
        ],

        "9x19":[
            {url: "https://jagpal-development.com/dbz/DragonballZ272TheIncredibleFightingCandy.mkv", availability:1}
        ],

        "9x20":[
            {url: "https://jagpal-development.com/dbz/DragonballZ273TheInnardsOfBuu.mkv", availability:1}
        ],

        "9x21":[
            {url: "https://jagpal-development.com/dbz/DragonballZ274MindTrap.mkv", availability:1}
        ],

        "9x22":[
            {url: "https://jagpal-development.com/dbz/DragonballZ275DeadlyVision.mkv", availability:1}
        ],

        "9x23":[
            {url: "https://jagpal-development.com/dbz/DragonballZ276EvilKidBuu!.mkv", availability:1}
        ],

        "9x24":[
            {url: "https://jagpal-development.com/dbz/DragonballZ277EndOfEarth.mkv", availability:1}
        ],

        "9x25":[
            {url: "https://jagpal-development.com/dbz/DragonballZ278TrueSaiyansFightAlone.mkv", availability:1}
        ],

        "9x26":[
            {url: "https://jagpal-development.com/dbz/DragonballZ279BattleForTheUniverseBegins.mkv", availability:1}
        ],

        "9x27":[
            {url: "https://jagpal-development.com/dbz/DragonballZ280VegetasRespect.mkv", availability:1}
        ],

        "9x28":[
            {url: "https://jagpal-development.com/dbz/DragonballZ281MinuteOfDesperation.mkv", availability:1}
        ],

        "9x29":[
            {url: "https://jagpal-development.com/dbz/DragonballZ282OldBuuEmerges.mkv", availability:1}
        ],

        "9x30":[
            {url: "https://jagpal-development.com/dbz/DragonballZ283EarthReborn.mkv", availability:1}
        ],

        "9x31":[
            {url: "https://jagpal-development.com/dbz/DragonballZ284CallToAction.mkv", availability:1}
        ],

        "9x32":[
            {url: "https://jagpal-development.com/dbz/DragonballZ285PeopleOfEarthUnite.mkv", availability:1}
        ],

        "9x33":[
            {url: "https://jagpal-development.com/dbz/DragonballZ286SpiritBombTriumphant.mkv", availability:1}
        ],

        "9x34":[
            {url: "https://jagpal-development.com/dbz/DragonballZ287CelebrationsWithMajinBuu.mkv", availability:1}
        ],

        "9x35":[
            {url: "https://jagpal-development.com/dbz/DragonballZ288HesAlwaysLate.mkv", availability:1}
        ],

        "9x36":[
            {url: "https://jagpal-development.com/dbz/DragonballZ289GranddaughterPan.mkv", availability:1}
        ],

        "9x37":[
            {url: "https://jagpal-development.com/dbz/DragonballZ290BuusReincarnation.mkv", availability:1}
        ],

        "9x38":[
            {url: "https://jagpal-development.com/dbz/DragonballZ291GokusNextJourney.mkv", availability:1}
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