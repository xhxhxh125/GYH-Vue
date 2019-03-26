// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/253e456e3c0bf4bd34afaceb7dcbae282da14066/ora/index.d.ts
declare module "ora" {
    type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
    type Text = string;
    interface Options {
        text?: Text;
        spinner?: string | Spinner;
        color?: Color;
        interval?: number;
        stream?: NodeJS.WritableStream;
        enabled?: boolean;
    }
    interface Spinner {
        interval?: number;
        frames: string[];
    }
    interface Instance {
        start(): Instance;
        stop(): Instance;
        succeed(): Instance;
        fail(): Instance;
        stopAndPersist(symbol?: string): Instance;
        clear(): Instance;
        render(): Instance;
        frame(): Instance;
        text: string;
        color: Color;
    }
    function ora(options: Options | Text): Instance;
    export = ora;
}
