import { ConfigService } from './config.service';

describe('Config', () => {
  it('should be defined', () => {
    expect(new ConfigService('developmebt.env')).toBeDefined();
  });
});
