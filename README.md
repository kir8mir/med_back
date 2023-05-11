How to start app:

- npm install
- npx sequelize-cli db:migrate
- npm start

Methods:

- POST https://medserver-p3wp.onrender.com/doctors CREATE A DOCTOR
  EXAMPLE: {
  "first_name": "Docotr First Name",
  "last_name": "Docotr Last Name",
  "specialty": "specialty",
  "qualification": 1,
  "phone": "+380733456743",
  "email": "doctor@example.com",
  "password": "123456"}
- GET https://medserver-p3wp.onrender.com/doctors RETURNS ALL DOCTORS
- GET https://medserver-p3wp.onrender.com/doctors/1 RETURNS DOCTOR WITH ID 1
- DELETE https://medserver-p3wp.onrender.com/doctors/1 REMOVE DOCTOR WITH ID 1
- UPDATE https://medserver-p3wp.onrender.com/doctors/1 UPDATE DOCTOR WITH ID 1

- POST https://medserver-p3wp.onrender.com/medicines CREATE A MEDICINE
  EXAMPLE: {
  "name": "Medicine Name",
  "active_ingredient": "Medicine active ingredient",
  "manufacturer": "manufacturer",
  "form": "form",
  "strength": "strength",
  "route_of_administration": "route_of_administration",
  "indication": "indication",
  "contraindication": "contraindication",
  "side_effects": "side_effects",
  "storage_conditions": "storage_conditions",
  "expiration_date": "expiration_date",
  "prescription_required": false,
  "balance": 100
  }
- GET https://medserver-p3wp.onrender.com/medicines RETURNS ALL MEDICINES
- GET https://medserver-p3wp.onrender.com/medicines/1 RETURNS MEDICINE WITH ID 1
- DELETE https://medserver-p3wp.onrender.com/medicines/1 REMOVE MEDICINE WITH ID 1
- UPDATE https://medserver-p3wp.onrender.com/medicines/1 UPDATE MEDICINE WITH ID 1

- POST https://medserver-p3wp.onrender.com/actions CREATE AN ACTION
  EXAMPLE:
  {
  "doctorId": 1,
  "medicineId": 1,
  "date": "1990-01-01 00:00:00",
  "quantity": 10
  }
- GET https://medserver-p3wp.onrender.com/actions RETURNS ALL ACTIONS
- GET https://medserver-p3wp.onrender.com/actions/1 RETURNS ACTION WITH ID 1
- DELETE https://medserver-p3wp.onrender.com/actions/1 REMOVE ACTION WITH ID 1

- POST https://medserver-p3wp.onrender.com/supplies CREATE A SUPPLIE
  EXAMPLE:
  {
  "meds": {
  "medId": 1,
  "quantity": 101
  }
  }
- GET https://medserver-p3wp.onrender.com/supplies RETURNS ALL SUPPLIES
- GET https://medserver-p3wp.onrender.com/supplies/1 RETURNS SUPPLIE WITH ID 1
- DELETE https://medserver-p3wp.onrender.com/supplies/1 REMOVE SUPPLIE WITH ID 1
- UPDATE https://medserver-p3wp.onrender.com/supplies/1 UPDATE SUPPLIE WITH ID 1

- POST https://medserver-p3wp.onrender.com/login LOGIN REQUEST
  EXAMPLE:
  {
  "email": "admin",
  "password": "admin"
  }
