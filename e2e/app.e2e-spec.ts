import { RestauHotelAdvisorPage } from './app.po';

describe('restau-hotel-advisor App', function() {
  let page: RestauHotelAdvisorPage;

  beforeEach(() => {
    page = new RestauHotelAdvisorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
