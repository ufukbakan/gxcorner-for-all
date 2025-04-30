// @ts-check
const savedSettings = localStorage.getItem("private_settings");
const privateSettings = savedSettings ? JSON.parse(savedSettings) : [];
// @ts-ignore
window.gxcfa.chromeG = {
    prefListeners: [],
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
        get({ name, url }, callback) {
            const cookieString = document.cookie
                .split("; ")
                .find((row) => row.startsWith(name + "="));
            const value = cookieString
                ? decodeURIComponent(cookieString.split("=")[1])
                : null;
            callback(value);
            return value;
        },

        getAll(...args) {
            const cookieArray = document.cookie.split("; ");
            const cookiesObject = {};
            cookieArray.forEach((cookie) => {
                const [key, value] = cookie.split("=");
                cookiesObject[key] = decodeURIComponent(value);
            });
            return cookiesObject;
        },

        getAllCookieStores(...args) {
            return [
                {
                    id: "default",
                    tabIds: [],
                },
            ];
        },

        remove(name) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        },

        set(name, value, options = {}) {
            let cookieString = `${name}=${encodeURIComponent(value)}`;
            if (options.expires) {
                cookieString += `; expires=${options.expires.toUTCString()}`;
            }
            if (options.path) {
                cookieString += `; path=${options.path}`;
            }
            if (options.domain) {
                cookieString += `; domain=${options.domain}`;
            }
            if (options.secure) {
                cookieString += `; secure`;
            }
            if (options.sameSite) {
                cookieString += `; samesite=${options.sameSite}`;
            }
            document.cookie = cookieString;
        },

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
            removeListener() { },
        },
        onEnabled: {
            addListener() { },
            removeListener() { },
        },
        onUninstalled: {
            addListener() { },
            removeListener() { },
        },
        onInstalled: {
            addListener() { },
            removeListener() { },
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
        getAllPrefs(callback) {
            callback(privateSettings);
            return privateSettings;
        },
        getPref(key, callback) {
            const value = privateSettings.find((setting) => setting.key === key);
            if (callback) callback(value);
            return value;
        },
        setPref(key, value, callback) {
            const index = privateSettings.findIndex(
                (setting) => setting.key === key
            );
            const newValue = {
                key,
                value,
                userControlDisabled: false,
                type: (typeof value).toUpperCase(),
            };
            if (index === -1) {
                privateSettings.push(newValue);
            } else {
                privateSettings[index] = newValue;
            }
            window.chrome.prefListeners.forEach((f) => f([newValue]));
            localStorage.setItem(
                "private_settings",
                JSON.stringify(privateSettings)
            );
            if (callback) callback([true]);
        },
        dispatchChange() {
            window.chrome.prefListeners.forEach((f) => f(privateSettings));
        },
        onPrefsChanged: {
            addListener(f) {
                window.chrome.prefListeners.push(f);
            },
            removeListener(f) {
                window.chrome.prefListeners = window.chrome.prefListeners.filter((e) => e !== f);
            },
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
            const val = location.href;
            cb(val);
            return val;
        },
        async update(data) {
            if (data && data.url) {
                location.href = data.url;
            }
        },
        async create(data) {
            if (data && data.url) {
                // @ts-ignore
                window.open(data.url, "_blank").focus();
            }
        },
        async query(info, cb) {
            const val = [];
            cb(val);
            return val;
        },
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