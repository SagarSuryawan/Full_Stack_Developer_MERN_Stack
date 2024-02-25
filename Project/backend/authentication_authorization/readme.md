this is same as crud and folder structure is same
there are few changes like 
1) in database Schema add method which can genrate method with the help of jwtToken (jsonWebToken).

2) email validator  dependecies to check email  and validate.

3) in controller there are signin and signup.


signup =>
1) get data from req.body
2) validate if data is present or not.
3) after that validate email with email validator.
4) after that check password is equal to confirmPassword 
5) try catch block  create a user  and check also user is already exists or not with error.code == 11000(11000 is code error which gives user already exists.)

signin =>
1) get data from req.body
2) validate if data is present or not.
3) try catch block check user is present or not if present give password as well with the help of .select("+password") method .

4) after user exists  check given password and stored password is same or not.

5) after that create a token with the help of userSchema method us schema and jwt token [json web token] 

const  token = user.jwtToken()
user.password = undeifined;
const cookieOption = {
    maxAge:24*60*60*1000,
    httponly:true
}
res.cookie("token",token,cookieOption)


