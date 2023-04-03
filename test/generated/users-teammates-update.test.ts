/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import { execaCommand } from "execa";
import { expect, test } from "vitest";

test("hrvst users teammates update", async () => {
  const { stdout } = await execaCommand(
    "node dist/cli.js users teammates update --help"
  );
  expect(stdout).toMatchInlineSnapshot(`
    "cli.js users teammates update

    Updates the the assigned teammates for a specific user

    Options:
          --help            Show help                                      [boolean]
      -u, --user_id         The ID of the Manager you are listing teammates for.
                                                                          [required]
      -t, --teammate_ids[]  ID of user you want to assign to the Manager. [required]
      -p, --page            The page number to use in pagination. Use \`all\` to retri
                            eve all pages.
      -e, --per_page        The number of records to return per page. Can range betw
                            een 1 and 2000.
      -f, --fields          Comma separated list of fields to display in the output.
      -o, --output          The output format: json, table"
  `);
});
