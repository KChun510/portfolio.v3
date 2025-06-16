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

export async function pullGitInfo() {
  const allGitInfo = await readJSONFile()
  return allGitInfo
}



