// Minimal stubs to satisfy TypeScript for React Router dev-time modules

declare module "@react-router/dev/config" {
  export interface Config {
    ssr?: boolean;
    // Allow any additional config options without type errors
    [key: string]: any;
  }
}

declare module "@react-router/dev/routes" {
  export interface RouteConfig {}
  export function index(path: string): any;
  export function route(path: string, file: string): any;
}

declare module "react-router/internal" {
  export type GetInfo<T = any> = any;
  export type GetAnnotations<T = any, U = any> = any;
}
