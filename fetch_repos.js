const fs = require('fs');

const repos = [
  "DSC-McMaster-U/glassbox-llms",
  "DSC-McMaster-U/corkboard",
  "DSC-McMaster-U/interface-ai",
  "DSC-McMaster-U/Ocular-Disease-Identifier",
  "DSC-McMaster-U/ai-journal",
  "DSC-McMaster-U/DBAC-Companion-App",
  "DSC-McMaster-U/Auto-ML",
  "DSC-McMaster-U/Gamified-Learning-Platform",
  "DSC-McMaster-U/mac-FAQ-chatbot"
];

async function fetchRepoData(repo) {
  console.log(`Fetching data for ${repo}...`);
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'User-Agent': 'NodeJS',
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${repo}: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();

    // Fetch README to extract first image
    let imageUrl = null;
    let description = data.description || '';

    // Get README content
    const readmeResponse = await fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers: {
        'User-Agent': 'NodeJS',
        'Accept': 'application/vnd.github.v3.raw'
      }
    });

    if (readmeResponse.ok) {
      const readmeContent = await readmeResponse.text();
      // Look for first markdown image: ![alt](url)
      const mdRegex = /!\[.*?\]\((.*?)\)/;
      const htmlRegex = /<img.*?src="(.*?)".*?>/;

      const mdMatch = readmeContent.match(mdRegex);
      const htmlMatch = readmeContent.match(htmlRegex);

      if (mdMatch && mdMatch[1]) imageUrl = mdMatch[1];
      else if (htmlMatch && htmlMatch[1]) imageUrl = htmlMatch[1];

      // Resolve relative URLs to raw.githubusercontent.com
      if (imageUrl && !imageUrl.startsWith('http')) {
        // Strip leading slash if present
        imageUrl = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
        imageUrl = `https://raw.githubusercontent.com/${repo}/${data.default_branch}/${imageUrl}`;
      }
    }

    return {
      name: data.name,
      title: data.name,
      description: description,
      topics: data.topics || [],
      githubUrl: data.html_url,
      imageUrl: imageUrl
    };
  } catch (err) {
    console.error(`Error fetching ${repo}:`, err);
    return null;
  }
}

async function main() {
  const results = [];
  for (const repo of repos) {
    const data = await fetchRepoData(repo);
    if (data) results.push(data);
  }

  const content = `export interface OpenSourceProject {
  name: string;
  title: string;
  description: string;
  topics: string[];
  githubUrl: string;
  imageUrl: string | null;
}

export const openSourceProjects: OpenSourceProject[] = ${JSON.stringify(results, null, 2)};
`;

  fs.writeFileSync('apps/website/app/lib/openSourceProjects.ts', content);
  console.log('Successfully wrote openSourceProjects.ts');
}

main();
