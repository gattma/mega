```helm repo add gp-helm-charts https://gepaplexx.github.io/gp-helm-charts/```

```helm upgrade --install -f build-backend-values.yml mega-backend-bke gp-helm-charts/gp-bke-mvn-tekton -n mega-cicd ```

```helm upgrade --install -f build-frontend-values.yml mega-frontend-bke gp-helm-charts/gp-bke-s2i-tekton -n mega-cicd```

```oc adm policy add-scc-to-user privileged -z pipeline -n mega-cicd```

```oc adm policy add-scc-to-user privileged -z pipeline -n mega-cicd```