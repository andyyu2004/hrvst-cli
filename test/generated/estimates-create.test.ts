/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst estimates create", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js estimates create --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js estimates create

    Creates a new estimate object

    Options:
          --help                      Show help                            [boolean]
      -c, --client_id                 The ID of the client this estimate belongs to.
                                                                          [required]
      -n, --number                    If no value is set, the number will be automat
                                      ically generated.
      -p, --purchase_order            The purchase order number.
      -t, --tax                       This percentage is applied to the subtotal, in
                                      cluding line items and discounts. Example: use
                                       10.0 for 10.0%.
      -a, --tax2                      This percentage is applied to the subtotal, in
                                      cluding line items and discounts. Example: use
                                       10.0 for 10.0%.
      -d, --discount                  This percentage is subtracted from the subtota
                                      l. Example: use 10.0 for 10.0%.
      -s, --subject                   The estimate subject.
      -o, --notes                     Any additional notes to include on the estimat
                                      e.
      -u, --currency                  The currency used by the estimate. If not prov
                                      ided, the client’s currency will be used. See
                                      a list of supported currencies
      -i, --issue_date                Date the invoice was issued. Defaults to today
                                      ’s date.
      -l, --line_items[0]kind         The name of an estimate item category.

      -e, --line_items[0]description  Text description of the first line item.
      -m, --line_items[0]unit_price   The individual price per unit.

      -q, --line_items[0]quantity     The unit quantity of the item.
      -x, --line_items[0]taxed        Whether the estimate’s tax percentage applies
                                      to this line item.
          --line_items[0]taxed2       Whether the estimate’s tax2 percentage applies
                                       to this line item.
      -f, --fields                    Comma separated list of fields to display in t
                                      he output.
          --output                    The output format: json, table"
  `);
});