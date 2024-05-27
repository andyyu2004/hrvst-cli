/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst open status", async () => {
  const { stdout } = await execaCommand("node dist/cli.js open status --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js open status

    View status of Harvest services

    Options:
      --help  Show help                                                    [boolean]"
  `);
});