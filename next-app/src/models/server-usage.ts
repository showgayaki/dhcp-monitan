export interface ServerUsage {
    [key: string]: Usage;
}

export interface Usage{
    unit: string;
    yMax: number;
    usage: number;
}
