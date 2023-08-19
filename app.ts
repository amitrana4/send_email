import express from "express";
import dotenv from "dotenv";
import { resolvers } from "./src/graphql/resolvers/resolver";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { cors_options } from "./src/constants/cors_options";
import { readFile } from "fs/promises";
import { createServer } from "http";
import { Request, Response } from "express";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";

dotenv.config();
const cors = require("cors");
let app = express();
const bodyparser = require("body-parser");

app.use(cors(cors_options));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let port = process.env.PORT || 8100;

const httpServer = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.json("Healthy");
});

const startserver = async () => {
  const typeDefs = await (
    await readFile("src/graphql/schemas/schema.graphql")
  ).toString("utf-8");
  const executableSchema = makeExecutableSchema({ typeDefs, resolvers });
  const schemaWithMiddleware = applyMiddleware(executableSchema);

  const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: async () => {},
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });
  await server.start();
  server.applyMiddleware({ app, cors: cors_options });
};
startserver();
app.listen(port, () => {
  console.log("Server started at port : ", port);
});

export { app, httpServer };
