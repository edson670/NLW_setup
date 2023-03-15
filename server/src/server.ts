import Fastify from "fastify";

const app = Fastify()

app.get('/', () => {
    return 'Hello word'
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running')
})