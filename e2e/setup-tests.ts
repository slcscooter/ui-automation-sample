import { cleanupDrivers } from "./config";

// increased default timeout to allow for slow running / complex tests
jest.setTimeout(30000);

beforeEach(async () => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await cleanupDrivers();
}, 5000);
