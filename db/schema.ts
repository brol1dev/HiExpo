import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const countries = sqliteTable(
  "countries",
  {
    id: integer("id").primaryKey(),
    name: text("name"),
  },
  (countries) => ({
    nameIdx: uniqueIndex("nameIdx").on(countries.name),
  })
);

export type Country = typeof countries.$inferSelect
export type InsertCountry = typeof countries.$inferInsert

export const cities = sqliteTable("cities", {
  id: integer("id").primaryKey(),
  name: text("name"),
  countryId: integer("country_id").references(() => countries.id),
});
