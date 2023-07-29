import { setupServer } from 'msw/node';
import { rest } from 'msw';

export function createServer(handlerConfig) {
  const handlers = handlerConfig.map((config) => {
    // retrieve the method or use as default get if you don't specify the method
    return rest[config.method || 'get'](config.path, (req, res, ctx) => {
      return res(
        ctx.json(
          config.res(req, res, ctx)
        )
      );
    });
  });

  // define the server
  const server = setupServer(...handlers);

  // define before All, after all and before each
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
