
Task-1 :Create a EKS cluster in AWS cloud  then Connect this service to EFS vloume with root access to provision dynamic volume for storage then Map users<br /> folder in this app(App should be deployed in EKS cluster) to EFS volume so that persist even after pod restart or distroyed.<br />
Tesk-2: Store keys and password in AWS Secret Manager or kubernetes config map <br />
Task-3 :Automate this process using CI/CD tools <br />


To test this app you can send request using curl or postman after running the App  in EKS cluster :

```sh
curl --location --request POST 'http://127.0.0.1:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user":"ram",
    "gender":"male",
    "country":"indian"
}'
```
