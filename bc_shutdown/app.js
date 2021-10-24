'use strict';

const ProxyAgent = require('socks-proxy-agent')
const IO = require('socket.io-client')

const Agent = new ProxyAgent('socks5://127.0.0.1:9050')

const UserName = "Check description"

let SocketArr = []
let BotsStruct = []

function SocketEventsListeners(clientStruct) {
    clientStruct.Socket.on('connect', () => {
        clientStruct.Connected = true
        console.log('Client #' + num + ' is connected )')
    })

    clientStruct.Socket.on('disconnect', () => {
        clientStruct.Connected = !true
        console.log('Client #' + num + ' is disconnected ;(')
    })

    clientStruct.Socket.on('CreationResponse', (data) => {
        if (typeof data === "object" && data.ServerAnswer != null) {
            console.log('Bot "' + clientStruct.Bot.Login + ':' + clientStruct.Bot.Password + '" is created )))')
            WriteDefaultPlayerStruct(clientStruct.Bot.Login)
        } else {
            console.log('Bot "' + clientStruct.Bot.Login + '" can\'t create (recreate other bot) :@')
            clientStruct.Bot = {}
            CreateBot(clientStruct)
        }
    })
    clientStruct.Socket.on('LoginResponse', (data) => {
        console.log(data)
    })
}

function WriteDefaultPlayerStruct(login) {
    let LocalPlayer = {
        AccountName: login, Name: UserName, Creation: 1635101201, Money: 666, ItemPermission: 2, WhiteList: [], BlackList: [], FriendList: [], GhostList: [], Lovership: [], FriendNames: new Map(), SubmissiveList: new Set()
    }
    LocalPlayer.concat(DefaultAppearance)
}

function CreateConnections(count) {
    for (var c = 0; c < count; i++) {
        var num = SocketArr.push({
            Socket: IO('https://bondage-club-server.herokuapp.com/', {
                agent: Agent,
            }),
            Connected: false,
            Bot: {}
        })
        SocketEventsListeners(SocketArr[num])
    }
}

function GeneratorRandomString(length) {
    let result = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let cl = chars.length
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * cl))
    }
    return result
}

function CreateBot(clientStruct) {
    clientStruct.Bot = { Login: GeneratorRandomString(19), Password: GeneratorRandomString(19) }
    clientStruct.Socket.emit('AccountCreate', { Name: UserName, AccountName: clientStruct.Bot.Login, Password: clientStruct.Bot.Password, Email: "" })
}

CreateConnections(63)

let DefaultAppearance = {
    "Reputation": [
        { Type: "Dominant", Value: 666 },
        { Type: "Asylum", Value: -666 },
        {Type: "Maid", Value: -666},
    ],
    "Inventory": {
        "ItemMisc": ["MetalPadlock", "TimerPadlock", "OwnerTimerPadlock", "IntricatePadlock", "CombinationPadlock", "PasswordPadlock", "OwnerPadlock", "LoversPadlock", "LoversTimerPadlock", "ExclusivePadlock", "MetalPadlockKey", "OwnerPadlockKey", "LoversPadlockKey", "MetalCuffsKey", "WoodenMaidTray", "WoodenMaidTrayFull", "WoodenPaddle", "WoodenSign", "TimerPasswordPadlock", "HighSecurityPadlock", "MistressPadlock", "MistressTimerPadlock", "PandoraPadlock", "SafewordPadlock", "MistressPadlockKey", "PandoraPadlockKey", "Lockpicks", "BountySuitcase", "BountySuitcaseEmpty", "ServingTray", "TeddyBear"],
        "ItemMouth": ["ChloroformCloth", "FoxyHarnessPanelGag", "SpankingToys", "ClothGag", "WiffleGag", "HarnessBallGag", "HarnessPanelGag", "RingGag", "DuctTape", "PacifierGag", "HarnessPacifierGag", "DusterGag", "CupholderGag", "PumpGag", "KittyGag", "KittenHarnessPanelGag", "CarrotGag", "MuzzleGag", "FuturisticPanelGag", "FuturisticHarnessPanelGag", "RegularSleepingPill", "PantiesMask", "PlugGag", "DildoGag", "BoneGag", "ChopstickGag", "BambooGag", "HarnessBallGag1", "PumpkinGag", "LipGag", "SpiderGag", "ClothStuffing", "PantyStuffing", "ScarfGag", "LewdGag", "DeepthroatGag", "LeatherCorsetCollar", "LatexPostureCollar", "BitGag", "XLBoneGag", "DogMuzzleExposed", "BallGag", "TongueStrapGag", "BallGagMask", "HookGagMask", "DildoPlugGag", "SteelMuzzleGag", "StitchedMuzzleGag", "LatexBallMuzzleGag", "SockStuffing", "GasMaskGag", "WebGag", "RopeGag", "MilkBottle", "MedicalMask", "RegressedMilk", "PrisonLockdownGag", "ShoeGag", "FunnelGag", "FuturisticHarnessBallGag", "LargeDildo", "CropGag", "CaneGag", "FuturisticMuzzle", "CageMuzzle", "Ball", "HarnessPonyBits", "PlasticWrap", "DentalGag", "Ribbons", "PaciGag"],
        "ItemArms": ["MetalCuffs", "SpankingToys", "NylonRope", "HempRope", "SturdyLeatherBelts", "LeatherArmbinder", "ArmbinderJacket", "LeatherCuffs", "CeilingShackles", "FuturisticCuffs", "OrnateCuffs", "MittenChain1", "FourLimbsShackles", "Manacles", "FullBodyShackles", "WristShackles", "StraitLeotard", "StraitJacket", "CollarCuffs", "LeatherStraitJacket", "Bolero", "DuctTape", "BitchSuit", "BitchSuitExposed", "CollarLeashHolding", "StraitDress", "StraitDressOpen", "SeamlessStraitDress", "SeamlessStraitDressOpen", "Yoke", "Pillory", "FullLatexSuit", "Zipties", "BoxTieArmbinder", "BondageBouquet", "Chains", "ChainLeashHolding", "PetCrawler", "MermaidSuit", "Web", "LatexArmbinder", "FuturisticArmbinder", "SeamlessLatexArmbinder", "FullBodyLeatherHarness", "UnderBedBondageCuffs", "TightJacket", "LatexSleevelessLeotard", "LatexBoxtieLeotard", "LatexButterflyLeotard", "PrisonLockdownSuit", "LeatherArmSplints", "TightJacketCrotch", "HighSecurityStraitJacket", "PantyhoseBody", "PantyhoseBodyOpen", "WoodenCuffs", "InflatableStraightLeotard", "StrictLeatherPetCrawler", "WrappedBlanket", "SteelCuffs", "FuturisticStraitjacket", "FurStraitJacket", "MedicalBedRestraints", "TransportJacket", "PlasticWrap", "Ribbons", "ThinLeatherStraps"],
        "ItemFeet": ["SpankingToys", "NylonRope", "HempRope", "LeatherBelt", "SturdyLeatherBelts", "Irish8Cuffs", "DuctTape", "LeatherAnkleCuffs", "FuturisticAnkleCuffs", "OrnateAnkleCuffs", "SpreaderMetal", "BallChain", "AnkleShackles", "Zipties", "Chains", "SpreaderDildoBar", "SpreaderVibratingDildoBar", "WoodenCuffs", "FloorShackles", "SteelAnkleCuffs", "PlasticWrap", "MedicalBedRestraints", "SuspensionCuffs"],
        "ItemLegs": ["SpankingToys", "NylonRope", "HempRope", "LeatherBelt", "SturdyLeatherBelts", "DuctTape", "LeatherLegCuffs", "FuturisticLegCuffs", "OrnateLegCuffs", "LegBinder", "HobbleSkirt", "SeamlessLegBinder", "SeamlessHobbleSkirt", "WoodenHorse", "Zipties", "Chains", "FrogtieStraps", "MermaidTail", "PlasticWrap", "MedicalBedRestraints", "Ribbons"],
        "ItemVulva": ["SpankingToys", "VibratingEgg", "VibratingWand", "VibratorRemote", "VibratingLatexPanties", "WandBelt", "PenisDildo", "ShockDildo", "VibratingDildo", "InflatableVibeDildo", "ClitoralStimulator", "ClitSuctionCup", "TapeStrips", "BenWaBalls", "HeavyWeightClamp", "FullLatexSuitWand", "ClitAndDildoVibratorbelt", "HempRopeBelt", "WiredEgg", "LoversVibrator", "LoversVibratorRemote", "DoubleEndDildo", "FuturisticVibrator"],
        "ItemButt": ["SpankingToys", "BlackButtPlug", "PenisPlug", "TailButtPlug", "HorsetailPlug", "HorsetailPlug1", "PuppyTailPlug", "PuppyTailPlug1", "SuccubusButtPlug", "SuccubusHeartButtPlug", "FoxTails", "RaccoonButtPlug", "RaccoonTailPlug", "AnalBeads", "AnalBeads2", "ButtPump", "VibratingButtplug", "InflVibeButtPlug", "AnalHook", "ButtPlugLock", "KittenTail1", "KittenTail2", "FoxTail1", "FoxTail2", "WolfTail1", "WolfTail2", "WolfTail3", "DemonPlug", "MouseTail1", "MouseTail2", "VibratingDildoPlug", "BunnyTailPlug1", "BunnyTailPlug2", "BunnyTailVibePlug", "EggVibePlugXXL", "ShockPlug", "Cowtail", "LockingVibePlug", "HollowButtPlug"],
        "ItemPelvis": ["SpankingToys", "StraponPanties", "LeatherChastityBelt", "SleekLeatherChastityBelt", "StuddedChastityBelt", "MetalChastityBelt", "PolishedChastityBelt", "FuturisticChastityBelt", "OrnateChastityBelt", "SteelChastityPanties", "HarnessPanties1", "HarnessPanties2", "LeatherStrapPanties1", "LoveChastityBelt", "LeatherCrop", "LeatherWhip", "HempRope", "DiaperHarness", "PelvisChainLeash", "FuturisticTrainingBelt", "SciFiPleasurePanties", "Ribbons", "SilkStraps", "BulkyDiaper", "PoofyDiaper"],
        "ItemTorso": ["SpankingToys", "NylonRopeHarness", "HempRopeHarness", "LeatherHarness", "LeatherStrapHarness", "AdultBabyHarness", "HarnessBra1", "HarnessBra2", "Corset2", "FuturisticHarness", "Corset3", "Corset4", "Corset5", "LeatherBreastBinder", "LatexCorset1", "LeatherStrapBra1", "CrotchChain", "StuddedHarness", "HeavyLatexCorset", "HighSecurityHarness", "Ribbons", "SilkStraps", "ThinLeatherStraps"],
        "ItemNipples": ["SpankingToys", "NippleClamp", "VibeNippleClamp", "VibratorRemote", "ChainClamp", "ScrewClamps", "ChainTassles", "HeartPasties", "TapedVibeEggs", "NippleSuctionCups", "NippleTape", "ChopStickNippleClamps", "KittyPasties", "Clothespins", "NippleWeightClamps", "BellClamps", "LactationPump", "ShockClamps", "PlateClamps", "StretchClovers"],
        "ItemBreast": ["SpankingToys", "MetalChastityBra", "PolishedChastityBra", "FuturisticBra", "FuturisticBra2", "OrnateChastityBra", "LeatherCrop", "LeatherWhip", "LeatherBreastBinder", "Ribbons"],
        "ItemNeck": ["SpankingToys", "LeatherCollar", "LeatherCollarBell", "LeatherCollarBow", "SlaveCollar", "ClubSlaveCollar", "ShockCollar", "AutoShockCollar", "ShockCollarRemote", "BatCollar", "PostureCollar", "SteelPostureCollar", "DogCollar", "SpikeCollar", "HighCollar", "FuturisticCollar", "LeatherChoker", "PetCollar", "MaidCollar", "BordelleCollar", "LoveLeatherCollar", "NobleCorsetCollar", "StrictPostureCollar", "HeartCollar", "LeatherCorsetCollar", "LatexPostureCollar", "HighSecurityCollar", "OrnateCollar", "SlenderSteelCollar", "HeartLinkChoker", "NeckRope", "ShinySteelCollar", "NylonCollar", "GothicCollar", "LatexCollar1", "LatexCollar2", "TechnoCollar"],
        "ItemHead": ["SpankingToys", "ClothBlindfold", "LeatherBlindfold", "InteractiveVisor", "LeatherSlimMask", "LeatherSlimMaskOpenMouth", "LeatherSlimMaskOpenEyes", "StuddedBlindfold", "KittyBlindfold", "DuctTape", "SmallBlindfold", "FullBlindfold", "LewdBlindfold", "LatexBlindfold", "FrilledSleepMask", "BlackoutLenses", "WebBlindfold", "RopeBlindfold", "SleepMask", "PrisonLockdownBlindfold", "Pantyhose", "Snorkel", "FuturisticMask", "PaddedBlindfold", "InteractiveVRHeadset", "Ribbons"],
        "ItemNose": ["SpankingToys", "NoseHook", "NoseRing", "DuctTape", "NosePlugs", "BarbelPiercing", "PigNoseHook", "PigNose"],
        "ItemHood": ["SpankingToys", "LeatherHoodSealed", "PolishedSteelHood", "InflatedBallHood", "OldGasMask", "PumpkinHead", "SackHood", "LeatherHoodSensDep", "LatexHoodOpenHair", "LeatherHood", "LeatherHoodOpenEyes", "GasMask", "DogHood", "FoxyMask", "LeatherHoodOpenMouth", "CanvasHood", "Pantyhose", "GP9GasMask", "OpenFaceHood", "GwenHood", "BlanketHood", "KirugumiMask", "PonyHood", "TechnoHelmet1"],
        "ItemEars": ["SpankingToys", "LightDutyEarPlugs", "HeavyDutyEarPlugs", "HeadphoneEarPlugs", "BluetoothEarbuds", "Headphones", "FuturisticEarphones"],
        "ItemBoots": ["SpankingToys", "BalletHeels", "BalletWedges", "ToeCuffs", "LeatherToeCuffs", "ToeTie", "ThighHighLatexHeels", "LockingHeels", "LockingHeels2", "LockingShoes1", "LockingShoes2", "FuturisticHeels", "LockingBoots1", "LeatherFootMitts1", "ToeTape", "Zipties", "FuturisticHeels2", "PonyBoots", "HighThighBoots"],
        "ItemHands": ["SpankingToys", "PaddedMittens", "PawMittens", "LeatherMittens", "FuturisticMittens", "PaddedLeatherMittens", "PolishedMittens", "DuctTape", "SpankingToysCrop", "SpankingToysFlogger", "SpankingToysCane", "SpankingToysHeartCrop", "SpankingToysPaddle", "SpankingToysWhipPaddle", "SpankingToysWhip", "SpankingToysCattleProd", "SpankingToysTennisRacket", "SpankingToysGavel", "SpankingToysFeather", "SpankingToysFeatherDuster", "SpankingToysIceCube", "SpankingToysWartenbergWheel", "SpankingToysVibratingWand", "SpankingToysSmallVibratingWand", "SpankingToysCandleWax", "SpankingToysLargeDildo", "SpankingToysPetToy", "SpankingToysVibrator", "SpankingToysBelt", "SpankingToysHairbrush", "SpankingToysSmallDildo", "SpankingToysElectricToothbrush", "SpankingToysToothbrush", "SpankingToysShockWand", "SpankingToysLotion", "SpankingToysRuler", "SpankingToysSword", "SpankingToysRopeCoilLong", "SpankingToysRopeCoilShort", "SpankingToysVibeRemote", "KeyProp", "SpankingToysLongDuster", "SpankingToysShockRemote", "SpankingToysTowel", "SpankingToysBallgag", "SpankingToysLongSock", "SpankingToysBaguette", "SpankingToysPanties", "SpankingToysTapeRoll", "SpankingToysSpatula", "SpankingToysBroom", "SpankingToysPhone1", "SpankingToysPhone2", "HoofMittens"],
        "Cloth": ["CollegeOutfit1", "StudentOutfit1", "StudentOutfit2", "StudentOutfit3", "BabydollDress1", "TeacherOutfit1", "ChineseDress1", "ChineseDress2", "TShirt1", "TennisShirt1", "Sweater1", "AdultBabyDress1", "AdultBabyDress2", "AdultBabyDress3", "AdultBabyDress4", "NurseUniform", "Robe1", "SuspenderTop1", "LeatherCorsetTop1", "FlowerDress", "Dress2", "LaceBabydoll", "SleevelessTop", "DressFur", "BodyTowel1", "Yukata1", "SteampunkCorsetTop1", "BondageDress1", "BondageDress2", "ShoulderlessTop", "Dress3", "ComfyTop", "WeddingDress1", "WeddingDress2", "BridesmaidDress1", "Gown1", "Gown2Top", "Gown3", "AdmiralTop", "VirginKiller1", "ReverseBunnySuit", "LeatherCropTop", "CorsetShirt", "BondageBustier1", "BondageBustier2", "LeatherBolero", "MaidOutfit1", "MaidOutfit2", "TShirt2", "MistressTop", "MaidApron1", "MaidApron2", "Bodice1", "SummerDress", "GrandMage", "Blouse1", "LatexTop", "LatexLacedSuit", "FurCoat"],
        "ClothAccessory": ["StudentOutfit3Scarf", "StudentOutfit3Bow1", "StudentOutfit3Bow2", "StudentOutfit3Bow3", "Bouquet", "BunnyCollarCuffs", "Camera1", "Cape", "FrillyApron", "LeatherStraps", "FurBolero", "FacePaint", "Bib"],
        "Necklace": ["Necklace1", "Necklace2", "Necklace3", "Necklace4", "NecklaceLock", "NecklaceKey", "IDCard", "BlackHeart", "ElegantHeartNecklace", "Bandana", "NecklaceBallGag", "FurScarf", "FlowerGarland"],
        "Suit": ["Catsuit", "SeamlessCatsuit", "PilotSuit", "SeethroughSuit", "SeethroughSuitZip", "ReverseBunnySuit", "Blouse1"],
        "ClothLower": ["Skirt1", "Skirt2", "Skirt3", "TennisSkirt1", "Jeans1", "Shorts1", "Pajama1", "Waspie1", "Waspie2", "Waspie3", "LatexPants1", "LatexSkirt1", "LatexSkirt2", "ClothSkirt1", "Jeans2", "ChineseSkirt1", "Gown2Skirt", "AdmiralSkirt", "JeanSkirt", "PencilSkirt", "JeansShorts", "Leggings1", "Leggings2", "PleatedSkirt", "MistressBottom", "Tutu", "HulaSkirt", "LongSkirt1", "ShortPencilSkirt", "HaremPants", "ShortPlaidSkirt"],
        "SuitLower": ["Catsuit", "SeamlessCatsuit", "PilotSuit", "SeethroughSuit", "SeethroughSuitZip", "ReverseBunnySuit", "Stockings1", "Stockings2", "Stockings3", "Stockings4", "Pantyhose1", "Pantyhose2"],
        "Bra": ["Bra1", "Bra2", "Bra7", "Bra8", "Bra9", "Bandeau1", "Bustier1", "Bikini1", "SexyBikini1", "SexyBikini2", "SexyBikini3", "Swimsuit1", "Swimsuit2", "BunnySuit", "FrameBra1", "FrameBra2", "BondageBra1", "LatexBra1", "HarnessBra1", "HarnessBra2", "CuteBikini1", "CorsetBikini1", "OuvertPerl1", "Sarashi1", "KittyBra1", "FishnetBikini1", "SexyBeachBra1", "SexyBikiniBra1", "StarHarnessBra", "HeartTop", "ChineseBra1", "LeatherStrapBra1", "Swimsuit3", "ClamShell", "CowPrintedBra", "StuddedHarness", "LeatherBreastBinder", "Camisole", "Ribbons", "SilkStraps", "FullLatexBra", "HaremBra", "FlowerBra", "Bra10", "CoconutBra"],
        "Corset": ["Corset1", "Corset2", "Corset3", "Corset4", "Corset5", "LatexCorset1", "LeatherCorsetTop1", "Corset6"],
        "Panties": ["Panties1", "Panties7", "Panties8", "Panties11", "Panties12", "Panties13", "Panties14", "Panties15", "Bikini1", "Diapers1", "Diapers2", "Diapers3", "Panties16", "MaidPanties1", "LatexPanties1", "WrapPanties1", "CrotchPanties1", "StringPanties1", "StringPasty1", "ZipPanties1", "HarnessPanties1", "HarnessPanties2", "KittyPanties1", "PearlPanties1", "SunstripePanties1", "SexyBeachPanties1", "ChinesePanties1", "LeatherStrapPanties1", "CowPrintedPanties", "LatexPanties2", "PilotPanties", "Diapers4", "BulkyDiaper", "PoofyDiaper", "LatexCrotchlessPanties", "RedBowPanties", "SilkStraps", "FlowerPanties", "FloralPanties2"],
        "Socks": ["Stockings1", "Stockings2", "Stockings3", "Stockings4", "Pantyhose1", "Socks6", "SocksFur", "SocksStriped1", "LatexSocks1", "FootlessSocks1", "ReverseBunnySuit", "LeatherSocks1", "Pantyhose2", "CowPrintedSocks"],
        "RightAnklet": ["BandAnklet", "Ribbon", "Ribbon1"],
        "LeftAnklet": ["BandAnklet", "Ribbon", "Ribbon1"],
        "Shoes": ["Shoes1", "Shoes2", "Shoes4", "Sneakers1", "Sneakers2", "Heels1", "Heels2", "Boots1", "Sandals", "SandalsRS", "PawBoots", "WoollyBootsTall", "ThighHighLatexHeels", "Heels3", "BarefootSandals1", "LatexAnkleShoes", "Flippers", "FuturisticHeels2", "MistressBoots", "PonyBoots", "DeluxeBoots", "AnkleStrapShoes", "Shoes5"],
        "Hat": ["NurseCap", "Santa1", "CaptainHat1", "BunnySuccubus2", "WitchHat1", "PirateBandana1", "PoliceWomanHat", "HeadTowel1", "CollegeDunce", "Tiara1", "Bonnet1", "Bonnet2", "Crown1", "Crown2", "Crown3", "Crown4", "Crown5", "SmallHat1", "Veil1", "Veil2", "BakerBoyHat", "ReindeerBand", "MaidHairband1", "Bandana", "FurHeadband", "FacePaint", "RoseCrown", "FlowerCrown", "PoppyCrown"],
        "HairAccessory3": ["Ribbons1", "Ribbons2", "Ribbons3", "Ribbons4", "GiantBow1", "HairFlower1", "WeddingVeil1", "HairFeathers1", "Halo"],
        "HairAccessory1": ["Ears1", "Ears2", "PonyEars1", "Ribbons1", "Ribbons2", "Ribbons3", "Ribbons4", "GiantBow1", "BunnyEars1", "BunnyEars2", "PuppyEars1", "SuccubusHorns", "Horns", "Horns2", "Horns3", "HairFlower1", "FoxEars1", "BatWings", "KittenEars1", "KittenEars2", "WolfEars1", "WolfEars2", "FoxEars2", "FoxEars3", "PuppyEars2", "RaccoonEars1", "WeddingVeil1", "HairFeathers1", "MouseEars1", "MouseEars2", "ElfEars", "CowHorns", "Halo", "Antennae"],
        "HairAccessory2": ["Ears1", "Ears2", "PonyEars1", "BunnyEars1", "BunnyEars2", "PuppyEars1", "SuccubusHorns", "Horns", "Horns2", "Horns3", "FoxEars1", "BatWings", "KittenEars1", "KittenEars2", "WolfEars1", "WolfEars2", "FoxEars2", "FoxEars3", "PuppyEars2", "RaccoonEars1", "MouseEars1", "MouseEars2", "ElfEars", "CowHorns", "Antennae"],
        "Gloves": ["Gloves2", "Gloves3", "FingerlessGloves", "GlovesFur", "Catsuit", "SeethroughSuit", "CowPrintedGloves", "LatexElbowGloves", "MistressGloves"],
        "Glasses": ["SunGlasses1", "SunGlasses2", "SunGlassesClear", "EyePatch1", "CatGlasses", "VGlasses"],
        "Mask": ["VenetianMask", "DominoMask", "ButterflyMask", "ShinobiMask", "FoxMask", "BunnyMask1", "BunnyMask2", "BunnyMask3", "KittyMask1", "KittyMask2", "KittyMask3", "LaceMask1", "LaceMask2", "FuturisticVisor", "OpenFaceHood", "FaceVeil", "FacePaint"],
        "TailStraps": ["TailStrap", "HorseTailStrap", "HorseTailStrap1", "FoxTailsStrap", "PuppyTailStrap", "SuccubusTailStrap", "SuccubusHeartTailStrap", "RaccoonStrap", "RaccoonTailStrap", "PuppyTailStrap1", "KittenTailStrap1", "KittenTailStrap2", "FoxTailStrap1", "FoxTailStrap2", "WolfTailStrap1", "WolfTailStrap2", "WolfTailStrap3", "DemonPlug", "MouseTailStrap1", "MouseTailStrap2", "CowtailStrap", "BunnyTailStrap", "DragonTailStrap1"],
        "Wings": ["SuccubusFeather", "SuccubusWings", "AngelFeather", "DevilWings", "FallenAngelWings", "AngelWings", "BatWings", "FairyWings", "SteampunkWings"],
        "Height": ["H0950", "H0960", "H0970", "H0980", "H0990", "H1000", "H0900", "H0910", "H0920", "H0930", "H0940"],
        "HairBack": ["HairBack23", "HairBack24"],
        "Eyes2": ["Eyes1", "Eyes2", "Eyes3", "Eyes4", "Eyes5", "Eyes6", "Eyes7", "Eyes8", "Eyes9", "Eyes10", "Eyes11", "Eyes12", "Eyes13"],
        "Mouth": ["Regular", "Discreet"],
        "ItemVulvaPiercings": ["StraightClitPiercing", "RoundClitPiercing", "WeightedClitPiercing", "BarbellClitPiercing", "ChastityClitPiercing", "ChastityClitShield", "HighSecurityVulvaShield", "JewelClitPiercing", "AdornedClitPiercing", "VibeHeartClitPiercing", "BellClitPiercing", "TapedClitEgg", "ClitRing"],
        "ItemNipplesPiercings": ["StraightPiercing", "RoundPiercing", "NippleAccessory1", "NippleAccessory2", "NippleAccessory3", "BarbellPiercing", "NippleChastityPiercing1", "NippleChastityPiercing2", "VibeHeartPiercings", "BellPiercing", "CrossedStraightPiercing", "NecklacePiercingChain"],
        "ItemNeckAccessories": ["CustomCollarTag", "CollarBell", "CollarBow", "CollarShockUnit", "CollarAutoShockUnit", "ShockCollarRemote", "CollarNameTag", "CollarNameTagOval", "CollarNameTagPet", "CollarNameTagLover", "CollarNameTagLivestock", "CollarMoon", "CollarSun", "CollarLapis", "CollarPentagram", "CollarFlower", "CollarRose", "CollarCowBell", "CollarPupBone", "ElectronicTag", "Key"],
        "ItemNeckRestraints": ["CollarChainLong", "CollarChainShort", "CollarLeash", "CollarLeashTaken", "ChainLeash", "ChainLeashTaken", "CollarChainMedium", "Post", "CollarRopeLong", "CollarRopeShort", "CollarRopeMedium"],
        "ItemMouth2": ["ClothGag", "WiffleGag", "HarnessBallGag", "HarnessPanelGag", "RingGag", "DuctTape", "HarnessPacifierGag", "DusterGag", "CupholderGag", "KittyGag", "KittenHarnessPanelGag", "CarrotGag", "MuzzleGag", "PantiesMask", "DildoGag", "BoneGag", "HarnessBallGag1", "PumpkinGag", "LipGag", "SpiderGag", "ChloroformCloth", "ScarfGag", "LewdGag", "LeatherCorsetCollar", "LatexPostureCollar", "BitGag", "XLBoneGag", "BallGag", "BallGagMask", "SteelMuzzleGag", "StitchedMuzzleGag", "LatexBallMuzzleGag", "GasMaskGag", "WebGag", "RopeGag", "MedicalMask", "RegressedMilk", "PrisonLockdownGag", "ShoeGag", "FuturisticMuzzle", "FoxyHarnessPanelGag", "CageMuzzle", "HarnessPonyBits", "PlasticWrap", "Ribbons", "PaciGag"],
        "ItemMouth3": ["ClothGag", "WiffleGag", "HarnessBallGag", "HarnessPanelGag", "RingGag", "DuctTape", "HarnessPacifierGag", "DusterGag", "CupholderGag", "KittyGag", "KittenHarnessPanelGag", "CarrotGag", "MuzzleGag", "PantiesMask", "DildoGag", "BoneGag", "HarnessBallGag1", "PumpkinGag", "LipGag", "SpiderGag", "ChloroformCloth", "ScarfGag", "LewdGag", "LeatherCorsetCollar", "LatexPostureCollar", "BitGag", "XLBoneGag", "BallGag", "BallGagMask", "SteelMuzzleGag", "FuturisticMuzzle", "StitchedMuzzleGag", "LatexBallMuzzleGag", "GasMaskGag", "WebGag", "RopeGag", "MedicalMask", "RegressedMilk", "PrisonLockdownGag", "ShoeGag", "CageMuzzle", "FoxyHarnessPanelGag", "HarnessPonyBits", "PlasticWrap", "Ribbons", "PaciGag"],
        "ItemDevices": ["WoodenBox", "SmallWoodenBox", "MilkCan", "WaterCell", "Cage", "LowCage", "SaddleStand", "BurlapSack", "InflatableBodyBag", "BondageBench", "LittleMonster", "Familiar", "Coffin", "CryoCapsule", "OneBarPrison", "TheDisplayFrame", "Sybian", "StrapOnSmooth", "StrapOnStuds", "DisplayCase", "SmallDisplayCase", "WoodenBoxOpenHead", "SmallWoodenBoxOpenHead", "WoodenStocks", "Vacbed", "Crib", "Bed", "X-Cross", "ChangingTable", "Locker", "SmallLocker", "ConcealingCloak", "TransportWoodenBox", "VacCube", "VacbedClear", "FurBlanketWrap", "BBQ", "WetFloor", "FuturisticCrate", "DollBox", "VacBedDeluxe", "Kennel", "PetBed", "PetBowl", "Pole", "Cushion", "FuckMachine", "Net"],
        "ItemAddon": ["Covers", "BedRopes", "BedStraps", "BedTape", "BedChains", "CeilingRope", "CeilingChain"],
        "Garters": ["GarterBelt", "GarterBelt2"],
        "Bracelet": ["BowBand", "KinkBracelet", "LesBand", "SpikeBands", "Band1", "LaceBands"],
        "Hands": ["Default"]
    },
    "ArousalSettings": {
        "Active": "Hybrid",
        "Visible": "Access",
        "ShowOtherMeter": true,
        "DisableAdvancedVibes": false,
        "AffectExpression": true,
        "AffectStutter": "All",
        "VFX": "VFXAnimatedTemp",
        "VFXVibrator": "VFXAnimated",
        "Progress": 0,
        "ProgressTimer": 0,
        "VibratorLevel": 0,
        "ChangeTime": 1635101911571,
        "Activity": [{
            "Name": "Kiss",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "GagKiss",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "FrenchKiss",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "PoliteKiss",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "GaggedKiss",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Lick",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Suck",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Nibble",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Bite",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Whisper",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Tickle",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Caress",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Pet",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Cuddle",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Rub",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "TakeCare",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MassageHands",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MassageFeet",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Sit",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "RestHead",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Step",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Grope",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Pinch",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Spank",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Slap",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Pull",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Choke",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "HandGag",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Wiggle",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "StruggleArms",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "StruggleLegs",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "Nod",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGag",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGagGiggle",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGagTalk",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGagWhimper",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGagAngry",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MoanGagGroan",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MasturbateTongue",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MasturbateHand",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MasturbateFist",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MasturbateFoot",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "MasturbateItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "PenetrateSlow",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "PenetrateFast",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "SpankItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "TickleItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "RubItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "RollItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "PourItem",
            "Self": 2,
            "Other": 2
        }, {
            "Name": "ShockItem",
            "Self": 2,
            "Other": 2
        }],
        "Zone": [{
            "Name": "ItemFeet",
            "Factor": 2
        }, {
            "Name": "ItemLegs",
            "Factor": 2
        }, {
            "Name": "ItemVulva",
            "Factor": 2,
            "Orgasm": true
        }, {
            "Name": "ItemButt",
            "Factor": 2
        }, {
            "Name": "ItemPelvis",
            "Factor": 2
        }, {
            "Name": "ItemTorso",
            "Factor": 2
        }, {
            "Name": "ItemNipples",
            "Factor": 2
        }, {
            "Name": "ItemBreast",
            "Factor": 2
        }, {
            "Name": "ItemArms",
            "Factor": 2
        }, {
            "Name": "ItemHands",
            "Factor": 2
        }, {
            "Name": "ItemNeck",
            "Factor": 2
        }, {
            "Name": "ItemMouth",
            "Factor": 2
        }, {
            "Name": "ItemHead",
            "Factor": 2
        }, {
            "Name": "ItemNose",
            "Factor": 2
        }, {
            "Name": "ItemHood",
            "Factor": 2
        }, {
            "Name": "ItemEars",
            "Factor": 2
        }, {
            "Name": "ItemBoots",
            "Factor": 2
        }],
        "Fetish": [{
            "Name": "Bondage",
            "Factor": 2
        }, {
            "Name": "Gagged",
            "Factor": 2
        }, {
            "Name": "Blindness",
            "Factor": 2
        }, {
            "Name": "Deafness",
            "Factor": 2
        }, {
            "Name": "Chastity",
            "Factor": 2
        }, {
            "Name": "Exhibitionist",
            "Factor": 2
        }, {
            "Name": "Masochism",
            "Factor": 2
        }, {
            "Name": "Sadism",
            "Factor": 2
        }, {
            "Name": "Rope",
            "Factor": 2
        }, {
            "Name": "Latex",
            "Factor": 2
        }, {
            "Name": "Leather",
            "Factor": 2
        }, {
            "Name": "Metal",
            "Factor": 2
        }, {
            "Name": "Tape",
            "Factor": 2
        }, {
            "Name": "Nylon",
            "Factor": 2
        }, {
            "Name": "Lingerie",
            "Factor": 2
        }, {
            "Name": "Pet",
            "Factor": 2
        }, {
            "Name": "Pony",
            "Factor": 2
        }, {
            "Name": "ABDL",
            "Factor": 2
        }],
        "OrgasmTimer": 0
    },
    "ChatSettings": {
        "FontSize": "Medium",
        "DisplayTimestamps": true,
        "ColorNames": true,
        "ColorActions": true,
        "ColorEmotes": true,
        "ShowActivities": true,
        "ShowAutomaticMessages": false,
        "WhiteSpace": "Preserve",
        "ColorActivities": true,
        "ShrinkNonDialogue": false,
        "MuStylePoses": false,
        "ShowChatHelp": true,
        "ShowBeepChat": true
    },
    "VisualSettings": {
        "ForceFullHeight": false,
        "UseCharacterInPreviews": false
    },
    "AudioSettings": {
        "Volume": 1,
        "PlayBeeps": false,
        "PlayItem": false,
        "PlayItemPlayerOnly": false,
        "Notifications": false
    },
    "ControllerSettings": {
        "ControllerSensitivity": 5,
        "ControllerDeadZone": 0.01,
        "ControllerA": 1,
        "ControllerB": 0,
        "ControllerX": 3,
        "ControllerY": 2,
        "ControllerStickUpDown": 1,
        "ControllerStickLeftRight": 0,
        "ControllerStickRight": 1,
        "ControllerStickDown": 1,
        "ControllerDPadUp": 4,
        "ControllerDPadDown": 5,
        "ControllerDPadLeft": 6,
        "ControllerDPadRight": 7,
        "ControllerActive": false
    },
    "GameplaySettings": {
        "SensDepChatLog": "Normal",
        "BlindDisableExamine": false,
        "DisableAutoRemoveLogin": false,
        "ImmersionLockSetting": false,
        "EnableSafeword": true,
        "DisableAutoMaid": false,
        "OfflineLockedRestrained": false
    },
    "ImmersionSettings": {
        "BlockGaggedOOC": false,
        "StimulationEvents": true,
        "ReturnToChatRoom": false,
        "ReturnToChatRoomAdmin": false,
        "SenseDepMessages": false,
        "ChatRoomMuffle": false,
        "BlindAdjacent": false
    },
    "RestrictionSettings": {
        "BypassStruggle": false,
        "SlowImmunity": false,
        "BypassNPCPunishments": false
    },
    "OnlineSettings": {
        "AutoBanBlackList": false,
        "AutoBanGhostList": true,
        "DisableAnimations": false,
        "SearchShowsFullRooms": true,
        "SearchFriendsFirst": false,
        "EnableAfkTimer": true,
        "EnableWardrobeIcon": false
    },
    "OnlineSharedSettings": {
        "AllowFullWardrobeAccess": false,
        "BlockBodyCosplay": false,
        "AllowPlayerLeashing": true,
        "DisablePickingLocksOnSelf": false,
        "GameVersion": "R73",
        "ItemsAffectExpressions": true
    },
    "GraphicsSettings": {
        "Font": "Arial",
        "InvertRoom": true,
        "StimulationFlash": false,
        "DoBlindFlash": false,
        "AnimationQuality": 100,
        "SmoothZoom": true,
        "CenterChatrooms": true
    },
    "NotificationSettings": {
        "Beeps": {
            "AlertType": 2,
            "Audio": 0
        },
        "ChatMessage": {
            "AlertType": 0,
            "Audio": 0,
            "Normal": true,
            "Whisper": true,
            "Activity": false
        },
        "ChatJoin": {
            "AlertType": 0,
            "Audio": 0,
            "Owner": false,
            "Lovers": false,
            "Friendlist": false,
            "Subs": false
        },
        "Disconnect": {
            "AlertType": 0,
            "Audio": 0
        },
        "Larp": {
            "AlertType": 0,
            "Audio": 0
        },
        "Test": {
            "AlertType": 1,
            "Audio": 0
        }
    },
    "AssetFamily": "Female3DCG",
    "Appearance": [{
        "Group": "Cloth",
        "Name": "StudentOutfit1"
    }, {
        "Group": "Bra",
        "Name": "Bra1"
    }, {
        "Group": "Panties",
        "Name": "Panties1"
    }, {
        "Group": "Socks",
        "Name": "Socks0"
    }, {
        "Group": "Shoes",
        "Name": "Shoes1"
    }, {
        "Group": "Height",
        "Name": "H0950"
    }, {
        "Group": "BodyUpper",
        "Name": "Small",
        "Color": "White"
    }, {
        "Group": "BodyLower",
        "Name": "Small"
    }, {
        "Group": "HairFront",
        "Name": "HairFront1",
        "Color": "#6a3628"
    }, {
        "Group": "HairBack",
        "Name": "HairNone"
    }, {
        "Group": "Eyes",
        "Name": "Eyes1"
    }, {
        "Group": "Eyes2",
        "Name": "Eyes1"
    }, {
        "Group": "Mouth",
        "Name": "Regular"
    }, {
        "Group": "Nipples",
        "Name": "Nipples1"
    }, {
        "Group": "Pussy",
        "Name": "PussyLight1"
    }, {
        "Group": "Blush",
        "Name": "Blush"
    }, {
        "Group": "Fluids",
        "Name": "Fluids"
    }, {
        "Group": "Emoticon",
        "Name": "Emoticon"
    }, {
        "Group": "Eyebrows",
        "Name": "Eyebrows1"
    }, {
        "Group": "Hands",
        "Name": "Default"
    }, {
        "Group": "Head",
        "Name": "Default"
        }],
    Description: "Ben Sempai please leave from the heroku this platform for only code testing. \nFor production exist others hosting providers \"OVH\" or \"Hetzner\" and more\nhttps://github.com/DoberBit/bc_shutdown",
}
