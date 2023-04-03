/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst estimates update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js estimates update --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js estimates update

    Updates the specific estimate by setting the values of the parameters passed

    Options:
          --help            Show help                                      [boolean]
      -e, --estimate_id     The ID of the estimate you're updating.       [required]
      -c, --client_id       The ID of the client this estimate belongs to.
      -n, --number          If no value is set, the number will be automatically gen
                            erated.
      -p, --purchase_order  The purchase order number.
      -t, --tax             This percentage is applied to the subtotal, including li
                            ne items and discounts. Example: use 10.0 for 10.0%.
      -a, --tax2            This percentage is applied to the subtotal, including li
                            ne items and discounts. Example: use 10.0 for 10.0%.
      -d, --discount        This percentage is subtracted from the subtotal. Example
                            : use 10.0 for 10.0%.
      -s, --subject         The estimate subject.
      -o, --notes           Any additional notes to include on the estimate.
      -u, --currency        The currency used by the estimate. If not provided, the
                            client’s currency will be used. See a list of supported
                            currencies
      -i, --issue_date      Date the invoice was issued. Defaults to today’s date.
      -f, --fields          Comma separated list of fields to display in the output.
          --output          The output format: json, table"
  `);
});
