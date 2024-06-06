import { PrismaClient } from "@prisma/client"

// const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient()



async function main() {
    console.log('YES - STEP 1')
    
    const allStaff = await prisma.employee.findMany()

    console.log(allStaff, 'YES - STEP 2')
    
    await prisma.employee.create({
        data: {
            name: "John Doe"
            }
    })

    console.log("YES - STEP 99");
            
}
            
main()