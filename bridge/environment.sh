#!/usr/bin/env sh

BRIDGE_CLUSTER_ENDPOINT=$(oc whoami --show-server)
export BRIDGE_CLUSTER_ENDPOINT

BRIDGE_CLUSTER_THANOS=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath='{.data.thanosPublicURL}')
export BRIDGE_CLUSTER_THANOS

BRIDGE_CLUSTER_ALERTMANAGER=$(oc -n openshift-config-managed get configmap monitoring-shared-config -o jsonpath='{.data.alertmanagerPublicURL}')
export BRIDGE_CLUSTER_ALERTMANAGER

BRIDGE_AUTH_BEARER_TOKEN=$(oc whoami --show-token)
export BRIDGE_AUTH_BEARER_TOKEN

BRIDGE_STYLEGUIDE_ENDPOINT="http://127.0.0.1:6060"
export BRIDGE_STYLEGUIDE_ENDPOINT

BRIDGE_PROXY_REWRITE="true"
export BRIDGE_PROXY_REWRITE

echo "BRIDGE_CLUSTER_ENDPOINT:     $BRIDGE_CLUSTER_ENDPOINT"
echo "BRIDGE_CLUSTER_THANOS:       $BRIDGE_CLUSTER_THANOS"
echo "BRIDGE_CLUSTER_ALERTMANAGER: $BRIDGE_CLUSTER_ALERTMANAGER"
echo "BRIDGE_STYLEGUIDE_ENDPOINT   $BRIDGE_STYLEGUIDE_ENDPOINT"
echo "BRIDGE_PROXY_REWRITE         $BRIDGE_PROXY_REWRITE"
echo "BRIDGE_AUTH_BEARER_TOKEN:    hidden"
