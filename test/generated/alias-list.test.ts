/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst alias list", async () => {
  const { stdout } = await execaCommand("node dist/cli.js alias list --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js alias list

    List aliases

    Options:
      --help  Show help                                                    [boolean]"
  `);
});
