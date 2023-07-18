# KIT

## Local development

### Tech stack

- Node.js
- [pnpm](https://pnpm.js.org/) - package manager

#### 1. Add .env or .env.js file in root directory

```bash
# .env
TEXT=local
```

```bash
# .env.js
module.exports = {
  TEXT: 'local'
}
```

#### 2. Install dependencies

```bash
pnpm install
```

#### 3. Run dev script

```bash
pnpm run dev
```

## Manual deployment

1. Install dependencies

```bash
pnpm install
```

#### 2. Run build script 

```bash
pnpm run build
```

#### 3. Check that all ok and your  result in apps/*/lib directory

#### 4. Eject node_modules for every app from apps/*

```bash
cd apps/api/lib
pnpm -F "." deploy .release
```

#### 5. Check that all ok and your result in apps/*/.release directory

#### 6. Build docker image for every app in apps/* directory

```bash
cd apps/api
docker build -t kit-api .
```

## Deployment into BuzzGuru infrastructure

### Tech stack

- Gitlab CI (CI/CD)
- Docker Swarm (docker orchestrator)
- Nexus (docker registry)
- Traefik (loadbalancer)

#### 1. Check deploy/gitlab-ci.yml file

- Change `DOCKER_SERVICE` prefix and `VIRTUAL_HOST` for your.
- Add more stages/branches if you need.

#### 2. Check deploy/docker-stack.yml file

- Change `loadbalancer.server.port` for port of your app.
- Change `deploy.replicas` if you need.
- Change `deploy.placement.constraints` - `node.labels` for your node labels.
- Add more paths in `traefik.http.routers.*.rule`if you need.

#### 3. Change custom CI configuration path

For every project to `deploy/.gitlab-ci.yml`

[General pipelines](https://git.buzz.guru/lskjs/kit3/-/settings/ci_cd)

#### 4. Check or fill CI Varibles for Docker Registry

- `DOCKER_REGISTRY` - `registry.buzz.guru`
- `DOCKER_REGISTRY_USER` - username of nexus registry
- `DOCKER_REGISTRY_PASS` - password of nexus registry

[Variables](https://git.buzz.guru/lskjs/kit3/-/settings/ci_cd)

#### 5. Check or add .env and .env.js files

files in CI Variables for every stage

- `{{STAGENAME}}_env_file` for .env file
- `{{STAGENAME}}_env_js` for .env.js file

[Variables](https://git.buzz.guru/lskjs/kit3/-/settings/ci_cd)

You can change variable names in `deploy/docker-stack.yml`

#### 6. Check you branch protected option

[Protected Branches](https://git.buzz.guru/lskjs/kit3/-/settings/repository)

#### 7. Push

- master branch for production
- development branch for dev