/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst clients delete", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js clients delete --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js clients delete

    Delete a client

    Options:
          --help       Show help                                           [boolean]
      -c, --client_id  The ID of the client you're deleting.              [required]
      -f, --fields     Comma separated list of fields to display in the output.
      -o, --output     The output format: json, table"
  `);
});