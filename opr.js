window.gxcfa.oprG = {
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
            SHOW_AND_HIDE_AUTOMATICALLY_ON_ACTION:
                "SHOW_AND_HIDE_AUTOMATICALLY_ON_ACTION",
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
            SCOPE_NOT_DEFINED_IN_EXTENSION_MANIFEST:
                "SCOPE_NOT_DEFINED_IN_EXTENSION_MANIFEST",
            UNKNOWN: "UNKNOWN",
            USER_NOT_LOGGED_IN: "USER_NOT_LOGGED_IN",
        },
    },
    palette: {
        onPaletteChanged: {
            addListener(callback) {
                paletteListeners.push(callback);
            },
            removeListener(callback) {
                paletteListeners.filter((listener) => listener !== callback);
            },
        },
        MetaColor: {
            ACCENT_DARK: "ACCENT_DARK",
            ACCENT_LIGHT: "ACCENT_LIGHT",
            SECONDARY_DARK: "SECONDARY_DARK",
            SECONDARY_LIGHT: "SECONDARY_LIGHT",
        },
        getPalette(cb) {
            const val = [
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
            ];
            cb(val);
        },
        async getColorHSL(name, cb) {
            const preferedPalette = window.chrome.settingsPrivate.getPref("theme");
            let value = getPredefinedColor(
                preferedPalette ? preferedPalette.value : "classic",
                name
            );
            if (!value) {
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
                    gx: 160,
                };
                let h = undefined;
                for (const colorName in primaryColors) {
                    if (name.toLowerCase().includes(colorName)) {
                        h = primaryColors[colorName];
                        break;
                    }
                }
                if (h === undefined) {
                    h = Math.random() * 360;
                }
                let s = 0;
                const numberMatches = name.match(/\d+/g);
                if (numberMatches) {
                    s = Math.min(Number(numberMatches.join("")), 200) / 200;
                } else if (
                    ["white", "black", "grey", "gray"].some((zeroScolor) =>
                        name.toLowerCase().includes(zeroScolor)
                    )
                ) {
                    s = 0;
                } else {
                    s = 1;
                }
                let l = 0.5;
                if (name.toLowerCase().includes("white")) {
                    l = 1;
                } else if (name.toLowerCase().includes("black")) {
                    l = 0;
                } else if (name.toLowerCase().includes("dark")) {
                    l = 0.2;
                } else if (name.toLowerCase().includes("light")) {
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
                isEnabled: false,
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
    themesPrivate: {
        async getActive() {
            return window.chrome.settingsPrivate.getPref("theme");
        },
        async getActiveTheme() {
            return {
                name: window.chrome.settingsPrivate.getPref("theme"),
            };
        },
        onThemeChanged: {
            addListener(f) {
                prefListeners.push(f);
            },
            removeListener() {
                prefListeners = prefListeners.filter((e) => e !== f);
            },
        },
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