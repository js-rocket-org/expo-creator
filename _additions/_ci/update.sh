#!/bin/sh

# Bitbucket pipelines does not support linking to multiple yml files
# see: https://community.atlassian.com/t5/Bitbucket-questions/Can-bitbucket-pipeline-yml-refer-another-yml-file/qaq-p/1346283
# This script concatenates pipelines configuration files that are logically separated
# to produce the one at the root

cat _ci/common.yml _ci/dev.yml _ci/staging.yml _ci/main.yml  > bitbucket-pipelines.yml
