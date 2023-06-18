import { makeSafeQueryRunner } from "groqd";
import { client } from "../client";

/**
 * A safe query runner that executes a given query using the Sanity client's fetch method.
 * @param query - The query to execute.
 * @returns The result of the executed query.
 */
export const runQuery = makeSafeQueryRunner((query) => client.fetch(query));
