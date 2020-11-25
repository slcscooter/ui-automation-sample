import { loginHelper } from "../helpers/login";

describe("login to bridge", () => {
  it("should login to bridge", async () => {
    // logs in with specified user
    await loginHelper("guy.fawkes", "RememberThe5thOfNovember!");
  });
});
