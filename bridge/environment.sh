#!/usr/bin/env sh

BRIDGE_CLUSTER_ENDPOINT=$(oc whoami --show-server)
export BRIDGE_CLUSTER_ENDPOINT

BRIDGE_CLUSTER_THANOS=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath='{.data.thanosPublicURL}')
export BRIDGE_CLUSTER_THANOS

BRIDGE_CLUSTER_ALERTMANAGER=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath='{.data.alertmanagerPublicURL}')
export BRIDGE_CLUSTER_ALERTMANAGER

BRIDGE_AUTH_BEARER_TOKEN=$(oc whoami --show-token)
export BRIDGE_AUTH_BEARER_TOKEN
