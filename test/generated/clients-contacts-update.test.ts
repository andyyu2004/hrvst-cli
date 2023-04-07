/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst clients contacts update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js clients contacts update --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js clients contacts update

    Updates the specific contact by setting the values of the parameters passed

    Options:
          --help          Show help                                        [boolean]
      -c, --contact_id    The ID of the contact you're updating.          [required]
      -l, --client_id     The ID of the client associated with this contact.
      -f, --first_name    The first name of the contact.
      -a, --last_name     The last name of the contact.
      -t, --title         The title of the contact.
      -e, --email         The contact’s email address.
      -p, --phone_office  The contact’s office phone number.
      -h, --phone_mobile  The contact’s mobile phone number.
      -x, --fax           The contact’s fax number.
      -i, --fields        Comma separated list of fields to display in the output.
      -o, --output        The output format: json, table"
  `);
});