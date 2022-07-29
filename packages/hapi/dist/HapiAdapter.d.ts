import { AppControllerRoute, AppViewRoute, BullBoardQueues, ControllerHandlerReturnType, IServerAdapter } from '@bull-board/api/dist/typings/app';
import { PluginBase, PluginPackage } from '@hapi/hapi';
export declare class HapiAdapter implements IServerAdapter {
    private basePath;
    private bullBoardQueues;
    private errorHandler;
    private statics;
    private viewPath;
    private entryRoute;
    private apiRoutes;
    setBasePath(path: string): HapiAdapter;
    setStaticPath(staticsRoute: string, staticsPath: string): HapiAdapter;
    setViewsPath(viewPath: string): HapiAdapter;
    setErrorHandler(handler: (error: Error) => ControllerHandlerReturnType): this;
    setApiRoutes(routes: AppControllerRoute[]): HapiAdapter;
    setEntryRoute(routeDef: AppViewRoute): HapiAdapter;
    setQueues(bullBoardQueues: BullBoardQueues): HapiAdapter;
    registerPlugin(): PluginBase<any> & PluginPackage;
}
