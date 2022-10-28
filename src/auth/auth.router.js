//? Auth va a contener las rutas de autorizacion y autenticacion
//* Login
//* Register
//* Recovery Password
//* Verify User

const router = require('express').Router()
const authServices = require('./auth.services')
const {registerUser} = require('../users/users.services')

//? /api/v1/auth

router.post('/register', registerUser)
/* 
INSERT INTO public.users
(id, first_name, last_name, email, "password", phone, birthday, gender, "role", country, status, is_verified, profile_image, "createdAt", "updatedAt")
VALUES('37a104b0-f202-4d98-a526-2cd9c9ca5da1'::uuid, 'victor', 'hernandez', 'email@test.com', '$2b$10$.1fV2WpepAu16x1nFaBUoOD8d6RaPe.80w/DJI.7np4riI3AqzVjS', '4564564546', '2022-10-25 22:52:43.419', 'Male', 'normal', 'MX', 'active', false, NULL, '2022-10-25 22:55:41.611', '2022-10-25 22:55:41.611');
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3YTEwNGIwLWYyMDItNGQ5OC1hNTI2LTJjZDljOWNhNWRhMSIsImVtYWlsIjoiZW1haWxAdGVzdC5jb20iLCJyb2xlIjoibm9ybWFsIiwiaWF0IjoxNjY2NzU4ODA4fQ.tvg8b431ml5oYm6qrbhfgBKz4NDTfhaF5OQrvoRZ9E0
{
  "email":"email@test.com",
  "password":"root"
}
*/
router.post('/login', authServices.login)

module.exports = router
