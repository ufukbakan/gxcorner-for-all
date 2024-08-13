import { beforeEach } from "node:test";
import { describe, expect, it } from "vitest";

describe("Content interception tests", () => {
    function reset() {
        window.location = { href: "https://gxcorner.games/" }
        window.opr = undefined;
        window.chrome = undefined;
    }
    beforeEach(reset);

    it("Test without country query", async () => {
        await import("./content");
        const queryParams = new URLSearchParams(window.location.search);
        expect(queryParams.get("COUNTRY")).to.be.eq("US");
        expect(window.opr).toBeDefined();
        expect(window.chrome).toBeDefined();
    });

    it("Test with country query", async () => {
        window.location.href = "https://gxcorner.games?COUNTRY=TR";
        await import("./content");
        const queryParams = new URLSearchParams(window.location.search);
        expect(queryParams.get("COUNTRY")).to.be.eq("TR");
        expect(window.opr).toBeDefined();
        expect(window.chrome).toBeDefined();
    });
})