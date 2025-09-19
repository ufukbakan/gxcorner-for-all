// @ts-check
// #region GLOBALS
const locale = navigator.language || "en-US";
const [lang, country] = locale.split("-");
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;
const originalBack = history.back;
const originalForward = history.forward;
let lastBody = '';
function isBodyChanged() {
  if (lastBody === document.body.innerHTML) return false;
  lastBody = document.body.innerHTML;
  return true;
}
async function prepareSettings() {
  await acq("prepareSettings");
  if (location.pathname === "/settings") {
    await Promise.allSettled([
      replaceBackButton(),
      setupPaletteSelector(),
      setupLightModeSelector()
    ]);
  }
  release("prepareSettings");
}
function onNavigate() {
  prepareSettings();
}
history.pushState = async (...args) => {
  lastBody = document.body.innerHTML;
  originalPushState.apply(history, args);
  await waitFor(isBodyChanged);
  onNavigate();
};
history.replaceState = async (...args) => {
  lastBody = document.body.innerHTML;
  originalReplaceState.apply(history, args);
  await waitFor(isBodyChanged);
  onNavigate();
}
history.back = async (...args) => {
  lastBody = document.body.innerHTML;
  originalBack.apply(history, args);
  await waitFor(isBodyChanged);
  onNavigate();
}
history.forward = async (...args) => {
  lastBody = document.body.innerHTML;
  originalForward.apply(history, args);
  await waitFor(isBodyChanged);
  onNavigate();
}

const {
  palettes,
  dictionary,
  v6Styles,
  oprG,
  chromeG
  // @ts-ignore
} = window.gxcfa;
// #region-end GLOBALS

const sem = {};
const semReleaseTimers = {};
function acq(key, timeout = 5000) {
  const startTime = Date.now();
  function tryToAcq(res, rej) {
    if (Date.now() > startTime + timeout) {
      rej("Acq timeout");
    }
    if (sem[key]) {
      setTimeout(() => tryToAcq(res, rej), 100);
    } else {
      sem[key] = 1;
      semReleaseTimers[key] = setTimeout(() => release(key), 5000);
      res();
    }
  }
  return new Promise((res, rej) => tryToAcq(res, rej));
}
function release(key) {
  sem[key] = 0;
  clearTimeout(semReleaseTimers[key]);
}

const themeOptions = Object.keys(palettes).filter((key) => key !== "base");

function getPalette(palette) {
  return { ...palettes.base, ...palettes[palette] };
}

function getPredefinedColor(palette, name) {
  const paletteColors = palettes[palette] || palettes.classic;
  const value = paletteColors[name] || palettes.base[name];
  return value;
}

// #region-end PALETTES

// #region SETTINGS

function parseDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const result = tempDiv.firstChild;
  tempDiv.remove();
  return result;
}

async function waitFor(producer, timeout = 3000) {
  const initTime = Date.now();
  const retry = async (resolve, reject) => {
    if (timeout > 0 && Date.now() > initTime + timeout) {
      return reject("Timeout");
    }
    let result = producer();
    if (result instanceof Promise) {
      result = await result;
    }
    if (result) {
      return resolve(result);
    } else {
      return setTimeout(() => retry(resolve, reject), 100);
    }
  };
  return new Promise((resolve, reject) => retry(resolve, reject));
}

async function replaceBackButton() {
  const original = await waitFor(() => document.querySelector(".back a"));
  const clone = parseDom(original.outerHTML);
  clone.href = "/";
  original.parentElement.replaceChild(clone, original);
}

async function setupPaletteSelector() {
  try {
    await acq("setupPaletteSelector");
    if (!window.stylesForAllSetup) {
      const styles =
        ".dropdown-for-all{" +
        "border: 2px solid;" +
        "border-color: var(--color-p240, hsl(var(--color-accent)));" +
        "background: hsl(var(--color-N32));" +
        "color: var(--color-l2, hsl(var(--color)));" +
        "outline: none;" +
        "padding: 4px 16px;" +
        "border-radius: 4px;}";
      const style = document.createElement("style");
      style.innerText = styles;
      document.documentElement.insertBefore(style, document.body);
      window.stylesForAllSetup = true;
    }
    if (document.getElementById("theme-select")) {
      return;
    }

    const themePref = window.chrome.settingsPrivate.getPref("theme");
    const currentTheme = themePref ? themePref.value : "classic";
    const options = themeOptions.map(
      (option) =>
        `<option${option === currentTheme ? " selected" : ""}>${option}</option>`
    );
    const div =
      parseDom(`<div class="box split svelte-tmfmdp flex w-full justify-between p-1 text-l2 text-text-3 gx-body-s content-center text-nowrap">${dictionary.theme[lang] || dictionary.theme.en
        }
          <div class="button svelte-tmfmdp">
              <select id='theme-select' class='dropdown-for-all'>
                  ${options.join("\n")}
              </select>
          </div>
      </div>`);
    div.querySelector("#theme-select").addEventListener("change", (e) => {
      const theme = e.target.value;
      window.chrome.settingsPrivate.setPref("theme", theme);
      window.chrome.settingsPrivate.dispatchChange();
      paletteListeners.forEach((listener) => listener(theme));
      setV6Styles();
    });
    const wrapper = await waitFor(
      () =>
        document.querySelector(
          "#app>div>main>div>div.page>div.stack>div:nth-child(1)>div>div.stack"
        ) ||
        document.querySelector(".tile.group")
    );
    wrapper.insertBefore(div, wrapper.firstChild);
  } finally {
    release("setupPaletteSelector");
  }
}

async function setupLightModeSelector() {
  try {
    await acq("setupLightModeSelector");
    const lightPref = window.chrome.settingsPrivate.getPref("light-mode");
    if (document.getElementById("light-mode-select")) {
      return;
    }
    const currentMode = lightPref ? lightPref.value : "auto";
    const options = ["dark", "light", "auto"].map(
      (option) =>
        `<option${currentMode === option ? " selected" : ""}>${option}</option>`
    );
    const div = parseDom(`<div class="box split svelte-tmfmdp flex w-full justify-between p-1 text-l2 text-text-3 gx-body-s content-center text-nowrap">${dictionary.lightMode[lang] || dictionary.lightMode.en
      }
          <div class="button svelte-tmfmdp">
              <select id='light-mode-select' class='dropdown-for-all'>
                  ${options.join("\n")}
              </select>
          </div>
      </div>`);
    div.querySelector("#light-mode-select").addEventListener("change", (e) => {
      const mode = e.target.value;
      window.chrome.settingsPrivate.setPref("light-mode", mode);
      location.reload();
    });
    const wrapper = await waitFor(() =>
      document.querySelector("#app>div>main>div>div.page>div.stack>div:nth-child(1)>div>div.stack")
      ||
      document.querySelector(".tile.group")
    );
    wrapper.insertBefore(div, wrapper.firstChild);
  } finally {
    release("setupLightModeSelector");
  }
}

// #region-end SETTINGS

// #region MAIN

const isTrueStr = (str) => ["1", "true", "TRUE", "True"].includes(str);
const url = new URL(window.location.href);
if (!url.searchParams.has("COUNTRY")) {
  url.searchParams.append("LANG", lang);
  url.searchParams.append("COUNTRY", country || lang);
  url.searchParams.append("LOCALE", locale);
  window.location.href = url.toString();
}

const paletteListeners = [];
const toStr = (val) => (typeof val === "symbol" ? "symbol" : `${val}`);
const watchObject = (obj, path = "") => {
  const handler = {
    get(target, prop, receiver) {
      const fullPath = path ? `${toStr(path)}.${toStr(prop)}` : toStr(prop);
      const value = Reflect.get(target, prop, receiver);
      console.log(`Property accessed: ${fullPath}`);

      // If the property is a function, return a wrapper function to log calls
      if (typeof value === "function") {
        return function (...args) {
          if (window.args) {
            window.args.push(...args);
          } else {
            window.args = [...args];
          }
          console.log(`Function called: ${fullPath} with arguments:`, ...args);
          const result = value.apply(this, args);
          if (value.name === "getColorHSL" && !result) {
            console.warn("missing color", args);
          }
          return result;
        };
      }

      // If the property is an object, recursively wrap it in a Proxy
      if (typeof value === "object" && value !== null) {
        return watchObject(value, fullPath);
      }

      return value;
    },
    set(target, prop, value, receiver) {
      const fullPath = path ? `${path}.${prop}` : prop;
      console.log(`Property set: ${fullPath} = ${value}`);
      return Reflect.set(target, prop, value, receiver);
    },
  };

  return new Proxy(obj, handler);
};

function oprSetup() {
  window.opr = oprG;
}
function chromeSetup() {
  window.chrome = chromeG;
}

oprSetup();
chromeSetup();
if (!window.originalMatchMedia) {
  window.originalMatchMedia = window.matchMedia;
}
const originalMatchMedia = window.originalMatchMedia;
const pref = window.chrome.settingsPrivate.getPref("light-mode");
if (pref && pref.value !== "auto") {
  window.matchMedia = (media) => {
    let result = originalMatchMedia(media);
    result = {
      ...result,
      matches: result.matches,
      media: result.media,
    };
    switch (media) {
      case "(prefers-color-scheme: dark)":
        result.matches = pref.value === "dark";
        break;
      case "(prefers-color-scheme: light)":
        result.matches = pref.value === "light";
        break;
      default:
        break;
    }
    result.addEventListener = (type, listener) => {
      const mockedListener = () => {
        listener(result);
      };
      originalMatchMedia(media).addEventListener(type, mockedListener);
    };
    result.removeEventListener = (...x) => originalMatchMedia(media).removeEventListener(...x);
    return result;
  };
}
function isFirefox() {
  return navigator.userAgent.toLowerCase().includes("firefox");
}
if (isFirefox()) {
  window.addEventListener("load", () => {
    const style = document.createElement("style");
    style.innerText =
      ".borderAnimaton,.borderAnimation{display:none !important}.scrollable .wrapper{overflow:hidden}.scrollable .contents .tile .border{display:none}";
    document.head.appendChild(style);
  });
}

const isDarkMatcher = window.matchMedia("(prefers-color-scheme: dark)");
isDarkMatcher.addEventListener("change", setV6Styles);

function setV6Styles() {
  const v6styleId = "v6-styles";
  let styleElement = document.getElementById(v6styleId);
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = v6styleId;
    document.documentElement.insertBefore(styleElement, document.body);
  }

  window.chrome.settingsPrivate.getPref("theme", theme => {
    const { value: themeName } = theme || { value: 'classic' };
    let commonStyles = 'body{background-color:color-mix(in srgb, var(--color-primary-100) 5%, #000);}';
    const isDark = isDarkMatcher.matches;
    const styles = isDark ? v6Styles.dark : v6Styles.light;
    if (!isDark) {
      commonStyles = 'body{background-color:color-mix(in srgb, var(--color-primary-100) 5%, #fff);}';
    }

    styleElement.innerHTML = `:root {
      --v6-theme-name:${themeName};
      --v6-dark-mode:${isDark};
      ${styles[themeName]}
    }
    ${commonStyles}`;
  });
}

// #region V6
window.addEventListener("load", () => {
  if (document.location.hostname.startsWith("v6")) {
    setV6Styles();
  }
  onNavigate();
});

// #region-end V6
if (url.searchParams.has("debug")) {
  const key = url.searchParams.get("debug");
  const targetObject = window[key];
  window[key] = watchObject(targetObject);
}