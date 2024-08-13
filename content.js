//@ts-check
const url = new URL(window.location.href);
if(!url.searchParams.has("COUNTRY")){
    url.searchParams.append("COUNTRY", "US");
    window.location.href = url.toString();
}
function oprSetup() {
    window.opr = {
        authPrivate: {
            onSessionStateChanged: {},
            API_VERSION: {
                V3_4_0: "V3_4_0",
            },
            AuthState: {
                AUTH_ERROR: "AuthError",
                FINISHING: "Finishing",
                IN_PROGRESS: "InProgress",
                INACTIVE: "Inactive",
                STARTING: "Starting",
                UNSET: "Unset",
            },
        },
        browserSidebarPrivate: {
            onItemRemoved: {},
            onItemAdded: {},
            onItemNotificatationVisibilityChanged: {},
            onItemStateChanged: {},
            onItemExpanded: {},
            onItemPanelVisibilityChanged: {},
            onItemVisibilityChanged: {},
            onItemMoved: {},
            BrowserSidebarItemType: {
                DISCORD: "DISCORD",
                INSTAGRAM: "INSTAGRAM",
                NEWS: "NEWS",
                TOUCH: "TOUCH",
                VKONTAKTE: "VKONTAKTE",
            },
            NotificationVisibility: {
                HIDE: "HIDE",
                SHOW: "SHOW",
                SHOW_AND_HIDE_AUTOMATICALLY_ON_ACTION: "SHOW_AND_HIDE_AUTOMATICALLY_ON_ACTION",
            },
        },
        cryptoWalletPrivate: {
            onStateChanged: {},
            onReset: {},
            onTransactionRequested: {},
            onSigningRequested: {},
            Action: {
                CONNECTED: "CONNECTED",
                PAIRING: "PAIRING",
                PAYMENT: "PAYMENT",
                SIGNATURE: "SIGNATURE",
            },
            State: {
                CANCEL: "CANCEL",
                CONFIRM: "CONFIRM",
                FAILED: "FAILED",
                INIT: "INIT",
                PENDING: "PENDING",
                READY: "READY",
                SUCCESS: "SUCCESS",
            },
            ThreatWarningType: {
                DAPP_CHECK: "DAPP_CHECK",
                SEED_PHRASE_PHISHING_CHECK: "SEED_PHRASE_PHISHING_CHECK",
            },
            ThreatWarningUserDecision: {
                CLOSE: "CLOSE",
                SEE_DETAILS: "SEE_DETAILS",
            },
            TokenType: {
                COLLECTIBLE: "COLLECTIBLE",
                CRYPTO_CURRENCY: "CRYPTO_CURRENCY",
                TOKEN: "TOKEN",
            },
        },
        defaultBrowserPrivate: {
            onDefaultBrowserChanged: {},
        },
        feedbackPopupPrivate: {
            AnchorId: {
                AI_HIGHLIGHT_POPUP: "AI_HIGHLIGHT_POPUP",
                AI_PROMPTS_POPUP: "AI_PROMPTS_POPUP",
                BABE: "BABE",
                BRIEFING: "BRIEFING",
                CASHBACK_ASSISTANT_POPUP: "CASHBACK_ASSISTANT_POPUP",
                EASY_SETUP: "EASY_SETUP",
                EXTENSION_POPUP: "EXTENSION_POPUP",
                PAGE: "PAGE",
                PINBOARD_POPUP: "PINBOARD_POPUP",
                SIDEBAR: "SIDEBAR",
                VPN: "VPN",
                WEB3_SELECTOR: "WEB3_SELECTOR",
            },
            Arrow: {
                BOTTOM_CENTER: "BOTTOM_CENTER",
                BOTTOM_LEFT: "BOTTOM_LEFT",
                BOTTOM_RIGHT: "BOTTOM_RIGHT",
                FLOAT: "FLOAT",
                LEFT_BOTTOM: "LEFT_BOTTOM",
                LEFT_CENTER: "LEFT_CENTER",
                LEFT_TOP: "LEFT_TOP",
                RIGHT_BOTTOM: "RIGHT_BOTTOM",
                RIGHT_CENTER: "RIGHT_CENTER",
                RIGHT_TOP: "RIGHT_TOP",
                TOP_CENTER: "TOP_CENTER",
                TOP_LEFT: "TOP_LEFT",
                TOP_RIGHT: "TOP_RIGHT",
                UNDER_RECT: "UNDER_RECT",
            },
        },
        operaBrowserPrivate: {
            async getChars(cb) {
                const val = undefined;
                cb(val);
                return val;
            },
            async getEdition(cb) {
                const val = undefined;
                cb(val);
                return val;
            },
            async getUtmCampaign(cb) {
                cb("forums_banner");
            },
            async getProduct(cb) {
                cb("Opera GX");
                return "Opera GX";
            },
            async getVersion(cb) {
                cb("112.0.5197.60");
                return "112.0.5197.60";
            },
        },
        operaIdentityPrivate: {
            onScopesChange: {},
            onLoginStateChange: {},
            API_VERSION: {
                V1_6_1: "V1_6_1",
            },
            CheckUserAccessStatus: {
                AUTH_TOKEN_COULD_NOT_BE_OBTAINED: "AUTH_TOKEN_COULD_NOT_BE_OBTAINED",
                INVALID_AUTHORIZATION_TOKEN: "INVALID_AUTHORIZATION_TOKEN",
                INVALID_PAYLOAD_TOKEN: "INVALID_PAYLOAD_TOKEN",
                INVALID_SESSION_STATE: "INVALID_SESSION_STATE",
                OK: "OK",
                UNKNOWN: "UNKNOWN",
                USER_NOT_LOGGED_IN: "USER_NOT_LOGGED_IN",
            },
            TokenError: {
                INVALID_CLIENT: "INVALID_CLIENT",
                INVALID_GRANT: "INVALID_GRANT",
                INVALID_REQUEST: "INVALID_REQUEST",
                INVALID_SCOPE: "INVALID_SCOPE",
                OK: "OK",
                SCOPE_ACCESS_RESTRICTED: "SCOPE_ACCESS_RESTRICTED",
                SCOPE_NOT_DEFINED_IN_EXTENSION_MANIFEST: "SCOPE_NOT_DEFINED_IN_EXTENSION_MANIFEST",
                UNKNOWN: "UNKNOWN",
                USER_NOT_LOGGED_IN: "USER_NOT_LOGGED_IN",
            },
        },
        palette: {
            onPaletteChanged: {
                addListener() { },
            },
            MetaColor: {
                ACCENT_DARK: "ACCENT_DARK",
                ACCENT_LIGHT: "ACCENT_LIGHT",
                SECONDARY_DARK: "SECONDARY_DARK",
                SECONDARY_LIGHT: "SECONDARY_LIGHT",
            },
            getPalette(cb) {
                cb([
                    "active_blue_dark",
                    "blue",
                    "cashback_green",
                    "cashback_green_l_60",
                    "cashback_yellow",
                    "cashback_yellow_l_60",
                    "component_handle_0",
                    "component_handle_1",
                    "component_handle_2",
                    "component_handle_3",
                    "component_handle_4",
                    "component_handle_5",
                    "component_handle_6",
                    "component_handle_7",
                    "default_light_blue",
                    "discord_blue",
                    "green",
                    "gx_accent",
                    "gx_accent_l_100",
                    "gx_accent_l_120",
                    "gx_accent_l_140",
                    "gx_accent_l_16",
                    "gx_accent_l_160",
                    "gx_accent_l_24",
                    "gx_accent_l_30",
                    "gx_accent_l_60",
                    "gx_accent_l_8",
                    "gx_accent_l_80",
                    "gx_gray",
                    "gx_gray_10",
                    "gx_gray_16",
                    "gx_gray_20",
                    "gx_gray_30",
                    "gx_gray_40",
                    "gx_gray_50",
                    "gx_gray_60",
                    "gx_gray_70",
                    "gx_gray_80",
                    "gx_gray_90",
                    "gx_no_00",
                    "gx_no_04",
                    "gx_no_08",
                    "gx_no_100",
                    "gx_no_12",
                    "gx_no_16",
                    "gx_no_20",
                    "gx_no_24",
                    "gx_no_32",
                    "gx_no_40",
                    "gx_no_59",
                    "gx_no_77",
                    "gx_no_80",
                    "gx_no_88",
                    "gx_no_90",
                    "gx_no_92",
                    "gx_no_96",
                    "gx_no_98",
                    "gx_secondary_base",
                    "gx_warning_red",
                    "gx_warning_red_l_120",
                    "gx_warning_red_l_140",
                    "gx_warning_yellow",
                    "gx_warning_yellow_l_120",
                    "gx_warning_yellow_l_140",
                    "light_blue",
                    "light_grey",
                    "picture_in_picture_red",
                    "pink",
                    "purple",
                    "star_dust",
                    "teal",
                    "undefined",
                    "win_red",
                    "win_red_muted",
                    "gx_light_100",
                    "gx_light_98",
                    "gx_light_96",
                    "gx_light_92",
                    "gx_light_90",
                    "gx_light_88",
                    "gx_light_80",
                    "gx_light_40",
                    "gx_light_24",
                    "gx_light_00",
                ]);
            },
            async getColorHSL(name, cb) {
                const predefined = {
                    "active_blue_dark": {
                        "alpha": 1,
                        "h": 199.42857027053833,
                        "l": 0.7941176891326904,
                        "s": 1
                    },
                    "blue": {
                        "alpha": 1,
                        "h": 225.7692575454712,
                        "l": 0.30588236451148987,
                        "s": 1
                    },
                    "cashback_green": {
                        "alpha": 1,
                        "h": 143.07692527770996,
                        "l": 0.529411792755127,
                        "s": 0.7583333849906921
                    },
                    "cashback_green_l_60": {
                        "alpha": 1,
                        "h": 142.90910482406616,
                        "l": 0.3176470696926117,
                        "s": 0.6790123581886292
                    },
                    "cashback_yellow": {
                        "alpha": 1,
                        "h": 47.764713764190674,
                        "l": 0.5,
                        "s": 1
                    },
                    "cashback_yellow_l_60": {
                        "alpha": 1,
                        "h": 47.843120098114014,
                        "l": 0.30000001192092896,
                        "s": 1
                    },
                    "component_handle_0": {
                        "alpha": 1,
                        "h": 252.7027130126953,
                        "l": 0.5647059082984924,
                        "s": 1
                    },
                    "component_handle_1": {
                        "alpha": 1,
                        "h": 352.79998540878296,
                        "l": 0.5921568870544434,
                        "s": 0.7211538553237915
                    },
                    "component_handle_2": {
                        "alpha": 1,
                        "h": 24.146339893341064,
                        "l": 0.615686297416687,
                        "s": 0.8367347121238708
                    },
                    "component_handle_3": {
                        "alpha": 1,
                        "h": 39.836061000823975,
                        "l": 0.6941176652908325,
                        "s": 0.7820513248443604
                    },
                    "component_handle_4": {
                        "alpha": 1,
                        "h": 155.1923131942749,
                        "l": 0.5490196347236633,
                        "s": 0.4521738886833191
                    },
                    "component_handle_5": {
                        "alpha": 1,
                        "h": 191.08696460723877,
                        "l": 0.6627451181411743,
                        "s": 0.5348837375640869
                    },
                    "component_handle_6": {
                        "alpha": 1,
                        "h": 217.8000283241272,
                        "l": 0.572549045085907,
                        "s": 0.9174312353134155
                    },
                    "component_handle_7": {
                        "alpha": 1,
                        "h": 269.1262221336365,
                        "l": 0.6725490093231201,
                        "s": 0.6167664527893066
                    },
                    "default_light_blue": {
                        "alpha": 1,
                        "h": 209.84131336212158,
                        "l": 0.5980392098426819,
                        "s": 0.9219512343406677
                    },
                    "discord_blue": {
                        "alpha": 1,
                        "h": 234.93509531021118,
                        "l": 0.6470588445663452,
                        "s": 0.855555534362793
                    },
                    "green": {
                        "alpha": 1,
                        "h": 139.45946216583252,
                        "l": 0.5607843399047852,
                        "s": 0.3303571343421936
                    },
                    "gx_accent": {
                        "alpha": 1,
                        "h": 263.9160633087158,
                        "l": 0.7196078300476074,
                        "s": 1
                    },
                    "gx_accent_l_100": {
                        "alpha": 1,
                        "h": 263.9160633087158,
                        "l": 0.7196078300476074,
                        "s": 1
                    },
                    "gx_accent_l_120": {
                        "alpha": 1,
                        "h": 263.6842346191406,
                        "l": 0.7764706015586853,
                        "s": 1
                    },
                    "gx_accent_l_140": {
                        "alpha": 1,
                        "h": 263.7209486961365,
                        "l": 0.8313725590705872,
                        "s": 1
                    },
                    "gx_accent_l_16": {
                        "alpha": 1,
                        "h": 263.4782409667969,
                        "l": 0.11568628251552582,
                        "s": 0.38983049988746643
                    },
                    "gx_accent_l_160": {
                        "alpha": 1,
                        "h": 264.2105484008789,
                        "l": 0.888235330581665,
                        "s": 1
                    },
                    "gx_accent_l_24": {
                        "alpha": 1,
                        "h": 264.70589876174927,
                        "l": 0.1725490242242813,
                        "s": 0.38636359572410583
                    },
                    "gx_accent_l_30": {
                        "alpha": 1,
                        "h": 263.72090578079224,
                        "l": 0.21764707565307617,
                        "s": 0.38738736510276794
                    },
                    "gx_accent_l_60": {
                        "alpha": 1,
                        "h": 263.72090578079224,
                        "l": 0.43137258291244507,
                        "s": 0.3909090757369995
                    },
                    "gx_accent_l_8": {
                        "alpha": 1,
                        "h": 267.2727084159851,
                        "l": 0.05686274915933609,
                        "s": 0.37931033968925476
                    },
                    "gx_accent_l_80": {
                        "alpha": 1,
                        "h": 263.6842131614685,
                        "l": 0.5764706134796143,
                        "s": 0.5277777314186096
                    },
                    "gx_gray": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.9019607901573181,
                        "s": 0
                    },
                    "gx_gray_10": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.10196078568696976,
                        "s": 0
                    },
                    "gx_gray_16": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.16078431904315948,
                        "s": 0
                    },
                    "gx_gray_20": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.20000000298023224,
                        "s": 0
                    },
                    "gx_gray_30": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.3019607961177826,
                        "s": 0
                    },
                    "gx_gray_40": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.4000000059604645,
                        "s": 0
                    },
                    "gx_gray_50": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.501960813999176,
                        "s": 0
                    },
                    "gx_gray_60": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.6000000238418579,
                        "s": 0
                    },
                    "gx_gray_70": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.7019608020782471,
                        "s": 0
                    },
                    "gx_gray_80": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.800000011920929,
                        "s": 0
                    },
                    "gx_gray_90": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.9019607901573181,
                        "s": 0
                    },
                    "gx_no_00": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0,
                        "s": 0
                    },
                    "gx_no_04": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.03921568766236305,
                        "s": 0.3999999761581421
                    },
                    "gx_no_08": {
                        "alpha": 1,
                        "h": 247.05883026123047,
                        "l": 0.08039215952157974,
                        "s": 0.414634108543396
                    },
                    "gx_no_100": {
                        "alpha": 1,
                        "h": 0,
                        "l": 1,
                        "s": 0
                    },
                    "gx_no_12": {
                        "alpha": 1,
                        "h": 249.59999799728394,
                        "l": 0.1196078509092331,
                        "s": 0.4098360538482666
                    },
                    "gx_no_16": {
                        "alpha": 1,
                        "h": 249.09091472625732,
                        "l": 0.15882353484630585,
                        "s": 0.40740737318992615
                    },
                    "gx_no_20": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.20000000298023224,
                        "s": 0.3921568989753723
                    },
                    "gx_no_24": {
                        "alpha": 1,
                        "h": 247.3469638824463,
                        "l": 0.24117648601531982,
                        "s": 0.39837396144866943
                    },
                    "gx_no_32": {
                        "alpha": 1,
                        "h": 248.3077096939087,
                        "l": 0.31960785388946533,
                        "s": 0.3987729549407959
                    },
                    "gx_no_40": {
                        "alpha": 1,
                        "h": 248.04880142211914,
                        "l": 0.4000000059604645,
                        "s": 0.4019608199596405
                    },
                    "gx_no_59": {
                        "alpha": 1,
                        "h": 247.9517912864685,
                        "l": 0.5901960730552673,
                        "s": 0.39712920784950256
                    },
                    "gx_no_77": {
                        "alpha": 1,
                        "h": 247.65958070755005,
                        "l": 0.7705882787704468,
                        "s": 0.40170934796333313
                    },
                    "gx_no_80": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.800000011920929,
                        "s": 0.39215680956840515
                    },
                    "gx_no_88": {
                        "alpha": 1,
                        "h": 247.2000217437744,
                        "l": 0.8803921937942505,
                        "s": 0.4098360538482666
                    },
                    "gx_no_90": {
                        "alpha": 1,
                        "h": 248.57144594192505,
                        "l": 0.8999999761581421,
                        "s": 0.41176459193229675
                    },
                    "gx_no_92": {
                        "alpha": 1,
                        "h": 250.58825254440308,
                        "l": 0.9196078777313232,
                        "s": 0.4146341383457184
                    },
                    "gx_no_96": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.9607843160629272,
                        "s": 0.4000000059604645
                    },
                    "gx_no_98": {
                        "alpha": 1,
                        "h": 240.00000715255737,
                        "l": 0.9803921580314636,
                        "s": 0.39999938011169434
                    },
                    "gx_secondary_base": {
                        "alpha": 1,
                        "h": 249.09091472625732,
                        "l": 0.15882353484630585,
                        "s": 0.40740737318992615
                    },
                    "gx_warning_red": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.5,
                        "s": 1
                    },
                    "gx_warning_red_l_120": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.6000000238418579,
                        "s": 1
                    },
                    "gx_warning_red_l_140": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.699999988079071,
                        "s": 1
                    },
                    "gx_warning_yellow": {
                        "alpha": 1,
                        "h": 47.941181659698486,
                        "l": 0.6000000238418579,
                        "s": 1
                    },
                    "gx_warning_yellow_l_120": {
                        "alpha": 1,
                        "h": 47.85275459289551,
                        "l": 0.6803921461105347,
                        "s": 1
                    },
                    "gx_warning_yellow_l_140": {
                        "alpha": 1,
                        "h": 47.70493268966675,
                        "l": 0.7607843279838562,
                        "s": 1
                    },
                    "light_blue": {
                        "alpha": 1,
                        "h": 206.21357202529907,
                        "l": 0.7784314155578613,
                        "s": 0.9115045666694641
                    },
                    "light_grey": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0.9019607901573181,
                        "s": 0
                    },
                    "picture_in_picture_red": {
                        "alpha": 1,
                        "h": 2.0548081398010254,
                        "l": 0.6078431606292725,
                        "s": 0.7299998998641968
                    },
                    "pink": {
                        "alpha": 1,
                        "h": 350.94338178634644,
                        "l": 0.7607843279838562,
                        "s": 0.868852436542511
                    },
                    "purple": {
                        "alpha": 1,
                        "h": 279.5454668998718,
                        "l": 0.7490196228027344,
                        "s": 0.34375
                    },
                    "star_dust": {
                        "alpha": 1,
                        "h": 60.00000715255737,
                        "l": 0.6019607782363892,
                        "s": 0.07389162480831146
                    },
                    "teal": {
                        "alpha": 1,
                        "h": 186.66666269302368,
                        "l": 0.5588235259056091,
                        "s": 0.4399999976158142
                    },
                    "undefined": {
                        "alpha": 1,
                        "h": 119.99999284744263,
                        "l": 0.5,
                        "s": 1
                    },
                    "win_red": {
                        "alpha": 1,
                        "h": 352.46376514434814,
                        "l": 0.40980392694473267,
                        "s": 0.9904305934906006
                    },
                    "win_red_muted": {
                        "alpha": 1,
                        "h": 352.7868962287903,
                        "l": 0.36274510622024536,
                        "s": 0.9891892075538635
                    },
                    "gx_light_100": {
                        "alpha": 1,
                        "h": 0,
                        "l": 1,
                        "s": 0
                    },
                    "gx_light_98": {
                        "alpha": 1,
                        "h": 240.00000715255737,
                        "l": 0.9803921580314636,
                        "s": 0.39999938011169434
                    },
                    "gx_light_96": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.9607843160629272,
                        "s": 0.4000000059604645
                    },
                    "gx_light_92": {
                        "alpha": 1,
                        "h": 250.58825254440308,
                        "l": 0.9196078777313232,
                        "s": 0.4146341383457184
                    },
                    "gx_light_90": {
                        "alpha": 1,
                        "h": 248.57144594192505,
                        "l": 0.8999999761581421,
                        "s": 0.41176459193229675
                    },
                    "gx_light_88": {
                        "alpha": 1,
                        "h": 247.2000217437744,
                        "l": 0.8803921937942505,
                        "s": 0.4098360538482666
                    },
                    "gx_light_80": {
                        "alpha": 1,
                        "h": 247.50002145767212,
                        "l": 0.800000011920929,
                        "s": 0.39215680956840515
                    },
                    "gx_light_40": {
                        "alpha": 1,
                        "h": 248.04880142211914,
                        "l": 0.4000000059604645,
                        "s": 0.4019608199596405
                    },
                    "gx_light_24": {
                        "alpha": 1,
                        "h": 247.3469638824463,
                        "l": 0.24117648601531982,
                        "s": 0.39837396144866943
                    },
                    "gx_light_00": {
                        "alpha": 1,
                        "h": 0,
                        "l": 0,
                        "s": 0
                    }
                };
                let value;
                if(predefined[name]){
                    value = predefined[name];
                } else {
                    const primaryColors = {
                        red: 0,
                        orange: 30,
                        yellow: 60,
                        green: 120,
                        blue: 240,
                        purple: 270,
                        gx_accent: 10,
                        gx_no: 200,
                        pink: 330,
                        teal: 180,
                        grey: 0,
                        gray: 0,
                        star_dust: 285,
                        gx: 160
                    };
                    let h = undefined;
                    for (const colorName in primaryColors) {
                        if (name.toLowerCase().includes(colorName)) {
                            h = primaryColors[colorName];
                            break;
                        }
                    }
                    if (h === undefined) {
                        console.log(`random hue for ${name}`)
                        h = Math.random() * 360;
                    }
                    let s = 0;
                    const numberMatches = name.match(/\d+/g);
                    if (numberMatches) {
                        s = Math.min(Number(numberMatches.join('')), 200) / 200;
                    }
                    else if (["white", "black", "grey", "gray"].some(zeroScolor => name.toLowerCase().includes(zeroScolor))) {
                        s = 0;
                    }
                    else {
                        s = 1;
                    }
                    let l = 0.5;
                    if (name.toLowerCase().includes("white")) {
                        l = 1;
                    }
                    else if (name.toLowerCase().includes("black")) {
                        l = 0;
                    }
                    else if (name.toLowerCase().includes('dark')) {
                        l = 0.2;
                    } else if (name.toLowerCase().includes('light')) {
                        l = 0.8;
                    }
                    value = { alpha: 1, h, l, s };
                }

                cb(value);
                return value;
            },
        },
        powerSavePrivate: {
            async getStatus(cb) {
                const val = {
                    "isEnabled": false
                };
                cb(val);
                return val;
            },
            onBatteryStatusChanged: { addListener() { }, removeListener() { } },
            onStatusChanged: { addListener() { }, removeListener() { } },
            DischargingState: {
                CHARGING: "CHARGING",
                DISCHARGING: "DISCHARGING",
                UNKNOWN: "UNKNOWN",
            },
        },
        statsPrivate: {
            AggregationMode: {
                APPEND: "Append",
                RESET: "Reset",
            },
            PartnerBookmarkActionName: {
                IMPRESSION: "Impression",
                NAVIGATION: "Navigation",
                REMOVAL: "Removal",
            },
            Priority: {
                IMPORTANT: "important",
                NORMAL: "normal",
            },
            SdTileEventAction: {
                ADD: "Add",
                EDIT: "Edit",
                OPEN: "Open",
                REMOVE: "Remove",
            },
            TileSource: {
                PARTNER: "Partner",
                PERSONAL: "Personal",
                PERSONALIZED_SUGGESTION: "PersonalizedSuggestion",
            },
            TileType: {
                REGULAR: "Regular",
                SEARCH_BOX: "SearchBox",
                SUGGESTION: "Suggestion",
            },
            recordSessionEvent() { },
        },
        wallpapersPrivate: {
            onRichWallpaperConfigRegistered: { addListener() { } },
            onRichWallpaperConfigChanged: { addListener() { } },
            onWallpaperTakeoverChanged: { addListener() { } },
            onCollectionChanged: { addListener() { } },
            onSelectionChanged: { addListener() { } },
            RichWallpaperBlendMode: {
                COLOR: "Color",
                COLOR_BURN: "ColorBurn",
                COLOR_DODGE: "ColorDodge",
                DARKEN: "Darken",
                DIFFERENCE: "Difference",
                EXCLUSION: "Exclusion",
                HARD_LIGHT: "HardLight",
                HUE: "Hue",
                LIGHTEN: "Lighten",
                LUMINOSITY: "Luminosity",
                MULTIPLY: "Multiply",
                NORMAL: "Normal",
                OVERLAY: "Overlay",
                SATURATION: "Saturation",
                SCREEN: "Screen",
                SOFT_LIGHT: "SoftLight",
            },
            RichWallpaperLayerType: {
                COLORIZED_IMAGE: "ColorizedImage",
                IMAGE: "Image",
                LIVE: "Live",
                VIDEO: "Video",
            },
        },
    };
}
function chromeSetup() {
    window.chrome = {
        app: {
            isInstalled: true,
            InstallState: {
                DISABLED: "disabled",
                INSTALLED: "installed",
                NOT_INSTALLED: "not_installed",
            },
            RunningState: {
                CANNOT_RUN: "cannot_run",
                READY_TO_RUN: "ready_to_run",
                RUNNING: "running",
            },
        },
        contentSettings: {
            unsandboxedPlugins: {},
            popups: {},
            plugins: {},
            notifications: { set() { } },
        },
        contextMenusPrivate: {
            ItemType: {
                CHECKBOX: "CHECKBOX",
                NORMAL: "NORMAL",
                SEPARATOR: "SEPARATOR",
                SUBMENU: "SUBMENU",
                WORKSPACE: "WORKSPACE",
            },
        },
        cookies: {
            get() { },
            remove() { },
            onChanged: {},
            OnChangedCause: {
                EVICTED: "evicted",
                EXPIRED: "expired",
                EXPIRED_OVERWRITE: "expired_overwrite",
                EXPLICIT: "explicit",
                OVERWRITE: "overwrite",
            },
            SameSiteStatus: {
                LAX: "lax",
                NO_RESTRICTION: "no_restriction",
                STRICT: "strict",
                UNSPECIFIED: "unspecified",
            },
        },
        dom: {},
        easySetupPrivate: {},
        management: {
            get() { },
            setEnabled() { },
            getAll() { },
            onDisabled: {
                addListener() { },
                removeListener() { }
            },
            onEnabled: {
                addListener() { },
                removeListener() { }
            },
            onUninstalled: {
                addListener() { },
                removeListener() { }
            },
            onInstalled: {
                addListener() { },
                removeListener() { }
            },
            ExtensionDisabledReason: {
                PERMISSIONS_INCREASE: "permissions_increase",
                UNKNOWN: "unknown",
            },
            ExtensionInstallType: {
                ADMIN: "admin",
                DEVELOPMENT: "development",
                NORMAL: "normal",
                OTHER: "other",
                SIDELOAD: "sideload",
            },
            ExtensionType: {
                EXTENSION: "extension",
                HOSTED_APP: "hosted_app",
                LEGACY_PACKAGED_APP: "legacy_packaged_app",
                LOGIN_SCREEN_EXTENSION: "login_screen_extension",
                PACKAGED_APP: "packaged_app",
                THEME: "theme",
            },
            LaunchType: {
                OPEN_AS_PINNED_TAB: "OPEN_AS_PINNED_TAB",
                OPEN_AS_REGULAR_TAB: "OPEN_AS_REGULAR_TAB",
                OPEN_AS_WINDOW: "OPEN_AS_WINDOW",
                OPEN_FULL_SCREEN: "OPEN_FULL_SCREEN",
            },
        },
        operaResourcesPrivate: {
            Component: {
                BABE: "babe",
                BOOKMARKS: "bookmarks",
                BOOKMARKS_PANEL: "bookmarks_panel",
                BOOSTER_SIDEBAR: "booster_sidebar",
                CRYPTO_EXTENSIONS_LIST: "crypto_extensions_list",
                CRYPTOWALLET: "cryptowallet",
                DIALOG: "dialog",
                DOWNLOADS: "downloads",
                EXTENSIONS: "extensions",
                FEEDBACK_POPUP: "feedback_popup",
                GENERIC: "generic",
                HISTORY: "history",
                HISTORY_PANEL: "history_panel",
                LIMITERS_SIDEBAR: "limiters_sidebar",
                NAVBAR: "navbar",
                PERSONALNEWS: "personalnews",
                PLAYER_SERVICE: "player_service",
                PRIVATE_MODE: "private_mode",
                SIDEBAR_SETUP: "sidebar_setup",
                STARTPAGE: "startpage",
                STYLEGUIDE: "styleguide",
                TABS: "tabs",
                VIDEO_CONFERENCE_DETACHED: "video_conference_detached",
                VIDEOPOPOUT: "videopopout",
                VPN_PRO: "vpn_pro",
                WEB3_SELECTOR: "web3_selector",
            },
            getStrings(a, b) {
                return b({});
            },
        },
        runtime: {
            id: "ocpleophfhddnogoadhmhpbjanddmnnj",
            onConnect: {},
            ContextType: {
                BACKGROUND: "BACKGROUND",
                OFFSCREEN_DOCUMENT: "OFFSCREEN_DOCUMENT",
                POPUP: "POPUP",
                SIDE_PANEL: "SIDE_PANEL",
                TAB: "TAB",
            },
            OnInstalledReason: {
                CHROME_UPDATE: "chrome_update",
                INSTALL: "install",
                SHARED_MODULE_UPDATE: "shared_module_update",
                UPDATE: "update",
            },
            OnRestartRequiredReason: {
                APP_UPDATE: "app_update",
                OS_UPDATE: "os_update",
                PERIODIC: "periodic",
            },
            PlatformArch: {
                ARM: "arm",
                ARM64: "arm64",
                MIPS: "mips",
                MIPS64: "mips64",
                X86_32: "x86-32",
                X86_64: "x86-64",
            },
            PlatformNaclArch: {
                ARM: "arm",
                MIPS: "mips",
                MIPS64: "mips64",
                X86_32: "x86-32",
                X86_64: "x86-64",
            },
            PlatformOs: {
                ANDROID: "android",
                CROS: "cros",
                FUCHSIA: "fuchsia",
                LINUX: "linux",
                MAC: "mac",
                OPENBSD: "openbsd",
                WIN: "win",
            },
            RequestUpdateCheckStatus: {
                NO_UPDATE: "no_update",
                THROTTLED: "throttled",
                UPDATE_AVAILABLE: "update_available",
            },
        },
        settingsPrivate: {
            getAllPrefs() { return [] },
            setPref() { },
            onPrefsChanged: {
                addListener() { },
                removeListener() { }
            },
            ControlledBy: {
                CHILD_RESTRICTION: "CHILD_RESTRICTION",
                DEVICE_POLICY: "DEVICE_POLICY",
                EXTENSION: "EXTENSION",
                OWNER: "OWNER",
                PARENT: "PARENT",
                PRIMARY_USER: "PRIMARY_USER",
                USER_POLICY: "USER_POLICY",
            },
            Enforcement: {
                ENFORCED: "ENFORCED",
                PARENT_SUPERVISED: "PARENT_SUPERVISED",
                RECOMMENDED: "RECOMMENDED",
            },
            PrefType: {
                BOOLEAN: "BOOLEAN",
                DICTIONARY: "DICTIONARY",
                LIST: "LIST",
                NUMBER: "NUMBER",
                STRING: "STRING",
                URL: "URL",
            },
        },
        tabs: {
            async getCurrent(cb) {
                const val = "https://gxcorner.games";
                cb(val);
                return val;
            },
            async update(cb) { cb(undefined) },
            async create(cb) { cb(undefined) },
            onZoomChange: {},
            onReplaced: {},
            onRemoved: {},
            onAttached: {},
            onDetached: {},
            onHighlighted: {},
            onActivated: {},
            onMoved: {},
            onUpdated: {},
            onCreated: {},
            CSSOrigin: {
                AUTHOR: "author",
                USER: "user",
            },
            ImageFormat: {
                JPEG: "jpeg",
                PNG: "png",
            },
            MutedInfoReason: {
                CAPTURE: "capture",
                EXTENSION: "extension",
                USER: "user",
            },
            RunAt: {
                DOCUMENT_END: "document_end",
                DOCUMENT_IDLE: "document_idle",
                DOCUMENT_START: "document_start",
            },
            TabStatus: {
                COMPLETE: "complete",
                LOADING: "loading",
                UNLOADED: "unloaded",
            },
            WindowType: {
                APP: "app",
                DEVTOOLS: "devtools",
                NORMAL: "normal",
                PANEL: "panel",
                POPUP: "popup",
            },
            ZoomSettingsMode: {
                AUTOMATIC: "automatic",
                DISABLED: "disabled",
                MANUAL: "manual",
            },
            ZoomSettingsScope: {
                PER_ORIGIN: "per-origin",
                PER_TAB: "per-tab",
            },
            MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND: 2,
            TAB_ID_NONE: -1,
            TAB_INDEX_NONE: -1,
        },
        webNavigation: {
            onHistoryStateUpdated: {},
            onTabReplaced: {},
            onReferenceFragmentUpdated: {},
            onCreatedNavigationTarget: {},
            onErrorOccurred: {},
            onCompleted: {},
            onDOMContentLoaded: {},
            onCommitted: {},
            onBeforeNavigate: {},
            TransitionQualifier: {
                CLIENT_REDIRECT: "client_redirect",
                FORWARD_BACK: "forward_back",
                FROM_ADDRESS_BAR: "from_address_bar",
                SERVER_REDIRECT: "server_redirect",
            },
            TransitionType: {
                AUTO_BOOKMARK: "auto_bookmark",
                AUTO_SUBFRAME: "auto_subframe",
                FORM_SUBMIT: "form_submit",
                GENERATED: "generated",
                KEYWORD: "keyword",
                KEYWORD_GENERATED: "keyword_generated",
                LINK: "link",
                MANUAL_SUBFRAME: "manual_subframe",
                RELOAD: "reload",
                START_PAGE: "start_page",
                TYPED: "typed",
            },
        },
        windows: {
            create() { },
            onBoundsChanged: {},
            onFocusChanged: {},
            onRemoved: {},
            onCreated: {},
            CreateType: {
                NORMAL: "normal",
                PANEL: "panel",
                POPUP: "popup",
            },
            WindowState: {
                FULLSCREEN: "fullscreen",
                LOCKED_FULLSCREEN: "locked-fullscreen",
                MAXIMIZED: "maximized",
                MINIMIZED: "minimized",
                NORMAL: "normal",
                PARENT: "parent",
            },
            WindowType: {
                APP: "app",
                DEVTOOLS: "devtools",
                NORMAL: "normal",
                PANEL: "panel",
                POPUP: "popup",
            },
            WINDOW_ID_CURRENT: -2,
            WINDOW_ID_NONE: -1,
        },
    };
}
oprSetup();
chromeSetup();
const oprScript = document.createElement("script");
oprScript.innerHTML = oprSetup.toString().replace("function oprSetup()", "");
const chromeScript = document.createElement("script");
chromeScript.innerHTML = chromeSetup.toString().replace("function chromeSetup()", "");
document.body.appendChild(oprScript);
document.body.appendChild(chromeScript);