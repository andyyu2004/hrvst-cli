/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst estimates item-categories create", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js estimates item-categories create --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js estimates item-categories create

    Creates a new estimate item category object

    Options:
          --help    Show help                                              [boolean]
      -n, --name    The name of the estimate item category.               [required]
      -f, --fields  Comma separated list of fields to display in the output.
      -o, --output  The output format: json, table"
  `);
});
