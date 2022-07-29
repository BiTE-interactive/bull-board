import { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter } from '@bull-board/api/dist/typings/app';
import { FastifyInstance } from 'fastify';
export declare class FastifyAdapter implements IServerAdapter {
    private basePath;
    private bullBoardQueues;
    private errorHandler;
    private statics;
    private viewPath;
    private entryRoute;
    private apiRoutes;
    setBasePath(path: string): FastifyAdapter;
    setStaticPath(staticsRoute: string, staticsPath: string): FastifyAdapter;
    setViewsPath(viewPath: string): FastifyAdapter;
    setErrorHandler(handler: (error: Error) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: AppControllerRoute[]): FastifyAdapter;
    setEntryRoute(routeDef: AppViewRoute): FastifyAdapter;
    setQueues(bullBoardQueues: BullBoardQueues): FastifyAdapter;
    registerPlugin(): (fastify: FastifyInstance, _opts: {
        basePath: string;
    }, next: (err?: Error | undefined) => void) => void;
}
