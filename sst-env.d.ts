/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "tanstack-monorepo-api": {
      "type": "sst.cloudflare.Worker"
      "url": string
    }
    "tanstack-monorepo-spa": {
      "type": "sst.cloudflare.StaticSite"
      "url": string
    }
  }
}
export {}
