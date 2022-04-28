const SamlStrategy = require('passport-saml').Strategy;
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = new SamlStrategy({
  callbackUrl: process.env.APP_BASE_URL + '/api/login/callback',
  entryPoint: process.env['SAML_ENTRY_POINT'],
  issuer: process.env['SAML_ISSUER'],
  identifierFormat: null,
  decryptionPvk: fs.readFileSync(__dirname + '/saml/key.pem', 'utf8'),
  privateKey: fs.readFileSync(__dirname + '/saml/key.pem', 'utf8'),
  cert: fs.readFileSync(__dirname + '/saml/idp_cert.pem', 'utf8'),
}, async(profile, done) => {
  const user = await prisma.user.findUnique({
    where: {
      rcsID: profile['user']
    },
  });
  return done(null, user);
});