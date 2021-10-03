/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: [
      "v2",
      "projects",
      ":project_id",
      "task_assignments",
      ":task_assignment_id",
    ],
    query: [
      {
        key: "is_active",
        value: "",
        description:
          "Pass true to only return active task assignments and false to return inactive task assignments.",
        disabled: true,
      },
      {
        key: "updated_since",
        value: "",
        description:
          "Only return task assignments that have been updated since the given date and time.",
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
    variable: [
      {
        key: "project_id",
        value: "",
        description:
          "The ID of the project that contains the task assignment you're retrieving.",
      },
      {
        key: "task_assignment_id",
        value: "",
        description: "The ID of the task assignment you're retrieving.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "get",
    describe: "Retrieves the task assignment with the given ID",
    request,
  });
