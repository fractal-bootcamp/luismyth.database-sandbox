// import { PrismaClient } from "@prisma/client"

const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient()



async function main() {
    console.log('the script is running')
    
    const allAuthors = await prisma.author.findMany()
    console.log(allAuthors)
    
    await prisma.author.create({
        data: {
            name: "Yet another Kurt Vonnegut"
            }
    })

    console.log("finished");
    
    const borrowBook = await prisma.book.update({
        where: {
            id: 'bookid01234',
        },
        data: {
            borrowerId: 'member987',
        }
    })
    console.log(borrowBook)

    console.log("all done")
            
}
            
main()