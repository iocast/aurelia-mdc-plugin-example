import { routes } from './routes';

export class IdeasIndex {

    router;

    configureRouter(config, router) {
        config.map([
            ...routes
        ]);
    }

}
