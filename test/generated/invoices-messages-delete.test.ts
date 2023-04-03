/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices messages delete", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices messages delete --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices messages delete

    Delete an invoice message

    Options:
          --help        Show help                                          [boolean]
      -i, --invoice_id  The ID of the invoice that contains the message you are dele
                        ting.                                             [required]
      -m, --message_id  The ID of the message you are deleting.           [required]
      -f, --fields      Comma separated list of fields to display in the output.
      -o, --output      The output format: json, table"
  `);
});
