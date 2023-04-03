/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst invoices item-categories get", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js invoices item-categories get --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js invoices item-categories get

    Retrieves the invoice item category with the given ID

    Options:
          --help                      Show help                            [boolean]
      -i, --invoice_item_category_id  The ID of the invoice item category you're ret
                                      rieving.                            [required]
      -f, --fields                    Comma separated list of fields to display in t
                                      he output.
      -o, --output                    The output format: json, table"
  `);
});
