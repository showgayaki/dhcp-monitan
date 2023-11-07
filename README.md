# DHCPもにたん
ISC DHCP GUI Monitoring.  


## Special Thanks
[glass-isc-dhcp](https://github.com/Akkadius/glass-isc-dhcp)  
[nextjs-dashboard](https://github.com/kitloong/nextjs-dashboard)  


## Development
```
# Create a network
docker network create dhcp-monitan_network

# Build & Up
docker compose -f docker-compose.dev.yml build && docker compose -f docker-compose.dev.yml up -d
```


## Production
```
# chmod dhcpd.log (Maybe there is a better way...)
chmod o+r /var/log/dhcpd.log

# copy env file
cp next-app/.env.production .env

# Create a network
docker network create dhcp-monitan_network

# Build & Up
docker compose -f docker-compose.prod.yml build && docker compose -f docker-compose.prod.yml up -d
```


## Screenshots
![index-480](https://github.com/showgayaki/dhcp-monitan/assets/47170845/1c74c463-e0e2-47fb-9b9b-dd3a37319b9f)  
![leases-480--bokashi](https://github.com/showgayaki/dhcp-monitan/assets/47170845/30bd5ca7-76cc-4538-82b4-7e9dc767fade)  


## Reference
### Docker
https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose  

### dhcpd-pools
https://dhcpd-pools.sourceforge.net/  

### calc subnetmask
https://zenn.dev/s_yoshiki/articles/entry-20210208-subnetmask-js  

### oui
https://standards-oui.ieee.org/oui/oui.txt  
https://qiita.com/hibiki1031/items/e0e317867a2eb62530dc  

### rsyslog
https://qiita.com/Higemal/items/c51daa2c8bcdaf3b6fc8  
> "RSYSLOG_TraditionalFileFormat"　→ "OCT 10 09:01:01"  
> "RSYSLOG_FileFormat"　　　　　　→ "2018-10-10T10:37:53.063083+09:00"  
