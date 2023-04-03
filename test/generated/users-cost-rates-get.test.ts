/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users cost-rates get", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js users cost-rates get --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users cost-rates get

    Retrieves the cost rate with the given ID

    Options:
          --help          Show help                                        [boolean]
      -u, --user_id       The ID of the user whose billable rate you're retrieving.
                                                                          [required]
      -c, --cost_rate_id  The ID of the cost rate you're retrieving.      [required]
      -f, --fields        Comma separated list of fields to display in the output.
      -o, --output        The output format: json, table"
  `);
});
