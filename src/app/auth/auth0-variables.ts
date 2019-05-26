interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MS1HZJKZ0YM7g1OV71hZfq0fnjxvMSYB',
  domain: 'gaanva.auth0.com',
  callbackURL: 'http://18.218.126.230:3000/callback',
  apiUrl: 'http://3.14.88.49:3001'
};