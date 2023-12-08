const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendSMS = async (to, body) => {
  try {
    await client.messages.create({
      to,
      from: process.env.TWILIO_PHONE_NUMBER,
      body,
    });
    console.log('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

module.exports = sendSMS;
