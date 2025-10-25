import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const databaseConnections = pgTable("database_connections", {
  id: uuid("id").primaryKey().defaultRandom(),
  connectionString: text("name").notNull(),
  userId: uuid("user_id")
    .references(() => user.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
