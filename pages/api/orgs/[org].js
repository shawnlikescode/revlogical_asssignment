import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// This is a Dynamic Route Handler. It will be called for every request to /api/orgs/:org.
// The handler will receive the request and response objects, and should respond with a JSON object.

// The handler functions as follows:
// 1. Receive the request and response objects.
// 2. Extract the org from the request URL.
// 3. Fetch the org from Github.
// 4. Fetch the org's repositories.
// 5. Fetch the languages for all repositories in the org. (Promise.all)
// 6. Merge the all the data into a single object.
// 7. Respond with the merged data.

// On error the handler should respond with status 500 and JSON object containing the error message.

export default async function handler(req, res) {
	try {
		const { org } = req.query;
		const { data } = await octokit.request(`GET /orgs/${org}`, {
			org: "org",
		});
		const { data: repos } = await octokit.request(`GET /orgs/${org}/repos`, {
			org: "org",
		});
		const languages = await Promise.all(
			repos.map(async (repo) => {
				const { data } = await octokit.request(`GET /repos/${org}/${repo.name}/languages`, {
					org: "org",
					repo: "repo",
				});
				return data;
			})
		);
		const count = countLanguages(languages);
		const merged = {
			...data,
			languages: count,
		};
		res.status(200).json(merged);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

function countLanguages(languages) {
	let count = {};
	let languagesArray = [];
	for (let i = 0; i < languages.length; i++) {
		for (let key in languages[i]) {
			count[key] = (count[key] ?? 0) + 1;
		}
	}
	for (let key in count) {
		languagesArray.push({
			name: key,
			count: count[key],
		});
	}
	return languagesArray;
}
