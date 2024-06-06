// import { PrismaClient } from "@prisma/client"
// for some reason defining a required input works but import does not...

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

// type AuthorData = {
//     name: string;
//     biography?: string;
// }

async function main() {
    console.log('the scrit is running')

    const allAuthors = await prisma.author.findMany()
    console.log(allAuthors)

    await prisma.author.create({
        data: {
            name: "Kurt Vonnegut"
        }
    })
    console.log("finished")

}

main()


// async function main() {
//     let include
// }


// model Author {
//   id        String    @id @default(cuid())
//   name      String
//   biography String?
//   createdAt DateTime  @default(now())
//   updatedAt DateTime? @updatedAt

//   // Relationship info for Prisma client - NOT database columns
//   books     Book[]

//   @@map("author")
// }

// Initial example from https://www.prisma.io/docs/orm/prisma-client/queries/crud

// const user = await prisma.author.create({
//     data: {
//         name: 'Kurt Vonnegut'
//     }
// })


// function App () {
//     user
// }

// export default App;
