export interface Subnet {
    location: number;
    range: string;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface SharedNetwork {
    location: number;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface Summary {
    location: number;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface Networks {
    subnets: Subnet[];
    sharedNetworks: SharedNetwork[];
    summary: Summary[];
    vendor: {[key: string]: number};
}
