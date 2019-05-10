interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'sRhfvyC6pBGkpc3KmXT3s0CERd5DYRbk',
  domain: 'gaanva.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};