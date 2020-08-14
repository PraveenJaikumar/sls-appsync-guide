#! /bin/bash

# Author: Serverless Guru

stage=$1
region=$2

if [[ -z $stage ]];
then
    stage="sandbox"
fi

if [[ -z $region ]];
then
    region="us-west-2"
fi

echo "**** Deploying to $stage ****"

SLS_DEBUG=*

# Deploy additionalstacks first
sls deploy additionalstacks --stage $stage --region $region -v

# Deploy main stack last
sls deploy --stage $stage --region $region -v