export interface Subnet {
    location: string;
    range: string;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface SharedNetwork {
    location: string;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface Summary {
    location: string;
    defined: number;
    used: number;
    touched: number;
    free: number;
}

export interface Networks {
    subnets: Subnet[];
    sharedNetworks: SharedNetwork[];
    summary: Summary;
    vendor: {[key: string]: number};
}
