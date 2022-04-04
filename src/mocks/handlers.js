import { rest } from "msw";

export const handlers = [
  rest.get("/kollywood-actors", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: [
          {
            id: 1,
            name: "Ilaya Thalapathy",
            alterEgo: "Vijay"
          },
          {
            id: 2,
            name: "Superstar",
            alterEgo: "Rajinikanth"
          },
          {
            id: 3,
            name: "Thala",
            alterEgo: "Ajith Kumar"
          }
        ]
      })
    );
  }),
  rest.get("/kollywood-actors1", (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "404 page not found"
      })
    );
  }),
  rest.get("/kollywood-actor/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (id === "1") {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          name: "Ilaya Thalapathy",
          alterEgo: "Vijay"
        })
      );
    } else if (id === "2") {
      return res(
        ctx.status(200),
        ctx.json({
          id: 2,
          name: "Superstar",
          alterEgo: "Rajinikanth"
        })
      );
    } else if (id === "3") {
      return res(
        ctx.status(200),
        ctx.json({
          id: 3,
          name: "Thala",
          alterEgo: "Ajith Kumar"
        })
      );
    }
  }),
  rest.get("/movies/actor/:name", (req, res, ctx) => {
    const { name } = req.params;
    if (name === "Vijay") {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          name: "Vijay",
          movies: ["Beast", "Ghilli", "Kadhaluku Mariyathai"]
        })
      );
    }
  }),
  rest.get("/cartoons", (req, res, ctx) => {
    const pageNum = req.url.searchParams.get("pageNum");
    if (pageNum === "1") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            name: `Dexter's Laboratory`
          },
          {
            id: 2,
            name: `Tom & Jerry`
          }
        ])
      );
    } else if (pageNum === "2") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 3,
            name: `Swat Kats`
          },
          {
            id: 4,
            name: `Scooby Doo`
          }
        ])
      );
    } else if (pageNum === "3") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 5,
            name: `Powerpuff Girls`
          },
          {
            id: 6,
            name: `Jackie Chan adventures`
          }
        ])
      );
    } else if (pageNum === "4") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 7,
            name: `Pokemon`
          },
          {
            id: 8,
            name: `Dragon Ball Z`
          }
        ])
      );
    } else if (pageNum === "5") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 9,
            name: `Bey Blade`
          },
          {
            id: 10,
            name: `Ben 10`
          }
        ])
      );
    }
  })
];
