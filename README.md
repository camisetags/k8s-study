# k8s-study

## Basic docker commands

### Buildando imagem do container

```sh
  $ docker build --tag=camiseta-app .
```

### Rodando Container

```sh
  $ docker run -p 4000:4000 camiseta-app
```

## Basic k8s commands

```sh
  $ kubectl apply -f file-name.yaml # will apply k8s configs from a file
```

```sh
  $ kubectl get all # will show all running k8s components on cluster
```

```sh
  $ kubectl logs <pod-name> # will show pods logs
```

```sh
  $ kubectl logs <pod-name> # will show pods logs
```

```sh
  $ kubectl exec -it <pod-name> sh # will enter on a container running on the pod
```
