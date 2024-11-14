import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation huila travel',
        },
        server: [
            {
                url: 'http://localhost:3002',
            }
        ],
    },
    apis: ['../../src/routes/*.ts']
}

export default swaggerOptions;