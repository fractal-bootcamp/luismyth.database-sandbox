


const user = await Prisma.author.create({
    data: {
        name: 'Kurt Vonnegut'
    }
})