/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "clients"],
    query: [
      {
        key: "is_active",
        value: "",
        description:
          "Pass true to only return active clients and false to return inactive clients.",
        disabled: true,
      },
      {
        key: "updated_since",
        value: "",
        description:
          "Only return clients that have been updated since the given date and time.",
        disabled: true,
      },
      {
        key: "page",
        value: "",
        description:
          "The page number to use in pagination. Use `all` to retrieve all pages.",
        disabled: true,
      },
      {
        key: "per_page",
        value: "",
        description:
          "The number of records to return per page. Can range between 1 and 100.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "list",
    describe: "Returns a list of your clients",
    request,
  });
