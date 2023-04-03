/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst alias delete", async () => {
  const { stdout } = await execaCommand("node dist/cli.js alias delete --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js alias delete <alias>

    Delete an alias

    Options:
      --help  Show help                                                    [boolean]"
  `);
});
