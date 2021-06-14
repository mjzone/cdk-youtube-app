#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { FargateDemoStack } from "../lib/fagate";
import { CloudfrontDemoStack } from "../lib/cloudfront";

const app = new cdk.App();

// Cloudfront stack
new CloudfrontDemoStack(app, "CloudfrontDemoStack", {
  stage: "prod",
  env: { account: "your_account_id", region: "us-west-1" },
});

// Fargate stack
new FargateDemoStack(app, "FargateDemoStack", {
  env: { account: "your_account_id", region: "us-west-1" },
});
