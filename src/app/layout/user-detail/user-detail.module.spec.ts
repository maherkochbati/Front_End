
import { UserDetailModule } from './user-detail.module';

describe('DashboardModule', () => {
  let userdetailModule: UserDetailModule;

  beforeEach(() => {
    userdetailModule = new UserDetailModule();
  });

  it('should create an instance', () => {
    expect(userdetailModule).toBeTruthy();
  });
});
