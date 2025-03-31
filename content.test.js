import { describe, expect, it, beforeEach, vi } from "vitest";
import manifest from "./manifest.json";

describe("Content interception tests", () => {
    beforeEach(() => {
        window.gxcfa = undefined;
        window.opr = undefined;
        window.chrome = undefined;
        window.location = {}
        vi.resetModules();
    });

    async function loadExtension() {
        for (const js of manifest.content_scripts[0].js) {
            await import(`./${js}`);
        }
    }

    it("Test v6", async () => {
        window.location.href = "https://v6.gxcorner.games";
        await loadExtension();
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);
        expect(queryParams.get("COUNTRY")).to.be.eq("US");
        expect(window.opr).toBeDefined();
        expect(window.chrome).toBeDefined();
    });

    it("Test without country query", async () => {
        window.location.href = "https://gxcorner.games/";
        await loadExtension();
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);
        expect(queryParams.get("COUNTRY")).to.be.eq("US");
        expect(window.opr).toBeDefined();
        expect(window.chrome).toBeDefined();
    });

    it("Test with country query", async () => {
        window.location.href = "https://gxcorner.games?COUNTRY=TR";
        await loadExtension();
        const url = new URL(window.location.href);
        const queryParams = new URLSearchParams(url.search);
        expect(queryParams.get("COUNTRY")).to.be.eq("TR");
        expect(window.opr).toBeDefined();
        expect(window.chrome).toBeDefined();
    });
})