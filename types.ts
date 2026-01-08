export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  CORPORATE = '/corporate-travel',
  CONTACT = '/contact',
  DESTINATIONS = '/destinations',
  OFFERS = '/offers',
  DISNEY = '/disney',
  FORMS = '/forms',
  BLOG = '/blog',
  BOOK_ONLINE = '/book-online',
  SUBSCRIPTIONS = '/my-subscriptions',
  NOTIFICATIONS = '/notifications',
}

export interface NavItem {
  label: string;
  path: string;
  isDropdown?: boolean;
}