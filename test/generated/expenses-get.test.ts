/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst expenses get", async () => {
  const { stdout } = await execaCommand("node dist/cli.js expenses get --help");
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js expenses get

    Retrieves the expense with the given ID

    Options:
          --help        Show help                                          [boolean]
      -e, --expense_id  The ID of the expense you're retrieving.          [required]
      -f, --fields      Comma separated list of fields to display in the output.
      -o, --output      The output format: json, table"
  `);
});
