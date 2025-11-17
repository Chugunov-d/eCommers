type ClassValue = string | Record<string, boolean> | undefined | null


export const className = (...args: ClassValue[]):string =>{
    return args.flatMap((args) => {
        if (!args) return [];
        if (typeof args === 'string') return [args];
        if (typeof args === 'object') {return Object.entries(args).filter(([_, value]) => Boolean(value)).map(([key]) => key);}
        return [];
    }).join(' ');
}