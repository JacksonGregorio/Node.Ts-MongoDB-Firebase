import express from 'express';
import cors from 'cors';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';

const routes = (app: express.Application) => {
    
    app.use(cors({
        origin: '*'
    }));

    app.route('/').get((req, res) => {
        res.status(200).send('Bem vindo a API :)');
    });

    app.use(
        express.json(),
        UserRoutes,
        AuthRoutes
    );
}

export default routes;