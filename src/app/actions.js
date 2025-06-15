const pullAllGitReposInfo = async () => {
  try {
    const res = await fetch('/api/pullAllGitReposInfo', {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

const extractRepoLang = async (repoName) => {
  try {
    const res = await fetch('/api/excractRepoLang', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ repoName }),
    })
    const data = res.json();
    return data
  } catch (e) {
    console.log(e)
  }
}

async function readJSONFile() {
  try {
    const response = await fetch("/api/readfile", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}

export const get_top_items = async () => {
  try {
    const res = await fetch('/api/spotify/get_top_items', {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export const get_playlist = async () => {
  try {
    const res = await fetch('/api/spotify/get_playlist',
      {
        method: "GET"
      })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const get_currTrack = async () => {
  try {
    const res = await fetch('/api/spotify/get_current_track',
      {
        method: "GET"
      })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const writeJSONFile = async () => {
  let repoArr = []  /* I.e: {repo_name : [description, url, lang's]} */
  const allGitInfo = await pullAllGitReposInfo()

  for (const repoIndex in allGitInfo) {
    const repo = allGitInfo[repoIndex]
    const repoLang = await extractRepoLang(repo['name'])
    repoArr.push({ name: repo['name'], des: repo['description'], url: repo['html_url'], lang: repoLang })
  }


  try {
    const response = await fetch("/api/writefile", {
      method: 'POST',
      body: JSON.stringify(repoArr),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error calling serverless function:', error);
    throw new Error('Error calling serverless function');
  }
};

export async function pullGitInfo() {
  const allGitInfo = await readJSONFile()
  writeJSONFile()
  return allGitInfo
}



