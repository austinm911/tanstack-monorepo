import { PagesProject, type PagesProjectArgs } from '@pulumi/cloudflare'
import * as pulumi from '@pulumi/pulumi'

const projectName = 'spa-cf'
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN

const pagesProjectConfig: PagesProjectArgs = {
	accountId: CLOUDFLARE_ACCOUNT_ID,
	name: projectName,
	productionBranch: 'main',
	buildConfig: {
		buildCaching: true,
		buildCommand: 'bun run build',
		destinationDir: '../apps/spa/dist',
		rootDir: '../apps/spa',
	},
}

export const pagesProject = new PagesProject(projectName, pagesProjectConfig)

export const cloudflare_pages = async () => {
	console.log('Running Cloudflare Pages')
	if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
		console.error(
			'CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN does not exist',
		)
		return
	}

	const createProject = async (projectName: string) => {
		// https://developers.cloudflare.com/api/operations/pages-project-create-project

		const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/pages/projects`
		console.log('🚀 ~ file: pages.ts:58 ~ createProject ~ url:', url)
		const request = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
			},
			body: JSON.stringify(pagesProjectConfig),
		}
		console.log('🚀 ~ file: pages.ts:58 ~ createProject ~ request:', request)

		const response = await fetch(url, request)

		console.log('🚀 ~ file: pages.ts:58 ~ createProject ~ response:', response)

		return response.json()
	}

	// Function to trigger initial deployment
	const triggerDeployment = async (projectName: string) => {
		// https://developers.cloudflare.com/api/operations/pages-deployment-create-deployment

		const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/pages/projects/${projectName}/deployments`
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
				'Content-Type': 'application/json',
			},
		})

		return response.json()
	}

	// Trigger deployment after project creation
	pagesProject.name.apply(async (name) => {
		console.log('Creating project:', name)
		const result = await createProject(name)
		console.log('Initial deployment triggered:', result)
	})

	console.log(`url: ${pagesProject.domains[0]}`)

	return {
		CloudFlareDomain: pagesProject.domains[0],
	}
}

await cloudflare_pages()
