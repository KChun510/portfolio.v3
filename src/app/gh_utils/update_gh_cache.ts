import { Octokit } from "octokit"
import { repo_obj } from "./types";
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const octokit = new Octokit({
	auth: process.env.GH_Token
})

const writeFile = async (repoArr: repo_obj[]) => {
	try {
		const filePath = path.join(__dirname, '../', 'caching', 'gitQueryLog.json');
		const dirPath = path.dirname(filePath);

		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true });
		}

		fs.writeFileSync(filePath, JSON.stringify(repoArr, null, 2));
		console.log("Success writing to json (GitHub)");
	} catch (err) {
		console.error("Error writing to json file (GitHub): ", err);
	}
};

const pullAllGitReposInfo = async () => {
	try {
		const res = await octokit.request('GET /users/{username}/repos', {
			username: 'KChun510',
			sort: 'updated',
			direction: 'desc',
			per_page: 100,
			headers: {
				'X-Github-Api-Version': '2022-11-28',
			},
		});
		return res.data;
	} catch (e) {
		console.error("Error getting all repo info: ", e);
	}
};


const extractRepoLang = async (repoName: string) => {
	try {
		const res = await octokit.request('GET /repos/{owner}/{repo}/languages', {
			owner: 'KChun510',
			repo: repoName,
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});
		return res.data
	} catch (e) {
		console.error("Error extracting lang: ", e)
	}
}

export const writeJSONFile = async () => {
	let repoArr: repo_obj[] = []  /* I.e: {repo_name : [description, url, lang's]} */
	const allGitInfo = await pullAllGitReposInfo()

	for (const repoIndex in allGitInfo) {
		const repo = allGitInfo[repoIndex as any]
		const repoLang = await extractRepoLang(repo['name'])
		repoArr.push({ name: repo['name'], des: repo['description'], url: repo['html_url'], lang: repoLang })
	}
	writeFile(repoArr)
};

(async function main() {
	try {
		await writeJSONFile()
		console.log("Success updating gh_cache")
	} catch (err) {
		console.log("Failed writing to gh_cache: ", err)
	}
})()

