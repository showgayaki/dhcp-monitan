export interface Client{
    hostname: string;
    ip_address: string;
    mac_address: string;
    vendor: string;
    start: string;
    end?: string;
}

export interface ClientList{
    network_address: string;
    netmask: string;
    cidr: number;
    static: Client[];
    dynamic: Client[];
}
