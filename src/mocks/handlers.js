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
            alterEgo: "Vijay",
          },
          {
            id: 2,
            name: "Superstar",
            alterEgo: "Rajinikanth",
          },
          {
            id: 3,
            name: "Thala",
            alterEgo: "Ajith Kumar",
          },
        ],
      })
    );
  }),
];
