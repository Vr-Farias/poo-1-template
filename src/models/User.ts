export class User {
    
    constructor(
        
        private id: string, 
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
        
        ){

            

    }

        // -----get e set ID
        public getId():string {
            return this.id
        }
        public setId(value:string):void {
            this.id = value
        }

        // -----get e set CREATED_AT
        public getCreatedAt(): string {
            return this.createdAt
        }
        public setCreatedAt(value: string):void {
            this.createdAt = value
        }

        // -----get e set PASSWORD
        public getPassword(): string {
            return this.password
        }
        public setPassword(value: string):void {
            this.password = value
        } 

        // -----get e set EMAIL
        public getEmail(): string {
            return this.email
        }
        public setEmail(value: string):void {
            this.email = value
        }

        // -----get e set NAME
        public getName(): string {
            return this.name
        }
        public setName(value: string):void {
            this.name = value
        }

}


const user = new User(
    "u003",
    "Astrodev",
    "astrodev@devinho",
    "senha12345",
    "2023-01-30 10:02:00"
)

const user2 = new User(
    "u024",
    "outroDevinho",
    "ast@devinho",
    "senha12345",
    "2023-01-30 10:06:00"
)



// console.log("id do user: ",user.getId())
// console.table(user2)
// user2.setId("u004")
// console.table(user2)