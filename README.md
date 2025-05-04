# neat-reader
neat-reader 本地版

也可以直接访问： https://xyz349925756.github.io/neat-reader



官网在线版： https://www.neat-reader.cn/webapp#/

> [!note]
>
> 官网支持云端。 本地端是我为了自己查阅资料方便。

![image-20240702141123488](.README.assets/image-20240702141123488.png)

## 使用

1. 支持多种翻译插件，方便查阅资料。

![image-20240702141516453](.README.assets/image-20240702141516453.png)

2. 划词翻译

![image-20240702141608044](.README.assets/image-20240702141608044.png)





## 配置

本地搭配 nginx 使用。

nginx 配置建议

```conf
	server {
	     listen  808;
		 server_name  localhost;
		 location / {
		     root   E:\\reades;
			 index index.html index.htm;
		 }
		 
		error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
	}
```

 root   E:\\reades;   直接把上面的文件放到 reades  目录即可。

## Docker 部署

使用 Docker Compose 进行部署更加简便。

### 使用 Docker Compose

项目已包含 `docker-compose.yml` 配置文件：

```yaml
version: '3.8'

services:
  web:
    image: ccr.ccs.tencentyun.com/library/nginx:latest
    container_name: neat-reader
    ports:
      - "8080:80"  # 将容器的 80 端口映射到主机的 8080 端口
    volumes:
      - ./:/usr/share/nginx/html  # 挂载项目目录，方便开发时实时更新
      - ./nginx.conf:/etc/nginx/conf.d/default.conf  # 挂载 nginx 配置
    restart: unless-stopped 
```

运行命令：

```bash
docker-compose up -d
```

访问 http://localhost:8080 即可使用。

> [!note]
> Docker Compose 部署会自动处理目录挂载和端口映射，无需额外配置。

