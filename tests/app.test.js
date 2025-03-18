const request = require("supertest");
const { app, server } = require("../index");

describe("GET /", () => {
    it("should return 'Hello, CI/CD ferPipelsegergines!'", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello, CI/CD Pipeline!");
    });
});

afterAll(() => {
    server.close(); // Close the server after tests
});
