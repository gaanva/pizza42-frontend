interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ZH0SW7Dbvj0DVKbaZ8viszeDRBAyO59Q',
  domain: 'gaanva.auth0.com',
  callbackURL: 'http://localhost:3000/callback',
  apiUrl: 'http://localhost:3001'
};