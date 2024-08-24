import * as cloudflare from "@pulumi/cloudflare"
import * as pulumi from "@pulumi/pulumi"

const projectName = "spa-cf"
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID

// Cloudflare Pages Project
export const pagesProject = new cloudflare.PagesProject(
	projectName,
	{
		accountId: CLOUDFLARE_ACCOUNT_ID,
		name: projectName,
		productionBranch: "main",
	},
	{
		protect: true,
	},
)
