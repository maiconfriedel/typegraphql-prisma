import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    cors: true,
    context: () => ({ prisma }),
  });

  // Start the server
  const { url } = await server.listen(3333);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
