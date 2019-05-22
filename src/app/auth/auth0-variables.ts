interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ZH0SW7Dbvj0DVKbaZ8viszeDRBAyO59Q',
  domain: 'gaanva.auth0.com',
  callbackURL: 'http://3.14.88.49:3000/callback',
  apiUrl: 'http://3.14.88.49:3001'
};