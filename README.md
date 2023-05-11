How to start app: 
 - npm install 
 - npx sequelize-cli db:migrate
 - npm start

 Methods:
 - GET /doctors/ RETURNS ALL DOCTORS
 - GET http://localhost:3000/campaign/active RETURNS ALL ACTIVE CAMPAINGS
 - GET http://localhost:3000/donation/:id RETURNS THE CURRENT VALUE OF DONATIONS FOR CAMPAIGN WITH ID = :id
 - POST http://localhost:3000/donation/ BODY: (name: string, campaignId: number, amount: number) MAKE A DONATION
 - POST http://localhost:3000/donation/mark-as-fraud BODY: (name: string) MARKS DONATOR FRAUD